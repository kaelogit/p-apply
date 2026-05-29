'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { winnerStories } from '@/data/stories';
import { IMPACT_FILTERS, type ImpactFilter } from '@/data/prize-categories';

export default function ImpactPage() {
  const [filter, setFilter] = useState<ImpactFilter>('All');

  const filtered =
    filter === 'All'
      ? winnerStories
      : winnerStories.filter((s) => s.filterCategory === filter);

  return (
    <div className="min-h-screen bg-[var(--pch-gray-50)]">
      <section className="bg-white pt-28 pb-12 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-4">Real Stories</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--pch-text)] mb-6 leading-tight">
            Changing lives, one winner at a time.
          </h1>
          <p className="text-lg text-[var(--pch-text-muted)] leading-relaxed">
            These are not just numbers. They are real people — in the USA, Canada, UK, Germany,
            Australia, and beyond — who applied and won.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[var(--pch-border)] py-3 px-5">
        <div className="container-page flex gap-2 overflow-x-auto">
          {IMPACT_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                filter === cat
                  ? 'bg-[var(--pch-orange)] text-white'
                  : 'bg-[var(--pch-gray-100)] text-[var(--pch-text-muted)] hover:text-[var(--pch-text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-12 md:py-16 px-5">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filtered.map((story) => (
              <article key={`${story.name}-${story.location}`} className="card p-6 md:p-8 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-[var(--pch-orange)] uppercase tracking-wider mb-1">
                      {story.category}
                    </p>
                    <h2 className="text-xl font-semibold text-[var(--pch-text)]">{story.name}</h2>
                    <p className="text-sm text-[var(--pch-text-muted)]">{story.location}</p>
                  </div>
                  <div className="bg-[var(--pch-orange-soft)] px-3 py-2 rounded-lg shrink-0">
                    <p className="text-lg font-semibold text-[var(--pch-orange)]">{story.amount}</p>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  {story.paragraphs.map((p, i) => {
                    const isQuote = p.startsWith('"');
                    return (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${
                          isQuote
                            ? 'italic text-[var(--pch-text)] border-l-4 border-[var(--pch-orange)] pl-4 bg-[var(--pch-gray-50)] py-2 rounded-r-lg'
                            : 'text-[var(--pch-text-muted)]'
                        }`}
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-[var(--pch-text-muted)] py-12">No stories in this category yet.</p>
          )}
        </div>
      </section>

      <section className="py-16 px-5 bg-[var(--pch-orange)] text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Your story could be next.
          </h2>
          <p className="text-white/80 mb-8 text-sm">
            Apply today — takes just a few minutes.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[var(--pch-orange)] font-semibold hover:bg-[var(--pch-gray-50)] transition-colors"
          >
            Submit application
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
