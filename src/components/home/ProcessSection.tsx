'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Mail, Users, Send, ArrowRight } from 'lucide-react';
import { APPLICATION_RESPONSE_HOURS } from '@/lib/site';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isVisible: boolean;
}

function ProcessStep({ number, title, description, icon, delay, isVisible }: ProcessStepProps) {
  return (
    <div
      className={`flex flex-col items-center text-center relative z-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full bg-[var(--pch-orange)] text-white flex items-center justify-center text-3xl font-semibold shadow-md ring-8 ring-[var(--pch-gray-50)]">
          {number}
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border-2 border-[var(--pch-orange)] rounded-full flex items-center justify-center shadow-sm text-[var(--pch-orange)]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-[var(--pch-text)] mb-3">{title}</h3>
      <p className="text-[var(--pch-text-muted)] leading-relaxed max-w-sm text-sm">{description}</p>
    </div>
  );
}

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '1',
      title: 'Submit Your Application',
      description:
        'Fill out the secure application form on our website. Tell us about yourself and why you want to win.',
      icon: <Mail className="w-5 h-5" />,
      delay: 0,
    },
    {
      number: '2',
      title: 'Personal Review',
      description:
        `Our team reviews every application personally. You will receive an email from us within ${APPLICATION_RESPONSE_HOURS} hours.`,
      icon: <Users className="w-5 h-5" />,
      delay: 150,
    },
    {
      number: '3',
      title: 'Email Response',
      description:
        'Every applicant is contacted by email within 24 hours. Selected winners receive prize details and next steps at the address on their application.',
      icon: <Send className="w-5 h-5" />,
      delay: 300,
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[var(--pch-gray-50)] py-20 md:py-28 px-5 border-y border-[var(--pch-border)]">
      <div className="container-page">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-4">The Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] leading-tight">
            Three simple steps to apply and win.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-[var(--pch-border)]">
            <div
              className={`h-full bg-[var(--pch-orange)] transition-all duration-1000 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <ProcessStep key={step.number} {...step} isVisible={isVisible} />
            ))}
          </div>
        </div>

        <div
          className={`mt-14 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link href="/apply" className="btn-primary px-8 py-3.5 text-base">
            Start Your Application
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4">
            <Link
              href="/story"
              className="text-sm font-medium text-[var(--pch-orange)] hover:underline inline-flex items-center gap-1.5"
            >
              Learn about our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
