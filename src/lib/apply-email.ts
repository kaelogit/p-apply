import { getPrizeTier } from '@/data/prize-categories';
import { escapeHtml } from '@/lib/utils';

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

export function buildOperatorApplicationText(payload: ApplyEmailPayload, appRef: string): string {
  return [
    'New PCH Application',
    `Application reference: ${appRef}`,
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

export function buildOperatorApplicationHtml(payload: ApplyEmailPayload, appRef: string): string {
  return `
    <h2>New PCH Application</h2>
    <p><strong>Application reference:</strong> ${escapeHtml(appRef)}</p>
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
