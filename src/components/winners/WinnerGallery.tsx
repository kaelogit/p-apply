'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import {
  checkWinners,
  getCheckWinnerImages,
  type CheckWinner,
} from '@/data/check-winners';
import { cn } from '@/lib/utils';

const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 9;

export function WinnerGallery({
  initialCount = INITIAL_COUNT,
  className,
}: {
  initialCount?: number;
  className?: string;
}) {
  const [lightbox, setLightbox] = useState<CheckWinner | null>(null);

  return (
    <div className={className}>
      <CheckGrid
        winners={checkWinners}
        initialCount={initialCount}
        onOpen={setLightbox}
      />
      {lightbox && (
        <PhotoLightbox winner={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

export function CheckWinnersGallery({ initialCount }: { initialCount?: number }) {
  const [lightbox, setLightbox] = useState<CheckWinner | null>(null);

  return (
    <>
      <CheckGrid winners={checkWinners} initialCount={initialCount} onOpen={setLightbox} />
      {lightbox && (
        <PhotoLightbox winner={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

function CheckGrid({
  winners,
  initialCount,
  onOpen,
}: {
  winners: CheckWinner[];
  initialCount?: number;
  onOpen: (winner: CheckWinner) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount ?? winners.length);
  const visible = winners.slice(0, visibleCount);
  const hasMore = visibleCount < winners.length;

  if (winners.length === 0) {
    return (
      <div className="card p-12 text-center text-sm text-[var(--pch-text-muted)]">
        Winner photos coming soon.
      </div>
    );
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((w) => (
          <CheckCard key={w.id} winner={w} onOpen={() => onOpen(w)} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, winners.length))}
            className="btn-outline px-5 py-2.5 text-sm"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}

function PhotoCountBadge({ count }: { count: number }) {
  if (count <= 1) return null;
  return (
    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
      <Images className="w-3.5 h-3.5" />
      {count}
    </div>
  );
}

function CheckCard({ winner, onOpen }: { winner: CheckWinner; onOpen: () => void }) {
  const images = getCheckWinnerImages(winner);

  return (
    <article
      className="card overflow-hidden group cursor-pointer"
      onClick={onOpen}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      role="button"
      tabIndex={0}
    >
      <div className="relative aspect-[4/5] bg-[var(--pch-gray-100)]">
        <Image
          src={images[0]}
          alt={`${winner.name} — ${winner.amount}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <PhotoCountBadge count={images.length} />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--pch-orange)] text-white">
            {winner.amount}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
          <p className="font-semibold text-white text-sm">{winner.name}</p>
          <p className="flex items-center gap-1 text-xs text-white/80 mt-0.5">
            <MapPin className="w-3 h-3" />
            {winner.location}
          </p>
        </div>
      </div>
      {winner.caption && (
        <div className="p-4">
          <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">&ldquo;{winner.caption}&rdquo;</p>
        </div>
      )}
    </article>
  );
}

function PhotoLightbox({ winner, onClose }: { winner: CheckWinner; onClose: () => void }) {
  const images = getCheckWinnerImages(winner);
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight' && hasMultiple) setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, hasMultiple, images.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${winner.name} photos`}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/5] max-h-[70vh] bg-[var(--pch-gray-100)]">
          <Image
            src={images[index]}
            alt={`${winner.name} photo ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
            unoptimized
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        <div className="p-5 border-t border-[var(--pch-border)]">
          <p className="font-semibold text-[var(--pch-text)]">{winner.name}</p>
          <p className="flex items-center gap-1 text-sm text-[var(--pch-text-muted)] mt-0.5">
            <MapPin className="w-3.5 h-3.5" />
            {winner.location}
          </p>
          <p className="text-sm font-semibold text-[var(--pch-orange)] mt-2">{winner.amount}</p>
          {winner.caption && (
            <p className="text-sm text-[var(--pch-text-muted)] mt-2 leading-relaxed">&ldquo;{winner.caption}&rdquo;</p>
          )}
        </div>
      </div>
    </div>
  );
}
