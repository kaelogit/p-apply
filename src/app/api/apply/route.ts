import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml } from '@/lib/utils';

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
  message?: string;
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
  const message = typeof o.message === 'string' ? o.message.trim() : undefined;
  const ageConfirm = o.ageConfirm === true;

  if (!name || !email || !phone || !country || !region || !city || !address || !postalCode || !prizeCategory || !ageConfirm) {
    return null;
  }

  return { name, email, phone, country, region, city, address, postalCode, prizeCategory, message, ageConfirm };
}

export async function POST(request: NextRequest) {
  const parsed = validate(await request.json());
  if (!parsed) {
    return NextResponse.json(
      { error: 'Please complete all required fields and confirm you are 18 or older.' },
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

  const html = `
    <h2>New PCH Application</h2>
    <p><strong>Name:</strong> ${escapeHtml(parsed.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(parsed.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(parsed.phone)}</p>
    <p><strong>Country:</strong> ${escapeHtml(parsed.country)}</p>
    <p><strong>Region:</strong> ${escapeHtml(parsed.region)}</p>
    <p><strong>City:</strong> ${escapeHtml(parsed.city)}</p>
    <p><strong>Address:</strong> ${escapeHtml(parsed.address)}</p>
    <p><strong>Postal code:</strong> ${escapeHtml(parsed.postalCode)}</p>
    <p><strong>Prize applying for:</strong> ${escapeHtml(parsed.prizeCategory)}</p>
    ${parsed.message ? `<p><strong>Message:</strong></p><p>${escapeHtml(parsed.message)}</p>` : ''}
    <hr />
    <p style="color:#666;font-size:12px;">Submitted via PCH application form.</p>
  `;

  try {
    await transporter.sendMail({
      from: zohoUser,
      to: toEmail || zohoUser,
      replyTo: parsed.email,
      subject: `[PCH Application] ${parsed.name} — ${parsed.city}, ${parsed.country}`,
      text: [
        `Name: ${parsed.name}`,
        `Email: ${parsed.email}`,
        `Phone: ${parsed.phone}`,
        `Country: ${parsed.country}`,
        `Region: ${parsed.region}`,
        `City: ${parsed.city}`,
        `Address: ${parsed.address}`,
        `Postal: ${parsed.postalCode}`,
        `Prize: ${parsed.prizeCategory}`,
        '',
        parsed.message || '',
      ].join('\n'),
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Application form send error:', err);
    return NextResponse.json(
      { error: 'Could not submit your application. Please try again.' },
      { status: 500 }
    );
  }
}
