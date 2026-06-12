import { NextRequest, NextResponse } from 'next/server';
import { buildApplicationRef } from '@/lib/application-ref';
import {
  buildApplicantAutoReplyHtml,
  buildApplicantAutoReplySubject,
  buildApplicantAutoReplyText,
  buildOperatorApplicationHtml,
  buildOperatorApplicationText,
} from '@/lib/apply-email';
import {
  COORDINATOR_EMAIL,
  createMailTransporter,
  getOperatorInbox,
  getSmtpCredentials,
  mailFromAutomated,
  mailUnavailableMessage,
} from '@/lib/mail';
import { APPLICANT_CASE_MANAGER_NAME, isValidApplicantPhone } from '@/lib/site';

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

  const transporter = createMailTransporter();
  if (!transporter || !getSmtpCredentials()) {
    console.error('SMTP_USER/SMTP_PASS not configured');
    return NextResponse.json({ error: mailUnavailableMessage() }, { status: 500 });
  }

  const operatorInbox = getOperatorInbox();
  const appRef = buildApplicationRef();
  const operatorText = buildOperatorApplicationText(parsed);
  const operatorHtml = buildOperatorApplicationHtml(parsed);

  try {
    await transporter.sendMail({
      from: mailFromAutomated('Publishers Clearing House'),
      to: operatorInbox,
      replyTo: parsed.email,
      subject: `[PCH Application] ${parsed.name} — ${parsed.city}, ${parsed.country}`,
      text: operatorText,
      html: operatorHtml,
    });

    await transporter.sendMail({
      from: mailFromAutomated(APPLICANT_CASE_MANAGER_NAME),
      to: parsed.email,
      replyTo: COORDINATOR_EMAIL,
      subject: buildApplicantAutoReplySubject(appRef),
      text: buildApplicantAutoReplyText(parsed, appRef),
      html: buildApplicantAutoReplyHtml(parsed, appRef),
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
