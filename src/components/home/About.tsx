'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealText =
  'We blend traditional craftsmanship with contemporary design, creating pieces that transcend seasons and trends. For the man who dresses not to impress, but to express.';

const stats = [
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 2852, suffix: '+', label: 'Happy Clients' },
  { value: 4.9, suffix: '★', label: 'Avg Rating' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statNumRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const setStatRef = useCallback(
    (el: HTMLSpanElement | null, i: number) => {
      statNumRefs.current[i] = el;
    },
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Progressive text reveal ── */
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll('.text-reveal-char');
        ScrollTrigger.create({
          trigger: textRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 0.5,
          onUpdate: (self) => {
            chars.forEach((char, i) => {
              if (self.progress > i / chars.length) {
                char.classList.add('revealed');
              } else {
                char.classList.remove('revealed');
              }
            });
          },
        });
      }

      /* ── Stats fade ── */
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        /* Animate numbers */
        statNumRefs.current.forEach((el, i) => {
          if (!el) return;
          const stat = stats[i];
          const target = { val: 0 };
          gsap.to(target, {
            val: stat.value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              if (el) {
                el.textContent =
                  stat.value % 1 !== 0
                    ? target.val.toFixed(1)
                    : Math.round(target.val).toLocaleString();
              }
            },
          });
        });
      }

      /* ── Image reveal ── */
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Badge */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-charcoal/50">
            <span className="w-6 h-px bg-camel" />
            Our Story
          </span>
        </div>

        {/* Progressive text reveal */}
        <div ref={textRef} className="mb-16 md:mb-20">
          <p className="font-heading text-[28px] md:text-4xl lg:text-[44px] leading-[1.35] font-medium">
            {revealText.split('').map((char, i) => (
              <span key={i} className="text-reveal-char">
                {char}
              </span>
            ))}
          </p>
        </div>

        {/* Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Stats */}
          <div ref={statsRef}>
            <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-8">
              Thousands Trust Our Craft
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span
                      ref={(el) => setStatRef(el, i)}
                      className="font-heading text-4xl md:text-5xl font-medium text-charcoal"
                    >
                      0
                    </span>
                    <span className="font-heading text-xl text-camel">
                      {s.suffix}
                    </span>
                  </div>
                  <span className="text-[11px] text-charcoal/40 font-body tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image — properly contained */}
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <Image
              src="/images/about-brand.svg"
              alt="Craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
