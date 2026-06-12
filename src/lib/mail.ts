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
  const user = readEnv('ZOHO_USER', 'SMTP_USER');
  const passRaw = readEnv('ZOHO_PASS', 'SMTP_PASS');
  if (!user || !passRaw) return null;
  const pass = passRaw.replace(/\s/g, '');
  return { user, pass };
}

export function getOperatorInbox(): string {
  return readEnv('TO_EMAIL') ?? COORDINATOR_EMAIL;
}

function resolveSmtpHost(): string {
  const explicit = readEnv('SMTP_HOST');
  if (!explicit) return 'smtp.zoho.com';
  const lower = explicit.toLowerCase();
  // Ignore stale Gmail/Proton hosts left on Vercel when switching back to Zoho.
  if (lower.includes('protonmail') || lower.includes('gmail')) return 'smtp.zoho.com';
  return explicit;
}

export function createMailTransporter(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null {
  const creds = getSmtpCredentials();
  if (!creds) return null;

  const host = resolveSmtpHost();
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

export function formatSmtpError(err: unknown): string {
  if (err instanceof Error) return err.message;
  return String(err);
}
