import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HelpCircle, Globe } from 'lucide-react';
import { PRIZE_GROUPS, tiersForGroup, ELIGIBLE_REGIONS } from '@/data/prize-categories';
import { MAX_LUMP_SUM_PRIZE, SUPER_PRIZE_AMOUNT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Prize Categories',
  description: `Explore PCH prize categories — Mega Prize up to ${MAX_LUMP_SUM_PRIZE}, SuperPrize ${SUPER_PRIZE_AMOUNT}, Weekly For Life, Dream Home, and more.`,
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-12 md:pb-16 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-4">Prize Categories</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--pch-text)] mb-6 leading-tight">
            What you can{' '}
            <span className="text-[var(--pch-orange)]">win.</span>
          </h1>
          <p className="text-lg text-[var(--pch-text-muted)] leading-relaxed">
            Real winners receive varied amounts — from daily drawings to {MAX_LUMP_SUM_PRIZE} Mega Prizes.
            Submit one application to be considered for all active prize drawings.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-5">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {PRIZE_GROUPS.map((group, index) => {
              const Icon = group.icon;
              const tiers = tiersForGroup(group.id);
              return (
                <div key={group.id} className="flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[var(--pch-orange-soft)] text-[var(--pch-orange)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--pch-text-muted)]">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[var(--pch-orange)] ml-auto">
                      {group.amountRange}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[var(--pch-text)] mb-3">
                    {group.title}
                  </h2>
                  <p className="text-[var(--pch-text-muted)] leading-relaxed mb-6">
                    {group.longDescription}
                  </p>
                  <div className="mt-auto pt-5 border-t border-[var(--pch-border)]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-3">
                      Active prize amounts
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tiers.map((tier) => (
                        <span
                          key={tier.id}
                          className="px-3 py-1.5 rounded-full bg-[var(--pch-gray-50)] border border-[var(--pch-border)] text-xs text-[var(--pch-text-muted)]"
                        >
                          {tier.amount}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-[var(--pch-gray-50)] border-t border-[var(--pch-border)]">
        <div className="container-page max-w-3xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-11 h-11 rounded-lg bg-white border border-[var(--pch-border)] flex items-center justify-center text-[var(--pch-orange)] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--pch-text)] mb-2">
                {ELIGIBLE_REGIONS.title}
              </h2>
              <p className="text-[var(--pch-text-muted)] leading-relaxed mb-4">
                {ELIGIBLE_REGIONS.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ELIGIBLE_REGIONS.regions.map((region) => (
                  <span
                    key={region}
                    className="px-3 py-1.5 rounded-full bg-white border border-[var(--pch-border)] text-xs text-[var(--pch-text-muted)]"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-[var(--pch-border)]">
        <div className="container-page max-w-2xl text-center">
          <div className="w-14 h-14 rounded-full bg-[var(--pch-gray-50)] border border-[var(--pch-border)] flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-7 h-7 text-[var(--pch-orange)]" />
          </div>
          <h2 className="text-2xl font-semibold text-[var(--pch-text)] mb-4">
            Not sure which prize to apply for?
          </h2>
          <p className="text-[var(--pch-text-muted)] mb-8 leading-relaxed">
            Select &ldquo;All Active Prizes&rdquo; on the application form. One submission enters
            you into every eligible drawing for your country.
          </p>
          <Link href="/apply" className="btn-primary px-8 py-3.5 inline-flex">
            Apply now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
