export const SITE_URL = 'https://applypch.com';
export const SITE_DOMAIN = 'applypch.com';
export const CONTACT_EMAIL = 'support@applypch.com';

export const PCH_BRAND_NAME = 'Publishers Clearing House';
export const PCH_OPERATOR = 'PCH Digital (ARB Interactive Group)';
export const PCH_ADDRESS_LINE1 = '382 Channel Drive';
export const PCH_ADDRESS_LINE2 = 'Port Washington, NY 11050';

/** Short note on current PCH operations after restructuring — use on About, FAQ, legal pages. */
export const PCH_OWNERSHIP_NOTE =
  'Publishers Clearing House continues under new ownership through PCH Digital. Current sweepstakes, prize awards, and Prize Patrol presentations for new winners are ongoing.';

/** Highest lump-sum prize on the site */
export const MAX_LUMP_SUM_PRIZE = '$2,500,000';
export const MAX_LUMP_SUM_LABEL = '$2,500,000 Mega Prize';

/** Major SuperPrize tier (below Mega Prize) */
export const SUPER_PRIZE_AMOUNT = '$1,250,000';
export const SUPER_PRIZE_LABEL = '$1,250,000 SuperPrize';

/** Every applicant receives email and text contact within this window */
export const APPLICATION_RESPONSE_HOURS = 24;

const DEFAULT_APPLY_SMS_DIGITS = '19177430256';
const DEFAULT_APPLY_SMS_DISPLAY = '+1 (917) 743-0256';

/** Read env; treat blank strings as unset (empty Vercel vars break sms: links). */
function readPublicEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
}

/** Text/SMS apply — digits only for sms: links */
export const APPLY_SMS_NUMBER_DIGITS = (() => {
  const raw = readPublicEnv(
    'NEXT_PUBLIC_APPLY_SMS_NUMBER',
    'NEXT_PUBLIC_WHATSAPP_NUMBER' // legacy env name on Vercel
  );
  const digits = raw?.replace(/\D/g, '') ?? '';
  return digits.length >= 10 ? digits : DEFAULT_APPLY_SMS_DIGITS;
})();

/** Display format for the apply-by-text number */
export const APPLY_SMS_NUMBER_DISPLAY =
  readPublicEnv('NEXT_PUBLIC_APPLY_SMS_DISPLAY') ?? DEFAULT_APPLY_SMS_DISPLAY;

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

/** Badge / hero line — email + SMS follow-up */
export function applicantResponseBadge(hours = APPLICATION_RESPONSE_HOURS): string {
  return `Email & text within ${hours} hours`;
}

/** Standard sentence: who contacts them and when */
export function applicantContactWithin(hours = APPLICATION_RESPONSE_HOURS): string {
  return `Every applicant is contacted by email (${CONTACT_EMAIL}) and by text (${APPLY_SMS_NUMBER_DISPLAY}, text only — do not call) within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your email inbox, spam folder, and text messages regularly.';

export const APPLICANT_CONTACT_CHANNEL_NOTE =
  'Reply CONFIRM on text or email — after that, your whole file continues on that channel only (text or email, not both).';

export const WINNER_NOTIFICATION =
  'Selected winners receive prize details and next steps by email and text.';

/** Name shown on apply success — matches who reaches out in Email/Text 1 */
export const APPLICANT_CASE_MANAGER_NAME = 'Dave Sayer';
export const APPLICANT_CASE_MANAGER_TITLE = 'PCH Application Coordinator';

export function applicantCaseManagerIntro(hours = APPLICATION_RESPONSE_HOURS): string {
  return `You have been assigned to ${APPLICANT_CASE_MANAGER_NAME}, ${APPLICANT_CASE_MANAGER_TITLE}. You should expect a personal response from him by email and text within ${hours} hours.`;
}

/** Success page — optional fast-track text (high application volume) */
export function applicantFastTrackNote(hours = APPLICATION_RESPONSE_HOURS): string {
  return `Due to high application volume, email response may take up to ${hours} hours. Optional: send the short text below to ${APPLY_SMS_NUMBER_DISPLAY} (text only) so we can match your application and reply faster with next steps.`;
}

export const WINNERS_TAGLINE =
  'Real winners with their PCH prize checks from around the world.';

export const ELIGIBLE_REGIONS_SHORT =
  'Open to applicants worldwide — USA, Canada, UK, Germany, Australia, and more.';

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set in Vercel env. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
