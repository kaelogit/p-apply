import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about applying to PCH prize drawings — eligibility, how winners are notified, and what happens after you apply.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
