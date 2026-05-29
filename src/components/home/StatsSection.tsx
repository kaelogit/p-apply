'use client';

import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  delay: number;
  visible: boolean;
}

function Stat({ value, suffix, prefix = '', label, sublabel, delay, visible }: StatProps) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!visible || done.current) return;
    done.current = true;
    const timer = setTimeout(() => {
      const start = performance.now();
      const duration = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, value, delay]);

  return (
    <div
      className={`text-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl md:text-5xl font-semibold text-[var(--pch-orange)] tracking-tight">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm font-medium text-[var(--pch-text)] mt-2">{label}</p>
      {sublabel && (
        <p className="text-xs text-[var(--pch-text-muted)] mt-1">{sublabel}</p>
      )}
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-[var(--pch-gray-50)] border-y border-[var(--pch-border)]">
      <div className="container-page">
        <p className="text-center text-xs text-[var(--pch-text-muted)] mb-10">
          Open to applicants in the USA, Canada, United Kingdom, Germany, Australia, and more.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat value={500} suffix="M+" prefix="$" label="Prizes awarded" delay={0} visible={visible} />
          <Stat value={15} suffix="M+" label="Winners worldwide" delay={100} visible={visible} />
          <Stat value={70} suffix="+" label="Years of operation" delay={200} visible={visible} />
          <Stat
            value={6}
            suffix="+"
            label="Countries served"
            sublabel="USA · Canada · UK · Germany · Australia · more"
            delay={300}
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}
