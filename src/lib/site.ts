const DEFAULT_SITE_URL = 'https://applypchdigital.com';

/**
 * Public site origin for sitemap, canonicals, and OG URLs.
 * Always prefer the custom domain — never fall back to *.vercel.app, or Google
 * Search Console rejects the sitemap ("URL not allowed") for applypchdigital.com.
 */
function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (value) {
    try {
      const host = new URL(value.replace(/\/$/, '')).hostname.toLowerCase();
      // Ignore accidental vercel.app overrides in production env
      if (host.endsWith('.vercel.app')) return DEFAULT_SITE_URL;
      return value.replace(/\/$/, '');
    } catch {
      return DEFAULT_SITE_URL;
    }
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return 'applypchdigital.com';
  }
})();

import { COORDINATOR_EMAIL } from '@/lib/email-addresses';

export { COORDINATOR_EMAIL };

/** Public contact — Dave Sayer replies from coordinator inbox. */
export const CONTACT_EMAIL = COORDINATOR_EMAIL;

/** Full URL for links in emails and operator templates (respects NEXT_PUBLIC_SITE_URL). */
export function absoluteSiteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Primary public brand — what visitors should feel first. */
export const PCH_BRAND_NAME = 'PCH Digital';

/** Heritage / prize brand still used in winner stories and history. */
export const PCH_HERITAGE_NAME = 'Publishers Clearing House';

export const PCH_OPERATOR = 'PCH Digital (ARB Interactive Group)';
export const PCH_ADDRESS_LINE1 = '382 Channel Drive';
export const PCH_ADDRESS_LINE2 = 'Port Washington, NY 11050';

/** Short note on current operations — PCH Digital first. */
export const PCH_OWNERSHIP_NOTE =
  'PCH Digital continues the Publishers Clearing House prize tradition under new ownership. Current sweepstakes, prize awards, and Prize Patrol presentations for new winners are ongoing.';

/** Highest lump-sum prize on the site */
export const MAX_LUMP_SUM_PRIZE = '$2,500,000';
export const MAX_LUMP_SUM_LABEL = '$2,500,000 Mega Prize';

/** Major SuperPrize tier (below Mega Prize) */
export const SUPER_PRIZE_AMOUNT = '$1,250,000';
export const SUPER_PRIZE_LABEL = '$1,250,000 SuperPrize';

/** Coordinator email contact window (hours) */
export const APPLICATION_RESPONSE_HOURS = 24;

/** Badge / hero line — email follow-up */
export function applicantResponseBadge(hours = APPLICATION_RESPONSE_HOURS): string {
  return `Email from coordinator within ${hours} hours`;
}

/** Standard sentence: who contacts them and when */
export function applicantContactWithin(hours = APPLICATION_RESPONSE_HOURS): string {
  return `Every applicant is contacted by email (${CONTACT_EMAIL}) within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your email inbox and spam folder regularly. Reply on the email thread from Dave Sayer.';

export const APPLICANT_CONTACT_CHANNEL_NOTE =
  'Reply CONFIRM on email — your file continues on that email thread through final steps.';

export const WINNER_NOTIFICATION =
  'Selected winners receive prize details and next steps by email.';

/** Name shown on apply success — matches who reaches out */
export const APPLICANT_CASE_MANAGER_NAME = 'Dave Sayer';
export const APPLICANT_CASE_MANAGER_TITLE = 'PCH Application Coordinator';

export function applicantCaseManagerIntro(hours = APPLICATION_RESPONSE_HOURS): string {
  return `You have been assigned to ${APPLICANT_CASE_MANAGER_NAME}, ${APPLICANT_CASE_MANAGER_TITLE}. You should expect a personal email from him at ${CONTACT_EMAIL} within ${hours} hours.`;
}

export const WINNERS_TAGLINE =
  'Real winners with their PCH prize checks from around the world.';

export const ELIGIBLE_REGIONS_SHORT =
  'Open to legal residents of the United States, Canada, United Kingdom, Germany, Netherlands, Australia, and other selected countries.';

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set in Vercel env. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

/** Combine country code + national number for API/email (avoids autofill putting "us" in one field). */
export function formatApplicantPhone(countryCode: string, nationalNumber: string): string {
  const code = countryCode.trim() || '+1';
  const digits = nationalNumber.replace(/\D/g, '');
  return digits ? `${code} ${digits}` : code;
}

/** Applicant mobile — min 10 digits; rejects country-code-only junk (e.g. browser autofill "us"). */
export function isValidApplicantPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) return false;
  const lettersOnly = phone.replace(/[\d\s+\-().]/g, '').trim().toLowerCase();
  if (lettersOnly.length >= 2 && digits.length < 10) return false;
  return true;
}