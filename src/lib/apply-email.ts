import { getPrizeTier } from '@/data/prize-categories';
import {
  APPLY_SMS_NUMBER_DISPLAY,
  APPLICANT_CASE_MANAGER_NAME,
  APPLICANT_CASE_MANAGER_TITLE,
  PCH_BRAND_NAME,
  SITE_DOMAIN,
} from '@/lib/site';
import { COORDINATOR_EMAIL } from '@/lib/mail';
import { escapeHtml } from '@/lib/utils';
import { firstNameFromFullName } from '@/lib/application-ref';

export interface ApplyEmailPayload {
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
}

export function formatPrizeCategoryLabel(value: string): string {
  if (value === 'all') return 'All';
  const tier = getPrizeTier(value);
  if (tier) return tier.applyLabel;
  const digits = value.replace(/\D/g, '');
  if (digits.length >= 6) {
    const n = Number(digits);
    if (n >= 1_000_000 && n % 1_000_000 === 0) {
      return `$${(n / 1_000_000).toLocaleString('en-US')} Mega Prize`;
    }
    if (n >= 1_000_000) {
      return `$${n.toLocaleString('en-US')}`;
    }
  }
  return value;
}

export function buildApplicantAutoReplySubject(appRef: string): string {
  return `Your ${SITE_DOMAIN} application — Ref ${appRef}`;
}

export function buildOperatorApplicationText(payload: ApplyEmailPayload): string {
  return [
    'New PCH Application',
    `Name: ${payload.name}`,
    '',
    `Email: ${payload.email}`,
    '',
    `Mobile phone (text updates): ${payload.phone}`,
    '',
    `Digits only: ${payload.phone.replace(/\D/g, '')}`,
    '',
    `Country (residence): ${payload.country}`,
    '',
    `Region: ${payload.region}`,
    '',
    `City: ${payload.city}`,
    '',
    `Address: ${payload.address}`,
    '',
    `Postal code: ${payload.postalCode}`,
    '',
    `Prize applying for: ${payload.prizeCategory}`,
    '',
    'Message:',
    '',
    payload.message,
    '',
    'Submitted via PCH application form.',
  ].join('\n');
}

export function buildOperatorApplicationHtml(payload: ApplyEmailPayload): string {
  return `
    <h2>New PCH Application</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Mobile phone (text updates):</strong> ${escapeHtml(payload.phone)}</p>
    <p style="font-size:13px;color:#444;"><strong>Digits only:</strong> ${escapeHtml(payload.phone.replace(/\D/g, ''))}</p>
    <p><strong>Country (residence):</strong> ${escapeHtml(payload.country)}</p>
    <p><strong>Region:</strong> ${escapeHtml(payload.region)}</p>
    <p><strong>City:</strong> ${escapeHtml(payload.city)}</p>
    <p><strong>Address:</strong> ${escapeHtml(payload.address)}</p>
    <p><strong>Postal code:</strong> ${escapeHtml(payload.postalCode)}</p>
    <p><strong>Prize applying for:</strong> ${escapeHtml(payload.prizeCategory)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
    <hr />
    <p style="color:#666;font-size:12px;">Submitted via PCH application form.</p>
  `;
}

export function buildApplicantAutoReplyText(payload: ApplyEmailPayload, appRef: string): string {
  const first = firstNameFromFullName(payload.name);
  const category = formatPrizeCategoryLabel(payload.prizeCategory);

  return [
    `Dear ${first},`,
    '',
    `Thank you for submitting your ${PCH_BRAND_NAME} prize application at ${SITE_DOMAIN}. We have received your application.`,
    '',
    `Application reference: ${appRef}`,
    `Category: ${category}`,
    '',
    `You have been assigned to me, ${APPLICANT_CASE_MANAGER_NAME}, ${APPLICANT_CASE_MANAGER_TITLE}, as your point of contact on this file.`,
    '',
    `Please respond to this email or our text from ${APPLY_SMS_NUMBER_DISPLAY} within 12 hours to begin your application process.`,
    '',
    'Once we receive your reply, your file will continue to the next stage of review and all future communication regarding this application will remain within this email thread.',
    '',
    'This is not a final prize award.',
    '',
    APPLICANT_CASE_MANAGER_NAME,
    APPLICANT_CASE_MANAGER_TITLE,
    PCH_BRAND_NAME,
    COORDINATOR_EMAIL,
  ].join('\n');
}

export function buildApplicantAutoReplyHtml(payload: ApplyEmailPayload, appRef: string): string {
  const first = firstNameFromFullName(payload.name);
  const category = formatPrizeCategoryLabel(payload.prizeCategory);

  return `
    <p>Dear ${escapeHtml(first)},</p>
    <p>Thank you for submitting your ${escapeHtml(PCH_BRAND_NAME)} prize application at ${escapeHtml(SITE_DOMAIN)}. We have received your application.</p>
    <p><strong>Application reference:</strong> ${escapeHtml(appRef)}<br />
    <strong>Category:</strong> ${escapeHtml(category)}</p>
    <p>You have been assigned to me, ${escapeHtml(APPLICANT_CASE_MANAGER_NAME)}, ${escapeHtml(APPLICANT_CASE_MANAGER_TITLE)}, as your point of contact on this file.</p>
    <p>Please respond to this email or our text from ${escapeHtml(APPLY_SMS_NUMBER_DISPLAY)} within 12 hours to begin your application process.</p>
    <p>Once we receive your reply, your file will continue to the next stage of review and all future communication regarding this application will remain within this email thread.</p>
    <p>This is not a final prize award.</p>
    <p>
      ${escapeHtml(APPLICANT_CASE_MANAGER_NAME)}<br />
      ${escapeHtml(APPLICANT_CASE_MANAGER_TITLE)}<br />
      ${escapeHtml(PCH_BRAND_NAME)}<br />
      ${escapeHtml(COORDINATOR_EMAIL)}
    </p>
  `;
}
