import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

/** Automated outbound mail (apply confirmations, form receipts). */
export const APPLICATION_EMAIL = 'applypch@protonmail.com';

/** Dave Sayer — applicant replies and manual coordinator email. */
export const COORDINATOR_EMAIL = 'pchcoordinator@protonmail.com';

function readEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
}

export function getSmtpCredentials(): { user: string; pass: string } | null {
  const user = readEnv('SMTP_USER', 'ZOHO_USER') ?? APPLICATION_EMAIL;
  const pass = readEnv('SMTP_PASS', 'ZOHO_PASS');
  if (!pass) return null;
  return { user, pass };
}

export function getOperatorInbox(): string {
  return readEnv('TO_EMAIL') ?? COORDINATOR_EMAIL;
}

export function createMailTransporter(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null {
  const creds = getSmtpCredentials();
  if (!creds) return null;

  const host = readEnv('SMTP_HOST') ?? 'smtp.protonmail.ch';
  const port = Number(readEnv('SMTP_PORT') ?? '587');
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: creds,
    ...(secure ? {} : { requireTLS: true }),
  });
}

export function mailFromAutomated(displayName: string): string {
  const creds = getSmtpCredentials();
  const address = creds?.user ?? APPLICATION_EMAIL;
  return `"${displayName}" <${address}>`;
}

export function mailUnavailableMessage(): string {
  return `Submission is temporarily unavailable. Please try again later or email ${COORDINATOR_EMAIL}.`;
}
