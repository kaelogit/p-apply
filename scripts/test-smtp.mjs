/**
 * Test Zoho SMTP credentials locally.
 * Usage: set ZOHO_USER and ZOHO_PASS in .env.local, then: node scripts/test-smtp.mjs
 */
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env.local');

if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

const user = process.env.ZOHO_USER || process.env.SMTP_USER;
const passRaw = process.env.ZOHO_PASS || process.env.SMTP_PASS;
const pass = passRaw?.replace(/\s/g, '');
const to = process.env.TO_EMAIL || 'support@applypchdigital.com';
const host = process.env.SMTP_HOST || 'smtp.zoho.com';
const port = Number(process.env.SMTP_PORT || 587);

if (!user || !pass) {
  console.error('Missing ZOHO_USER and ZOHO_PASS in .env.local');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
  ...(port === 465 ? {} : { requireTLS: true }),
});

console.log(`Testing Zoho SMTP as ${user} via ${host}:${port} → ${to} ...`);

try {
  await transporter.verify();
  console.log('✓ SMTP connection verified');

  const info = await transporter.sendMail({
    from: `"PCH Test" <${user}>`,
    to,
    subject: '[PCH SMTP Test] Connection OK',
    text: 'If you received this, Zoho SMTP is configured correctly.',
  });

  console.log('✓ Test email sent:', info.messageId);
} catch (err) {
  console.error('✗ SMTP failed:', err instanceof Error ? err.message : err);
  process.exit(1);
}
