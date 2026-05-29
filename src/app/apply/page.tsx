'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Lock,
  ChevronDown,
  ChevronLeft,
  Clock,
  Mail,
  MessageCircle,
  Mic,
  MicOff,
  Award,
  TrendingUp,
  Shield,
} from 'lucide-react';
import {
  COUNTRY_OPTIONS,
  regionLabel,
  regionPlaceholder,
  APPLY_TESTIMONIALS,
  RECENT_PRIZE_AWARDS,
  GUIDED_QUESTIONS,
  APPLY_FAQS,
  WHATSAPP_APPLICATION_MESSAGE,
  buildWhatsAppApplicationUrl,
} from '@/data/apply-form';
import { PRIZE_GROUPS, tiersForGroup, getPrizeTier } from '@/data/prize-categories';
import { MAX_LUMP_SUM_PRIZE, APPLICATION_RESPONSE_HOURS, ELIGIBLE_REGIONS_SHORT, WHATSAPP_ENABLED, WHATSAPP_NUMBER } from '@/lib/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ApplyPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submissionMethod, setSubmissionMethod] = useState<'form' | 'whatsapp'>('form');
  const [useGuidedMode, setUseGuidedMode] = useState(false);
  const [guidedStep, setGuidedStep] = useState(0);
  const [guidedAnswers, setGuidedAnswers] = useState({ reason: '', prize: '', impact: '' });
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<{ start(): void; stop(): void; abort(): void } | null>(null);

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    region: '',
    city: '',
    address: '',
    postalCode: '',
    prizeCategory: 'all',
    message: '',
    ageConfirm: false,
    rulesConfirm: false,
  });

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % APPLY_TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTickerIdx((i) => (i + 1) % RECENT_PRIZE_AWARDS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    setVoiceSupported(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec: any = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = (event: { resultIndex: number; results: { length: number; [key: number]: { [key: number]: { transcript: string } } } }) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (useGuidedMode) {
        const key = GUIDED_QUESTIONS[guidedStep].id as keyof typeof guidedAnswers;
        setGuidedAnswers((prev) => ({ ...prev, [key]: transcript }));
      } else {
        setForm((prev) => ({ ...prev, message: transcript }));
      }
    };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec;
    return () => rec.abort();
  }, [useGuidedMode, guidedStep]);

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleVoice = () => {
    const rec = recognitionRef.current;
    if (!rec) return;
    if (isListening) {
      rec.stop();
      setIsListening(false);
    } else {
      rec.start();
      setIsListening(true);
    }
  };

  const compileGuidedMessage = () =>
    `Why applying: ${guidedAnswers.reason}\n\nPrize hoped for: ${guidedAnswers.prize}\n\nHow winning would help: ${guidedAnswers.impact}`;

  const handleGuidedNext = () => {
    const key = GUIDED_QUESTIONS[guidedStep].id as keyof typeof guidedAnswers;
    if (!guidedAnswers[key].trim()) {
      setErrorMsg('Please answer this question before continuing.');
      setStatus('error');
      return;
    }
    setErrorMsg('');
    setStatus('idle');
    if (guidedStep < GUIDED_QUESTIONS.length - 1) {
      setGuidedStep((s) => s + 1);
    } else {
      update('message', compileGuidedMessage());
      setUseGuidedMode(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) {
      setErrorMsg('Please tell us why you are applying — your message is required.');
      setStatus('error');
      return;
    }
    if (!form.ageConfirm || !form.rulesConfirm) {
      setErrorMsg('Please confirm you are 18+ and agree to the Official Rules.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  };

  const testimonial = APPLY_TESTIMONIALS[testimonialIdx];
  const ticker = RECENT_PRIZE_AWARDS[tickerIdx];
  const prizeLabel =
    form.prizeCategory === 'all'
      ? 'All Active Prizes'
      : getPrizeTier(form.prizeCategory)?.applyLabel ?? form.prizeCategory;

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white pt-28 pb-20 px-5">
        <div className="max-w-md mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--pch-orange-soft)] flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-[var(--pch-orange)]" />
          </div>
          <h1 className="text-2xl font-semibold text-[var(--pch-text)] mb-3">Application submitted</h1>
          <p className="text-[var(--pch-text-muted)] text-sm leading-relaxed mb-4">
            Your application has been received. Expect a personal email from us within {APPLICATION_RESPONSE_HOURS} hours.
          </p>
          <p className="text-xs text-[var(--pch-text-muted)] mb-8">
            Keep your email inbox and spam folder checked.
          </p>
          <Link href="/" className="btn-primary px-6 py-3">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Prize award ticker */}
      <div className="bg-[var(--pch-orange)] text-white py-2 px-4 text-center text-sm mt-16">
        <div className="container-page flex items-center justify-center gap-2 flex-wrap">
          <TrendingUp className="w-4 h-4 shrink-0" />
          <span className="font-medium">Recent prize awarded to:</span>
          <span className="font-semibold">
            {ticker.name} in {ticker.location} — {ticker.amount}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--pch-gray-50)] pt-12 pb-10 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-3">Apply to win</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--pch-text)] mb-4 leading-tight">
            Apply for your chance to{' '}
            <span className="text-[var(--pch-orange)]">win.</span>
          </h1>
          <p className="text-[var(--pch-text-muted)] mb-8 max-w-xl mx-auto">
            {ELIGIBLE_REGIONS_SHORT}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--pch-text-muted)]">
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-[var(--pch-orange)]" /> Up to {MAX_LUMP_SUM_PRIZE} in prizes</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--pch-orange)]" /> Email within {APPLICATION_RESPONSE_HOURS} hours</span>
            <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[var(--pch-orange)]" /> Confidential</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 px-5 border-b border-[var(--pch-border)]">
        <div className="container-page max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--pch-text-muted)] mb-8">
            What happens next
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Submit', desc: 'Your application', icon: Mail },
              { label: 'Contact', desc: `Email within ${APPLICATION_RESPONSE_HOURS} hrs`, icon: Clock },
              { label: 'Review', desc: 'Personal processing', icon: Shield },
              { label: 'Prize', desc: 'Prize Patrol delivery', icon: Award },
            ].map(({ label, desc, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-11 h-11 mx-auto mb-3 rounded-full bg-[var(--pch-orange)] text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-semibold text-sm text-[var(--pch-text)]">{label}</p>
                <p className="text-xs text-[var(--pch-text-muted)] mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-12 px-5 bg-[var(--pch-gray-50)]" id="apply-form">
        <div className="container-page grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-8">
              {/* Method toggle */}
              <div className={`flex gap-1 p-1 bg-[var(--pch-gray-100)] rounded-lg mb-8 ${WHATSAPP_ENABLED ? '' : 'hidden'}`}>
                <button
                  type="button"
                  onClick={() => setSubmissionMethod('form')}
                  className={`flex-1 py-2.5 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                    submissionMethod === 'form' ? 'bg-white text-[var(--pch-text)] shadow-sm' : 'text-[var(--pch-text-muted)]'
                  }`}
                >
                  <Mail className="w-4 h-4" /> Apply online
                </button>
                <button
                  type="button"
                  onClick={() => setSubmissionMethod('whatsapp')}
                  className={`flex-1 py-2.5 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                    submissionMethod === 'whatsapp' ? 'bg-white text-[var(--pch-text)] shadow-sm' : 'text-[var(--pch-text-muted)]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
              </div>

              {submissionMethod === 'whatsapp' && WHATSAPP_ENABLED ? (
                <div className="py-4">
                  <div className="text-center mb-6">
                    <MessageCircle className="w-12 h-12 text-[var(--pch-orange)] mx-auto mb-4" />
                    <h3 className="font-semibold text-[var(--pch-text)] mb-2">Apply via WhatsApp</h3>
                    <p className="text-sm text-[var(--pch-text-muted)] max-w-md mx-auto">
                      Tap the button below. WhatsApp opens with a prefilled application — complete every field, then send the message.
                    </p>
                  </div>

                  <div className="rounded-lg border border-[var(--pch-border)] bg-[var(--pch-gray-50)] p-4 mb-6 max-w-md mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-3">
                      Message preview
                    </p>
                    <pre className="text-xs text-[var(--pch-text)] whitespace-pre-wrap font-sans leading-relaxed">
                      {WHATSAPP_APPLICATION_MESSAGE}
                    </pre>
                  </div>

                  <div className="text-center">
                    <a
                      href={buildWhatsAppApplicationUrl(WHATSAPP_NUMBER)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 inline-flex"
                    >
                      Open WhatsApp &amp; complete application
                    </a>
                    <p className="text-xs text-[var(--pch-text-muted)] mt-4 max-w-sm mx-auto">
                      Each person must apply on their own. You will receive a response within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmissionMethod('form')}
                      className="block mx-auto mt-4 text-sm text-[var(--pch-orange)] hover:underline"
                    >
                      Use online form instead
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[var(--pch-text-muted)]">
                      {useGuidedMode ? 'Guided questions' : 'Application form'}
                    </p>
                    <button
                      type="button"
                      onClick={() => { setUseGuidedMode(!useGuidedMode); setGuidedStep(0); }}
                      className="text-sm text-[var(--pch-orange)] font-medium hover:underline"
                    >
                      {useGuidedMode ? 'Switch to free-form' : 'Use guided questions'}
                    </button>
                  </div>

                  {useGuidedMode ? (
                    <div className="bg-[var(--pch-orange-soft)] rounded-lg p-6">
                      <p className="text-xs text-[var(--pch-orange)] font-semibold mb-1">
                        Question {guidedStep + 1} of {GUIDED_QUESTIONS.length}
                      </p>
                      <h3 className="font-semibold text-[var(--pch-text)] mb-4">
                        {GUIDED_QUESTIONS[guidedStep].question}
                      </h3>
                      <textarea
                        required
                        className="input-field min-h-[120px] mb-4 bg-white"
                        placeholder={GUIDED_QUESTIONS[guidedStep].placeholder}
                        value={guidedAnswers[GUIDED_QUESTIONS[guidedStep].id as keyof typeof guidedAnswers]}
                        onChange={(e) =>
                          setGuidedAnswers((prev) => ({
                            ...prev,
                            [GUIDED_QUESTIONS[guidedStep].id]: e.target.value,
                          }))
                        }
                      />
                      <div className="flex gap-2">
                        {guidedStep > 0 && (
                          <button type="button" onClick={() => setGuidedStep((s) => s - 1)} className="btn-outline px-4 py-2 text-sm">
                            <ChevronLeft className="w-4 h-4" /> Back
                          </button>
                        )}
                        <button type="button" onClick={handleGuidedNext} className="btn-primary px-4 py-2 text-sm flex-1">
                          {guidedStep < GUIDED_QUESTIONS.length - 1 ? 'Next' : 'Add to application'}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : null}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name *">
                      <input required className="input-field" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" />
                    </Field>
                    <Field label="Email *">
                      <input required type="email" className="input-field" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Where we can reach you" />
                    </Field>
                  </div>

                  <Field label="Phone *">
                    <input required type="tel" className="input-field" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Include country code e.g. +44, +1, +61" />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Country *">
                      <select required className="input-field bg-white" value={form.country} onChange={(e) => update('country', e.target.value)}>
                        <option value="">Select country</option>
                        {COUNTRY_OPTIONS.map((g) => (
                          <optgroup key={g.group} label={g.group}>
                            {g.values.map((c) => (
                              <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </Field>
                    <Field label={`${form.country ? regionLabel(form.country) : 'Region'} *`}>
                      <input
                        required
                        className="input-field"
                        value={form.region}
                        onChange={(e) => update('region', e.target.value)}
                        placeholder={form.country ? regionPlaceholder(form.country) : 'e.g. California, Ontario, Bavaria'}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="City *">
                      <input required className="input-field" value={form.city} onChange={(e) => update('city', e.target.value)} />
                    </Field>
                    <Field label="Postal / ZIP code *">
                      <input required className="input-field" value={form.postalCode} onChange={(e) => update('postalCode', e.target.value)} />
                    </Field>
                  </div>

                  <Field label="Street address *">
                    <input required className="input-field" value={form.address} onChange={(e) => update('address', e.target.value)} />
                  </Field>

                  <Field label="Prize you are applying for *">
                    <select required className="input-field bg-white" value={form.prizeCategory} onChange={(e) => update('prizeCategory', e.target.value)}>
                      <option value="all">All Active Prizes</option>
                      {PRIZE_GROUPS.map((group) => (
                        <optgroup key={group.id} label={group.title}>
                          {tiersForGroup(group.id).map((tier) => (
                            <option key={tier.id} value={tier.id}>{tier.applyLabel}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </Field>

                  {!useGuidedMode && (
                    <Field label="Your message *">
                      <div className="relative">
                        <textarea
                          required
                          className="input-field min-h-[100px] resize-y pr-12"
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="Why are you applying? How would winning help you?"
                        />
                        {voiceSupported && (
                          <button
                            type="button"
                            onClick={toggleVoice}
                            className={`absolute right-3 top-3 p-2 rounded-lg transition-colors ${
                              isListening ? 'bg-[var(--pch-orange)] text-white' : 'bg-[var(--pch-gray-100)] text-[var(--pch-text-muted)]'
                            }`}
                            aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
                          >
                            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                          </button>
                        )}
                      </div>
                    </Field>
                  )}

                  <div className="space-y-3">
                    <Checkbox
                      checked={form.ageConfirm}
                      onChange={(v) => update('ageConfirm', v)}
                      label="I confirm I am 18 or older and a legal resident of an eligible country (USA, Canada, UK, Germany, Australia, or as permitted by Official Rules)."
                    />
                    <Checkbox
                      checked={form.rulesConfirm}
                      onChange={(v) => update('rulesConfirm', v)}
                      label={
                        <span>
                          I agree to the{' '}
                          <Link href="/rules" className="text-[var(--pch-orange)] hover:underline">Official Rules</Link>
                          {' '}and{' '}
                          <Link href="/privacy" className="text-[var(--pch-orange)] hover:underline">Privacy Policy</Link>.
                        </span>
                      }
                    />
                  </div>

                  {status === 'error' && errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3.5 text-base disabled:opacity-60">
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <>Submit application — {prizeLabel} <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-center text-[var(--pch-text-muted)]">
                    One application per person.
                  </p>
                </form>
              )}
            </div>

            <div className="lg:hidden mt-6 space-y-2">
              {APPLY_FAQS.map((f, i) => (
                <FaqItem key={i} item={f} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-3">Recent winner</p>
              <p className="text-sm text-[var(--pch-text)] leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-[var(--pch-text)]">{testimonial.name}<br /><span className="text-[var(--pch-text-muted)] font-normal">{testimonial.location}</span></span>
                <span className="text-[var(--pch-orange)] font-semibold text-right">{testimonial.amount}<br /><span className="text-[var(--pch-text-muted)] font-normal">{testimonial.time}</span></span>
              </div>
            </div>

            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pch-text-muted)] mb-3">Eligible regions</p>
              <p className="text-sm text-[var(--pch-text-muted)] leading-relaxed">
                USA · Canada · United Kingdom · Germany · France · Australia · New Zealand · and other regions per Official Rules.
              </p>
            </div>

            <div className="card p-5 flex gap-3">
              <Mail className="w-5 h-5 text-[var(--pch-orange)] shrink-0" />
              <div>
                <p className="text-sm font-medium text-[var(--pch-text)] mb-1">Application response</p>
                <p className="text-xs text-[var(--pch-text-muted)] leading-relaxed">
                  Every applicant receives a personal email within {APPLICATION_RESPONSE_HOURS} hours. Selected winners receive prize details by email.
                </p>
              </div>
            </div>

            <div className="hidden lg:block space-y-2">
              {APPLY_FAQS.map((f, i) => (
                <FaqItem key={i} item={f} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy banner */}
      <div className="py-4 px-5 bg-white border-t border-[var(--pch-border)]">
        <p className="container-page text-center text-xs text-[var(--pch-text-muted)]">
          <Lock className="w-3 h-3 inline mr-1" />
          Your application is confidential. We never sell your personal information.
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-[var(--pch-text-muted)] mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: React.ReactNode }) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 accent-[var(--pch-orange)]" />
      <span className="text-xs text-[var(--pch-text-muted)] leading-relaxed">{label}</span>
    </label>
  );
}

function FaqItem({ item, open, onToggle }: { item: { q: string; a: string }; open: boolean; onToggle: () => void }) {
  return (
    <div className="card overflow-hidden">
      <button type="button" onClick={onToggle} className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-[var(--pch-text)]">
        {item.q}
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 text-xs text-[var(--pch-text-muted)] leading-relaxed border-t border-[var(--pch-border)] pt-3">{item.a}</div>}
    </div>
  );
}
