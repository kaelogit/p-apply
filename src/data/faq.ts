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
    question: 'How will I know if I won?',
    answer: 'Winners are contacted by email at the address provided on their application. Keep your inbox and spam folder checked.',
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
    answer: 'Your application is recorded and included in the next scheduled drawing. Keep your contact information current so we can reach you by email if you are selected.',
  },
];
