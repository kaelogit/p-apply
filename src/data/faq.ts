import {
  APPLICATION_RESPONSE_HOURS,
  applicantContactWithin,
  APPLICANT_CONTACT_MONITOR,
  APPLICANT_CONTACT_CHANNEL_NOTE,
  WINNER_NOTIFICATION,
  APPLY_SMS_NUMBER_DISPLAY,
} from '@/lib/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is PCH still operating after the bankruptcy?',
    answer:
      'Yes. Publishers Clearing House continues under new ownership through PCH Digital (ARB Interactive Group). New sweepstakes are active, applications are accepted here at applypch.com, and new winners are still being awarded — including in-person Prize Patrol presentations for current prizes. Some long-term prizes granted before the restructuring were handled separately under the prior entity; applications submitted today are for new prize drawings governed by our Official Rules.',
  },
  {
    question: 'How do I apply?',
    answer:
      'Complete the application form on our Apply page, or apply by text using the instructions on the Apply page. Each person submits their own application.',
  },
  {
    question: 'When will I hear back after applying?',
    answer: `${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_MONITOR}`,
  },
  {
    question: 'How will I know if I won?',
    answer: `${WINNER_NOTIFICATION} Keep your email and phone number current. ${APPLICANT_CONTACT_MONITOR}`,
  },
  {
    question: 'Which countries can apply?',
    answer: 'Applications are open to legal residents of the United States, Canada, United Kingdom, Germany, Australia, and other eligible regions where permitted by law. See Official Rules for full eligibility.',
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
    answer: `Your application is recorded and reviewed personally. ${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_CHANNEL_NOTE} If selected in a drawing, prize details and next steps follow by email and text.`,
  },
  {
    question: 'Can I apply or communicate by text message?',
    answer: `Yes. You may apply by text from the Apply page to ${APPLY_SMS_NUMBER_DISPLAY} (text only). After you apply, we contact you by email and text. ${APPLICANT_CONTACT_CHANNEL_NOTE}`,
  },
];
