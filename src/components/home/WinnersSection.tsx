'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WinnerGallery } from '@/components/winners/WinnerGallery';
import { WINNERS_TAGLINE } from '@/lib/site';

export function WinnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-page">
        <div className="mb-10">
          <p className="section-label mb-3">Winners</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-3">
            People who applied and won
          </h2>
          <p className="text-[var(--pch-text-muted)] max-w-xl">
            {WINNERS_TAGLINE}
          </p>
        </div>

        <WinnerGallery initialCount={9} />

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/winners"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--pch-orange)] hover:underline"
          >
            View all winner photos
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--pch-text-muted)] hover:text-[var(--pch-orange)] hover:underline"
          >
            Read impact stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
