import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'They Applied. Then They Won. PCH Winner Stories',
  description:
    'Read how applicants heard from Dave Sayer within 24 hours and went on to win. Official follow-up is email only at support@applypchdigital.com.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
