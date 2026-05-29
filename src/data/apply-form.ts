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
  { q: 'Which countries can apply?', a: 'Applications are open to legal residents of the USA, Canada, UK, Germany, Australia, and other eligible regions. See Official Rules for details.' },
  { q: 'Can I apply for someone else?', a: 'No. Each eligible person must submit their own application with their own information.' },
  { q: 'How will I hear back after applying?', a: 'Every applicant receives a personal email within 24 hours at the address on their application. Check your inbox and spam folder.' },
  { q: 'How will I know if I won?', a: 'Selected winners are notified by email during our application review process. Keep your contact details up to date.' },
  { q: 'Is my information secure?', a: 'Yes. Your data is handled securely per our Privacy Policy.' },
];

/** Prefilled WhatsApp message — applicant completes each line, then sends */
export const WHATSAPP_APPLICATION_MESSAGE = `PCH PRIZE APPLICATION

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

Please fill in every line above, then tap Send.`;

export function buildWhatsAppApplicationUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_APPLICATION_MESSAGE)}`;
}
