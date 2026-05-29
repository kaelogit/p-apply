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
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card overflow-hidden">
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

          <div className="flex flex-col gap-2">
            {pchVideos.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-4 rounded-lg border text-sm font-medium transition-colors ${
                  idx === activeIndex
                    ? 'border-[var(--pch-orange)] bg-[var(--pch-orange-soft)] text-[var(--pch-text)]'
                    : 'border-[var(--pch-border)] bg-white text-[var(--pch-text-muted)] hover:border-[var(--pch-orange)]'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
