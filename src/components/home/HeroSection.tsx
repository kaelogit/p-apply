'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ELIGIBLE_REGIONS_SHORT } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="section-label mb-4">Prize Drawings Open</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[var(--pch-text)] leading-[1.1] mb-6">
              Apply for your chance to{' '}
              <span className="text-[var(--pch-orange)]">win.</span>
            </h1>
            <p className="text-lg text-[var(--pch-text-muted)] leading-relaxed mb-8 max-w-lg">
              Submit your application for PCH prize drawings. {ELIGIBLE_REGIONS_SHORT}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/apply" className="btn-primary px-7 py-3.5 text-base group">
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/winners" className="btn-outline px-7 py-3.5 text-base">
                See Past Winners
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-[var(--pch-text-muted)]">
                <ShieldCheck className="w-4 h-4 text-[var(--pch-orange)]" />
                Secure application
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--pch-text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--pch-orange)]" />
                Real winners since 1953
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--pch-gray-100)] border border-[var(--pch-border)]">
              {/* Add your photo as public/hero-image.jpg */}
              <img
                src="/hero-image.jpg"
                alt="PCH winner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 card px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold text-[var(--pch-orange)]">$500M+</p>
              <p className="text-sm text-[var(--pch-text-muted)]">Awarded to winners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
