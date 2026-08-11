import {
  APPLICATION_RESPONSE_HOURS,
  applicantContactWithin,
  APPLICANT_CONTACT_MONITOR,
  APPLICANT_CONTACT_CHANNEL_NOTE,
  WINNER_NOTIFICATION,
  CONTACT_EMAIL,
  SITE_DOMAIN,
  APPLICANT_CASE_MANAGER_NAME,
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
    answer:
      'Applications are open to legal residents of the United States, Canada, United Kingdom, Germany, Netherlands, Australia, France, Ireland, Belgium, Switzerland, and New Zealand, where permitted by law. See Official Rules for full eligibility.',
  },
  {
    question: 'Can each family member apply separately?',
    answer: 'Yes. Each eligible person in your household should submit their own application.',
  },
  {
    question: 'How are winners selected?',
    answer:
      'Winners are selected in random drawings conducted under independent supervision, in accordance with the Official Rules.',
  },
  {
    question: 'What happens after I submit my application?',
    answer: `Your application is recorded and reviewed personally. ${applicantContactWithin(APPLICATION_RESPONSE_HOURS)} ${APPLICANT_CONTACT_CHANNEL_NOTE} If selected in a drawing, prize details and next steps follow by email at ${CONTACT_EMAIL}.`,
  },
  {
    question: 'How do I contact PCH after applying?',
    answer: `Email us at ${CONTACT_EMAIL}. All official application follow-up is handled by email.`,
  },
  {
    question: 'Someone contacted me about a PCH prize — is it real?',
    answer: `If you are unsure, verify before you act. Official ${SITE_DOMAIN} contact and support is ${CONTACT_EMAIL}. Visit ${SITE_DOMAIN}/verify and email support with what you were told. We will confirm whether it matches an official file. Do not trust lookalike websites or emails that are not from @${SITE_DOMAIN}.`,
  },
  {
    question: 'How do I verify official PCH Digital email or calls?',
    answer: `Legitimate messages use the ${SITE_DOMAIN} website and email addresses ending in @${SITE_DOMAIN} (including ${CONTACT_EMAIL}). Your application coordinator may be ${APPLICANT_CASE_MANAGER_NAME}. If anything feels wrong, email ${CONTACT_EMAIL} from the Verify page before taking further steps. We will never ask for your passwords.`,
  },
  {
    question: 'What should I do if I think a message is a scam or impersonation?',
    answer: `Do not send passwords or personal login details. Forward or describe the contact to ${CONTACT_EMAIL} and use ${SITE_DOMAIN}/verify. Our support team will tell you if the outreach is official. When people are unsure, contacting support is the correct next step.`,
  },
];

/** Google FAQ rich-result schema (FAQPage). */
export function buildFaqPageJsonLd(items: FaqItem[] = faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
