'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Quote, MapPin, ArrowRight } from 'lucide-react';
import { winnerStories } from '@/data/stories';

export function RealStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => handleNext(), 15000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % winnerStories.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + winnerStories.length) % winnerStories.length);
      setIsFading(false);
    }, 300);
  };

  const goToStory = (index: number) => {
    if (index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  const currentStory = winnerStories[currentIndex];

  return (
    <section className="py-20 md:py-28 px-5 bg-white">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Real Stories</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] leading-tight">
            Changing lives, one winner at a time.
          </h2>
          <p className="text-sm text-[var(--pch-text-muted)] mt-3">
            Winner stories from applicants around the world.
          </p>
        </div>

        <div
          className="card p-6 md:p-10 shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--pch-border)] pb-6 mb-8 gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-[var(--pch-orange-soft)] text-[var(--pch-orange)] text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
                {currentStory.category}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold text-[var(--pch-text)]">{currentStory.name}</h3>
                <span className="text-[var(--pch-text-muted)]">—</span>
                <span className="text-sm text-[var(--pch-text-muted)] flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {currentStory.location}
                </span>
              </div>
            </div>
            <div className="bg-[var(--pch-orange-soft)] border border-[var(--pch-border)] px-5 py-3 rounded-lg self-start md:self-auto">
              <p className="text-[10px] font-semibold text-[var(--pch-orange)] uppercase tracking-widest mb-1">
                Prize Awarded
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[var(--pch-text)]">
                {currentStory.amount}
              </p>
            </div>
          </div>

          <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="space-y-4 mb-10">
              {currentStory.paragraphs.map((paragraph, idx) => {
                const isQuote = idx === currentStory.paragraphs.length - 1 && paragraph.startsWith('"');
                if (isQuote) {
                  return (
                    <blockquote key={idx} className="relative mt-6 pl-5 border-l-4 border-[var(--pch-orange)]">
                      <Quote className="absolute -left-3 -top-2 w-5 h-5 text-[var(--pch-orange)] bg-white" />
                      <p className="text-base md:text-lg italic text-[var(--pch-text)] leading-relaxed">
                        {paragraph}
                      </p>
                    </blockquote>
                  );
                }
                return (
                  <p key={idx} className="text-sm md:text-base text-[var(--pch-text-muted)] leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[var(--pch-border)] pt-6 gap-4">
            <div className="flex items-center gap-2 order-2 sm:order-1">
              {winnerStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToStory(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[var(--pch-orange)]'
                      : 'w-2 bg-[var(--pch-border)] hover:bg-[var(--pch-text-muted)]'
                  }`}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-sm text-[var(--pch-text-muted)] order-1 sm:order-2">
              Story{' '}
              <span className="text-[var(--pch-text)] font-semibold">{currentIndex + 1}</span>
              {' '}of {winnerStories.length}
            </p>

            <div className="flex gap-2 order-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg border border-[var(--pch-border)] flex items-center justify-center text-[var(--pch-text-muted)] hover:border-[var(--pch-orange)] hover:text-[var(--pch-orange)] transition-all"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg bg-[var(--pch-orange)] text-white flex items-center justify-center hover:bg-[var(--pch-orange-dark)] transition-all"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--pch-orange)] hover:underline"
          >
            Read all impact stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
