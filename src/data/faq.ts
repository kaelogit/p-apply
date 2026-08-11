import {
  APPLICATION_RESPONSE_HOURS,
  applicantContactWithin,
  APPLICANT_CONTACT_MONITOR,
  APPLICANT_CONTACT_CHANNEL_NOTE,
  WINNER_NOTIFICATION,
  CONTACT_EMAIL,
  SITE_DOMAIN,
} from '@/lib/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is PCH still operating after the bankruptcy?',
    answer:
      `Yes. PCH Digital continues the Publishers Clearing House prize tradition under new ownership (ARB Interactive Group). New sweepstakes are active, applications are accepted here at ${SITE_DOMAIN}, and new winners are still being awarded — including in-person Prize Patrol presentations for current prizes. Some long-term prizes granted before the restructuring were handled separately under the prior entity; applications submitted today are for new prize drawings governed by our Official Rules.`,
  },
  {
    question: 'How do I apply?',
    answer:
      'Complete the application form on our Apply page. Each person submits their own application. After you apply, we contact you by email.',
  },
  {
    question: 'When will I hear back after applying?',
    answer: `${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_MONITOR}`,
  },
  {
    question: 'How will I know if I won?',
    answer: `${WINNER_NOTIFICATION} Keep your email address current. ${APPLICANT_CONTACT_MONITOR}`,
  },
  {
    question: 'Which countries can apply?',
    answer: 'Applications are open to legal residents of the United States, Canada, United Kingdom, Germany, Netherlands, Australia, France, Ireland, Belgium, Switzerland, and New Zealand, where permitted by law. See Official Rules for full eligibility.',
  },
  {
    question: 'Can each family member apply separately?',
    answer: 'Yes. Each eligible person in your household should submit their own application.',
  },
  {
    question: 'How are winners selected?',
    answer: 'Winners are selected in random drawings conducted under independent supervision, in accordance with the Official Rules.',
  },
  {
    question: 'What happens after I submit my application?',
    answer: `Your application is recorded and reviewed personally. ${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_CHANNEL_NOTE} If selected in a drawing, prize details and next steps follow by email at ${CONTACT_EMAIL}.`,
  },
  {
    question: 'How do I contact PCH after applying?',
    answer: `Email us at ${CONTACT_EMAIL}. All official application follow-up is handled by email.`,
  },
];
