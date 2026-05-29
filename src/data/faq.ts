export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How do I apply?',
    answer: 'Complete the application form on our Apply page with your personal details. Each person submits their own application.',
  },
  {
    question: 'When will I hear back after applying?',
    answer: 'Every applicant receives a personal email within 24 hours at the address provided on their application. Check your inbox and spam folder.',
  },
  {
    question: 'How will I know if I won?',
    answer: 'Selected winners are notified by email as part of our application review process. Keep your contact information current and check your inbox regularly.',
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
    answer: 'Your application is recorded and reviewed personally. You will receive an email within 24 hours. If selected in a drawing, prize details follow by email.',
  },
];
