import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact Stories',
  description: 'Real PCH winner stories from the USA, Canada, UK, Germany, Australia, and beyond.',
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
