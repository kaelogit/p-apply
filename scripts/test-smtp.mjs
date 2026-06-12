/**
 * Test Gmail SMTP credentials locally.
 * Usage: set SMTP_USER and SMTP_PASS in .env.local, then: node scripts/test-smtp.mjs
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

const user = process.env.SMTP_USER || process.env.ZOHO_USER;
const passRaw = process.env.SMTP_PASS || process.env.ZOHO_PASS;
const pass = passRaw?.replace(/\s/g, '');
const to = process.env.TO_EMAIL || 'pchcoordinator@protonmail.com';

if (!user || !pass) {
  console.error('Missing SMTP_USER and SMTP_PASS (or ZOHO_* fallbacks) in .env.local');
  process.exit(1);
}

const isGmail = user.toLowerCase().endsWith('@gmail.com') || user.toLowerCase().endsWith('@googlemail.com');
const transporter = nodemailer.createTransport(
  isGmail
    ? { service: 'gmail', auth: { user, pass } }
    : {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user, pass },
        requireTLS: true,
      }
);

console.log(`Testing SMTP as ${user} → ${to} ...`);

try {
  await transporter.verify();
  console.log('✓ SMTP connection verified');

  const info = await transporter.sendMail({
    from: `"PCH Test" <${user}>`,
    to,
    subject: '[PCH SMTP Test] Connection OK',
    text: 'If you received this, Gmail SMTP is configured correctly.',
  });

  console.log('✓ Test email sent:', info.messageId);
} catch (err) {
  console.error('✗ SMTP failed:', err instanceof Error ? err.message : err);
  process.exit(1);
}
