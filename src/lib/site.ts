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

/** Text/SMS apply — digits only for sms: links */
export const APPLY_SMS_NUMBER_DIGITS =
  process.env.NEXT_PUBLIC_APPLY_SMS_NUMBER?.replace(/\D/g, '') ?? '19177430256';

/** Display format for the apply-by-text number */
export const APPLY_SMS_NUMBER_DISPLAY =
  process.env.NEXT_PUBLIC_APPLY_SMS_DISPLAY ?? '+1 (917) 743-0256';

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
  'You may reply on email or text — we continue on whichever channel you answer first.';

export const WINNER_NOTIFICATION =
  'Selected winners receive prize details and next steps by email and text.';

export const WINNERS_TAGLINE =
  'Real winners with their PCH prize checks from around the world.';

export const ELIGIBLE_REGIONS_SHORT =
  'Open to applicants worldwide — USA, Canada, UK, Germany, Australia, and more.';

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set in Vercel env. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
