export const SITE_URL = 'https://applypch.com';
export const SITE_DOMAIN = 'applypch.com';
export const CONTACT_EMAIL = 'support@applypch.com';

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
