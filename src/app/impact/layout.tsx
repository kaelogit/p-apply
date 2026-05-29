import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Impact Stories',
  description:
    'Real PCH winner stories from the USA, Canada, UK, Germany, Australia, and beyond — how prize awards changed lives.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
