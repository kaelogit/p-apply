import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Apply to Win',
  description:
    'Submit your PCH prize application online. Enter for Mega Prize, SuperPrize, Weekly For Life, Dream Home, daily cash drawings, and more.',
  path: '/apply',
});

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
