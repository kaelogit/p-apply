'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqItems } from '@/data/faq';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-page max-w-3xl">
        <div className="mb-10">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)]">
            Common questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqItems.slice(0, 4).map((item, idx) => (
            <div key={idx} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-[var(--pch-text)]"
              >
                {item.question}
                <ChevronDown className={`w-4 h-4 text-[var(--pch-text-muted)] shrink-0 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-sm text-[var(--pch-text-muted)] leading-relaxed border-t border-[var(--pch-border)] pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link href="/faq" className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[var(--pch-orange)] hover:underline">
          View all questions
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
