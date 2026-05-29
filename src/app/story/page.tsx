import Link from 'next/link';
import { ArrowRight, Quote, Target, Shield, Globe } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { ELIGIBLE_REGIONS_SHORT, APPLICATION_RESPONSE_HOURS } from '@/lib/site';

export const metadata = createMetadata({
  title: 'Our Story',
  description:
    'The PCH story — awarding life-changing prizes to winners worldwide since 1953.',
  path: '/story',
});

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[var(--pch-gray-50)] pt-28 pb-16 md:pb-24 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--pch-text)] mb-6 leading-tight">
            Real prizes. Real winners.{' '}
            <span className="text-[var(--pch-orange)]">Since 1953.</span>
          </h1>
          <p className="text-lg text-[var(--pch-text-muted)] leading-relaxed max-w-2xl mx-auto">
            Publishers Clearing House was built on a simple belief: ordinary people deserve
            extraordinary chances. For over seven decades, people have applied,
            won, and had their lives changed by the famous Prize Patrol.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-[var(--pch-orange)]" />
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--pch-text)] leading-tight">
              A tradition of surprising winners at their door.
            </h2>
            <p className="text-[var(--pch-text-muted)] leading-relaxed">
              What began as a magazine subscription company grew into America&apos;s most recognized
              sweepstakes name. The PCH Prize Patrol became famous for showing up unannounced —
              big check in hand — to tell people their application had won.
            </p>
            <p className="text-[var(--pch-text-muted)] leading-relaxed">
              {ELIGIBLE_REGIONS_SHORT} Every application receives a personal email within{' '}
              {APPLICATION_RESPONSE_HOURS} hours. Winners are selected through random drawings
              overseen by independent judges.
            </p>
          </div>

          <div className="card p-8 md:p-10 bg-[var(--pch-orange-soft)] border-[var(--pch-border)] relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-[var(--pch-orange)]/30" />
            <blockquote className="relative text-lg md:text-xl italic text-[var(--pch-text)] leading-relaxed mb-6 pt-8">
              When the Prize Patrol arrives, it is not just about the money. It is the moment
              someone realizes their ordinary life just became extraordinary — because they
              took five minutes to apply.
            </blockquote>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--pch-text-muted)]">
              — The PCH Prize Patrol
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 bg-[var(--pch-orange)]">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">
              How we operate
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Three core beliefs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'One entry per person',
                desc: 'Each eligible person submits their own application. No group entries.',
              },
              {
                icon: Globe,
                title: 'Global reach',
                desc: 'Open to applicants across the USA, Canada, UK, Germany, Australia, and eligible regions worldwide.',
              },
              {
                icon: Shield,
                title: '24-hour response',
                desc: `Every applicant receives a personal email within ${APPLICATION_RESPONSE_HOURS} hours. Selected winners receive prize details at the address on their application.`,
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--pch-text)] mb-4">
            Ready to apply?
          </h2>
          <p className="text-[var(--pch-text-muted)] mb-8 leading-relaxed">
            Your application takes minutes. It is secure and open to eligible
            applicants worldwide.
          </p>
          <Link href="/apply" className="btn-primary px-8 py-3.5 text-base inline-flex">
            Submit your application
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
