'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Stat counter ─────────────────────────────────────────────── */
function StatCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  triggerRef,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });
    return () => { trigger.kill(); };
  }, [end, triggerRef]);

  return (
    <div className="text-center md:text-left">
      <p
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm md:text-base text-charcoal/60 font-medium">{label}</p>
    </div>
  );
}

/* ── Inline decimal counter (for rating) ──────────────────────── */
function StatCounterInline({
  end,
  triggerRef,
}: {
  end: number;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setCount(parseFloat(obj.val.toFixed(1))),
        });
      },
    });
    return () => { trigger.kill(); };
  }, [end, triggerRef]);

  return <span>{count.toFixed(1)}</span>;
}

/* ── Progressive Text Reveal Component — Dentora Signature ───── */
function ProgressiveTextReveal({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into individual characters wrapped in spans
    const chars = text.split('');
    el.innerHTML = chars
      .map((char) =>
        char === ' '
          ? '<span class="text-reveal-char revealed"> </span>'
          : `<span class="text-reveal-char">${char}</span>`
      )
      .join('');

    const charEls = el.querySelectorAll('.text-reveal-char:not(.revealed)');

    // ScrollTrigger: progressively reveal characters as you scroll
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      end: 'bottom 40%',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const total = charEls.length;
        const revealCount = Math.floor(progress * total);

        charEls.forEach((charEl, i) => {
          if (i < revealCount) {
            charEl.classList.add('revealed');
          } else {
            charEl.classList.remove('revealed');
          }
        });
      },
    });

    return () => { trigger.kill(); };
  }, [text]);

  return (
    <p
      ref={containerRef}
      className={className}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {text}
    </p>
  );
}

/* ── About Section ────────────────────────────────────────────── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge slide in
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      // Team photos
      gsap.fromTo(
        '.team-photo',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: photosRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Image column reveal
      gsap.fromTo(
        imageColRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imageColRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Stats stagger
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Subtle parallax on image
      if (imageColRef.current) {
        gsap.to(imageColRef.current, {
          y: -30, ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="px-3 md:px-4 pb-3 md:pb-4">
      <div className="bg-warm-white rounded-[24px] py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Content */}
            <div className="flex flex-col">
              {/* Badge */}
              <div ref={badgeRef} className="mb-8 opacity-0">
                <span className="pill-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-camel" />
                  Our Story
                </span>
              </div>

              {/* Team Photos — Dentora style */}
              <div ref={photosRef} className="flex items-center gap-4 mb-10">
                <div className="team-photo w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-mist-light opacity-0 shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-camel/30 to-mist flex items-center justify-center">
                    <span className="text-2xl font-heading font-semibold text-charcoal/60">A</span>
                  </div>
                </div>
                <div className="team-photo w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-mist-light opacity-0 shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-mist to-camel/30 flex items-center justify-center">
                    <span className="text-2xl font-heading font-semibold text-charcoal/60">R</span>
                  </div>
                </div>
              </div>

              {/* Progressive Text Reveal — Dentora signature */}
              <ProgressiveTextReveal
                text="We blend traditional craftsmanship with contemporary design, creating pieces that transcend seasons and trends. For the man who dresses not to impress, but to express."
                className="text-2xl md:text-3xl lg:text-4xl leading-[1.3] tracking-[-0.01em]"
              />

              {/* Stats Row */}
              <div className="mt-12 md:mt-16">
                <p className="text-sm text-charcoal/40 uppercase tracking-wider mb-6 font-medium">
                  Thousands Trust Our Craft
                </p>
                <div ref={statsRef} className="grid grid-cols-3 gap-6 md:gap-10">
                  <div className="stat-item opacity-0">
                    <StatCounter end={98} suffix="%" label="Premium Fabric" triggerRef={statsRef} />
                  </div>
                  <div className="stat-item opacity-0">
                    <StatCounter end={2852} suffix="+" label="Gentlemen Served" triggerRef={statsRef} />
                  </div>
                  <div className="stat-item opacity-0">
                    <div className="text-center md:text-left">
                      <p
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal flex items-baseline gap-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        <StatCounterInline end={4.9} triggerRef={statsRef} />
                        <span className="text-camel text-2xl md:text-3xl">&#9733;</span>
                      </p>
                      <p className="mt-2 text-sm md:text-base text-charcoal/60 font-medium">
                        Customer Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div ref={imageColRef} className="relative opacity-0">
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/hero-model.png"
                  alt="Craftsmanship detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-charcoal text-white rounded-2xl px-5 py-4 shadow-lg z-10">
                <p className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                  10+
                </p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-0.5">Years of Craft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
