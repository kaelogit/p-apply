import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Trophy, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Publishers Clearing House — apply to win since 1953.',
};

const sections = [
  {
    href: '/story',
    icon: BookOpen,
    title: 'Our Story',
    desc: 'The PCH heritage, Prize Patrol tradition, and decades of real winners.',
  },
  {
    href: '/areas',
    icon: Trophy,
    title: 'Prize Categories',
    desc: 'SuperPrize, Weekly For Life, Dream Home, daily cash, and international drawings.',
  },
  {
    href: '/impact',
    icon: Heart,
    title: 'Impact Stories',
    desc: 'Real winners from the USA, Canada, UK, Germany, Australia, and beyond.',
  },
  {
    href: '/security',
    icon: Shield,
    title: 'Security & Trust',
    desc: 'How we protect your application and keep your personal information secure.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[var(--pch-border)] pt-28 pb-10 px-5">
        <div className="container-page max-w-3xl">
          <p className="section-label mb-2">About</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-4">
            Publishers Clearing House
          </h1>
          <p className="text-[var(--pch-text-muted)] leading-relaxed">
            Since 1953, PCH has awarded hundreds of millions of dollars in prizes to
            applicants worldwide.
          </p>
        </div>
      </div>

      <div className="container-page py-12">
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {sections.map(({ href, icon: Icon, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="card p-6 hover:border-[var(--pch-orange)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--pch-orange-soft)] text-[var(--pch-orange)] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="font-semibold text-[var(--pch-text)] mb-2 group-hover:text-[var(--pch-orange)] transition-colors">
                {title}
              </h2>
              <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="card p-6 max-w-2xl">
          <h2 className="font-semibold text-[var(--pch-text)] mb-4">The PCH promise</h2>
          <ul className="space-y-2 text-sm text-[var(--pch-text-muted)]">
            {[
              'Open to USA, Canada, UK, Germany, Australia, and eligible regions',
              'Winners selected through random drawings',
              'Winners contacted by email',
              'One application per person',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--pch-orange)] font-bold">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/apply" className="btn-primary px-6 py-3 inline-flex mt-10">
          Apply now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
