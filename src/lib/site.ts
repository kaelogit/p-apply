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

/** Every applicant receives email contact within this window */
export const APPLICATION_RESPONSE_HOURS = 24;

export const WINNERS_TAGLINE =
  'Real winners with their PCH prize checks from around the world.';

export const ELIGIBLE_REGIONS_SHORT =
  'Open to applicants worldwide — USA, Canada, UK, Germany, Australia, and more.';

/** WhatsApp apply — country code + number, digits only (e.g. 15551234567). Set in Vercel env. */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') ?? '';

export const WHATSAPP_ENABLED = WHATSAPP_NUMBER.length > 0;

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set in Vercel env. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
