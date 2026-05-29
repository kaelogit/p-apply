import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Impact Stories',
  description:
    'Real PCH winner stories — applicants who heard back within 24 hours and went on to win life-changing prizes.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
