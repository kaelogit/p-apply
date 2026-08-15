import { APPLY_FROM_EMAIL } from '@/lib/email-addresses';
import {
  APPLICANT_CASE_MANAGER_NAME,
  APPLICANT_CASE_MANAGER_TITLE,
  CONTACT_EMAIL,
  PCH_BRAND_NAME,
  SITE_DOMAIN,
} from '@/lib/site';

export const VERIFY_TITLE = 'Did PCH Say You Won? Check If It’s Real';
export const VERIFY_DESCRIPTION = `If a call, email, or text said you won a PCH prize, pause here. Official contact is ${CONTACT_EMAIL} on ${SITE_DOMAIN}. We never ask for a fee or password.`;

export const verifyFaqs = [
  {
    question: 'How do I verify a PCH prize email or call?',
    answer: `Pause and check this page. Official ${PCH_BRAND_NAME} contact is ${CONTACT_EMAIL} and this website (${SITE_DOMAIN}). Email support with who contacted you and what they asked. We will confirm whether it matches an official file.`,
  },
  {
    question: 'What are the official PCH Digital email addresses?',
    answer: `${APPLICANT_CASE_MANAGER_NAME}, ${APPLICANT_CASE_MANAGER_TITLE}, writes from ${CONTACT_EMAIL}. Application receipts come from ${APPLY_FROM_EMAIL}. Messages from other addresses are not official.`,
  },
  {
    question: 'Does PCH ask for a fee or password to release a prize?',
    answer:
      'No. Applying is free. We will never ask for your email or banking passwords, and we will never ask you to pay a fee, tax, or processing charge to receive a prize. If anyone claiming to represent us demands money or passwords, ignore them and write support.',
  },
  {
    question: `Who is ${APPLICANT_CASE_MANAGER_NAME}?`,
    answer: `${APPLICANT_CASE_MANAGER_NAME} is the ${APPLICANT_CASE_MANAGER_TITLE}. He follows up on applications from ${CONTACT_EMAIL}. If someone uses his name from a different address, verify here first.`,
  },
];
