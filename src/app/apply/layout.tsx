import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Apply for PCH Here — Official Form. Free Entry',
  description:
    'One application on applypchdigital.com. Dave Sayer emails you within 24 hours. No fee. No password. This is the official PCH Digital apply page.',
  path: '/apply',
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
