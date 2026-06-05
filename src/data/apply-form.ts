import {
  APPLICATION_RESPONSE_HOURS,
  applicantContactWithin,
  APPLICANT_CONTACT_MONITOR,
  WINNER_NOTIFICATION,
} from '@/lib/site';

/** Dial codes for apply form — separate from address country to avoid "us" autofill in phone field */
export const PHONE_COUNTRY_CODES = [
  { value: '+1', label: '+1 US / Canada' },
  { value: '+44', label: '+44 UK' },
  { value: '+49', label: '+49 Germany' },
  { value: '+61', label: '+61 Australia' },
  { value: '+33', label: '+33 France' },
  { value: '+52', label: '+52 Mexico' },
  { value: '+31', label: '+31 Netherlands' },
  { value: '+34', label: '+34 Spain' },
  { value: '+39', label: '+39 Italy' },
  { value: '+353', label: '+353 Ireland' },
  { value: '+41', label: '+41 Switzerland' },
  { value: '+46', label: '+46 Sweden' },
  { value: '+32', label: '+32 Belgium' },
  { value: '+43', label: '+43 Austria' },
  { value: '+48', label: '+48 Poland' },
  { value: '+351', label: '+351 Portugal' },
  { value: '+81', label: '+81 Japan' },
  { value: '+82', label: '+82 South Korea' },
  { value: '+91', label: '+91 India' },
  { value: '+27', label: '+27 South Africa' },
  { value: '+55', label: '+55 Brazil' },
  { value: '+64', label: '+64 New Zealand' },
];

export const COUNTRY_OPTIONS = [
  { group: 'North America', values: [
    { value: 'USA', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Mexico', label: 'Mexico' },
  ]},
  { group: 'Europe', values: [
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Austria', label: 'Austria' },
    { value: 'Norway', label: 'Norway' },
    { value: 'Denmark', label: 'Denmark' },
  ]},
  { group: 'Oceania', values: [
    { value: 'Australia', label: 'Australia' },
    { value: 'New Zealand', label: 'New Zealand' },
  ]},
  { group: 'Other', values: [
    { value: 'Other', label: 'Not Listed — Type in Region field' },
  ]},
] as const;

export function regionLabel(country: string): string {
  const labels: Record<string, string> = {
    Other: 'Country & Region',
    UK: 'Region / County',
    Germany: 'Bundesland',
    France: 'Department / Region',
    Netherlands: 'Province',
    Spain: 'Autonomous Community',
    Italy: 'Region',
    Sweden: 'County',
    Switzerland: 'Canton',
    Ireland: 'County',
    Belgium: 'Province',
    Austria: 'State',
    Norway: 'County',
    Denmark: 'Region',
    Canada: 'Province',
    Australia: 'State / Territory',
    'New Zealand': 'State / Territory',
    Mexico: 'State',
    USA: 'State',
  };
  return labels[country] ?? 'State / Province / Region';
}

export function regionPlaceholder(country: string): string {
  const placeholders: Record<string, string> = {
    Other: 'e.g. Brazil, São Paulo',
    UK: 'e.g. Greater London',
    Germany: 'e.g. Bavaria',
    France: 'e.g. Île-de-France',
    Netherlands: 'e.g. North Holland',
    Canada: 'e.g. Ontario',
    Australia: 'e.g. New South Wales',
    'New Zealand': 'e.g. Auckland',
    Mexico: 'e.g. Jalisco',
    USA: 'e.g. California',
  };
  return placeholders[country] ?? 'e.g. your region';
}

export const APPLY_TESTIMONIALS = [
  { name: 'Angela K.', location: 'Toronto, Canada', amount: 'C$250,000', quote: 'I applied on my own. The Prize Patrol came with a big check.', time: '2 hours ago' },
  { name: 'Malik T.', location: 'Manchester, UK', amount: '£250,000', quote: 'One application. Real prize. Real check.', time: '5 hours ago' },
  { name: 'Naomi C.', location: 'Munich, Germany', amount: '€150,000', quote: 'Applied online from Germany. I still cannot believe it.', time: '1 day ago' },
  { name: 'Michael R.', location: 'Sydney, Australia', amount: 'A$250,000', quote: 'Submitted my application online. Months later I won.', time: '2 days ago' },
  { name: 'James T.', location: 'Texas, USA', amount: '$5,000/week', quote: 'One person, one application — that is all it took.', time: '3 days ago' },
  { name: 'Sarah J.', location: 'Florida, USA', amount: '$150,000', quote: 'Thank you PCH. Our whole community celebrates with us.', time: '4 days ago' },
];

export const RECENT_PRIZE_AWARDS = [
  { name: 'Carol G.', location: 'Toronto, Canada', amount: '$2,500,000' },
  { name: 'Robert M.', location: 'Tampa, USA', amount: '$1,250,000' },
  { name: 'Angela K.', location: 'Toronto, Canada', amount: '$1,000,000' },
  { name: 'Malik T.', location: 'Manchester, UK', amount: '$1,250,000' },
  { name: 'Naomi C.', location: 'Munich, Germany', amount: '$250,000' },
  { name: 'Maria G.', location: 'San Antonio, USA', amount: '$10,000' },
];

export const GUIDED_QUESTIONS = [
  {
    id: 'reason',
    question: 'Why are you applying for a PCH prize?',
    placeholder: 'Tell us why you want to win...',
  },
  {
    id: 'prize',
    question: 'Which prize are you hoping to win?',
    placeholder: 'e.g. $2,500,000 Mega Prize, $1,250,000 SuperPrize, Weekly For Life...',
  },
  {
    id: 'impact',
    question: 'How would winning change your life?',
    placeholder: 'Describe what this prize would mean for you and your family...',
  },
] as const;

export const APPLY_FAQS = [
  {
    q: 'Is PCH still operating after the bankruptcy?',
    a: 'Yes. PCH continues under new ownership through PCH Digital. New prize drawings and applications are active. Current applications are for new promotions under our Official Rules.',
  },
  { q: 'Which countries can apply?', a: 'Applications are open to legal residents of the USA, Canada, UK, Germany, Australia, and other eligible regions. See Official Rules for details.' },
  { q: 'Can I apply for someone else?', a: 'No. Each eligible person must submit their own application with their own information.' },
  {
    q: 'How will I hear back after applying?',
    a: `${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_MONITOR}`,
  },
  {
    q: 'How will I know if I won?',
    a: `${WINNER_NOTIFICATION} Keep your email and phone number up to date.`,
  },
  { q: 'Is my information secure?', a: 'Yes. Your data is handled securely per our Privacy Policy.' },
];

/** Text message template — applicant fills in each line, then sends to APPLY_SMS_NUMBER */
export const TEXT_APPLICATION_MESSAGE = `PCH PRIZE APPLICATION

Full name:
Email:
Phone:
Country:
State / Region:
City:
Postal / ZIP code:
Street address:
Prize applying for:
Why I am applying:

I confirm I am 18 or older and submitting my own application.

Please fill in every line above, then send this text.`;

const FALLBACK_SMS_DIGITS = '19177430256';

export function buildSmsApplicationUrl(phoneDigits: string): string {
  const digits = phoneDigits.replace(/\D/g, '') || FALLBACK_SMS_DIGITS;
  return `sms:+${digits}?body=${encodeURIComponent(TEXT_APPLICATION_MESSAGE)}`;
}
