'use client';

import { useState, useRef, useEffect } from 'react';
import { pchVideos } from '@/data/videos';

export function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = pchVideos[activeIndex];

  useEffect(() => {
    videoRef.current?.load();
  }, [activeIndex]);

  if (!pchVideos.length) return null;

  return (
    <section className="py-20 bg-[var(--pch-gray-50)]">
      <div className="container-page">
        <div className="mb-10">
          <p className="section-label mb-3">Winner stories</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)]">
            Watch real winner moments
          </h2>
          {pchVideos.length > 1 && (
            <p className="text-sm text-[var(--pch-text-muted)] mt-2">
              {pchVideos.length} videos — select one to play
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="card overflow-hidden">
              <video
                ref={videoRef}
                key={active.id}
                src={active.src}
                poster={active.poster}
                controls
                playsInline
                className="w-full aspect-video bg-black object-contain"
              />
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-lg font-semibold text-[var(--pch-text)]">{active.title}</h3>
              <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed mt-2">
                {active.caption}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-h-[min(70vh,520px)] overflow-y-auto pr-1">
            {pchVideos.map((video, idx) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-4 rounded-lg border transition-colors ${
                  idx === activeIndex
                    ? 'border-[var(--pch-orange)] bg-[var(--pch-orange-soft)]'
                    : 'border-[var(--pch-border)] bg-white hover:border-[var(--pch-orange)]'
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    idx === activeIndex ? 'text-[var(--pch-text)]' : 'text-[var(--pch-text)]'
                  }`}
                >
                  {video.title}
                </p>
                <p className="text-xs text-[var(--pch-text-muted)] leading-relaxed mt-1.5 line-clamp-2">
                  {video.caption}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
