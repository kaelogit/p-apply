'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRIZE_TIERS, PRIZE_GROUPS, getPrizeGroup } from '@/data/prize-categories';
import { MAX_LUMP_SUM_PRIZE } from '@/lib/site';

export function PrizesSection() {
  return (
    <section className="py-20 bg-[var(--pch-gray-50)] border-y border-[var(--pch-border)]">
      <div className="container-page">
        <div className="mb-12">
          <p className="section-label mb-3">Available Prizes</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-3">
            What you can win
          </h2>
          <p className="text-[var(--pch-text-muted)] max-w-xl">
            Real winners receive varied amounts — up to {MAX_LUMP_SUM_PRIZE} and everything in between.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_PRIZE_TIERS.map((prize) => {
            const group = getPrizeGroup(prize.groupId);
            const Icon = group?.icon;
            return (
              <div key={prize.id} className="card p-6">
                {Icon && (
                  <div className="w-10 h-10 rounded-lg bg-[var(--pch-orange-soft)] flex items-center justify-center text-[var(--pch-orange)] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <p className="text-xl font-semibold text-[var(--pch-orange)] mb-1">
                  {prize.amount}
                </p>
                <h3 className="font-semibold text-[var(--pch-text)] mb-2">{prize.tierName}</h3>
                <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">
                  {prize.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-[var(--pch-text-muted)] mt-6">
          Plus {PRIZE_GROUPS.length} prize categories and more amounts on the apply page.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/apply" className="btn-primary px-6 py-3">
            Submit Application
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/areas"
            className="text-sm font-medium text-[var(--pch-orange)] hover:underline inline-flex items-center gap-1.5"
          >
            View all prize categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
