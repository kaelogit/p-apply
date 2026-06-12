import 'server-only';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { COORDINATOR_EMAIL } from '@/lib/email-addresses';

function readEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
}

export function getSmtpCredentials(): { user: string; pass: string } | null {
  const user = readEnv('SMTP_USER', 'ZOHO_USER');
  const pass = readEnv('SMTP_PASS', 'ZOHO_PASS');
  if (!user || !pass) return null;
  return { user, pass };
}

export function getOperatorInbox(): string {
  return readEnv('TO_EMAIL') ?? COORDINATOR_EMAIL;
}

export function createMailTransporter(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null {
  const creds = getSmtpCredentials();
  if (!creds) return null;

  const host = readEnv('SMTP_HOST') ?? 'smtp.gmail.com';
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
  if (!creds) return `"${displayName}" <noreply@example.com>`;
  return `"${displayName}" <${creds.user}>`;
}

export function mailUnavailableMessage(): string {
  return `Submission is temporarily unavailable. Please try again later or email ${COORDINATOR_EMAIL}.`;
}
