'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealText =
  'We blend traditional craftsmanship with contemporary design, creating pieces that transcend seasons and trends. For the man who dresses not to impress — but to express.';

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
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const setNumRef = useCallback((el: HTMLSpanElement | null, i: number) => {
    numRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progressive text reveal — the signature Dentora effect
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll('.text-reveal-char');
        ScrollTrigger.create({
          trigger: textRef.current,
          start: 'top 72%',
          end: 'bottom 35%',
          scrub: 0.3,
          onUpdate: (self) => {
            const progress = self.progress;
            chars.forEach((char, i) => {
              const threshold = i / chars.length;
              if (progress > threshold) {
                char.classList.add('revealed');
              } else {
                char.classList.remove('revealed');
              }
            });
          },
        });
      }

      // Stats count-up
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        numRefs.current.forEach((el, i) => {
          if (!el) return;
          const s = stats[i];
          const obj = { val: 0 };
          gsap.to(obj, {
            val: s.value,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              if (el) {
                el.textContent =
                  s.value % 1 !== 0
                    ? obj.val.toFixed(1)
                    : Math.round(obj.val).toLocaleString();
              }
            },
          });
        });
      }

      // Image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
    <section ref={sectionRef} id="about" className="py-24 md:py-32 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-camel" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-stone">
            Our Story
          </span>
        </div>

        {/* Progressive text reveal */}
        <div ref={textRef} className="mb-20 max-w-4xl">
          <p className="font-heading text-[26px] md:text-[36px] lg:text-[44px] leading-[1.4] font-medium text-charcoal">
            {revealText.split('').map((char, i) => (
              <span key={i} className="text-reveal-char">
                {char}
              </span>
            ))}
          </p>
        </div>

        {/* Stats + Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">
          {/* Left: stats */}
          <div ref={statsRef}>
            <p className="text-charcoal/40 text-[14px] leading-relaxed mb-10 max-w-sm">
              Thousands of gentlemen trust Brutos for their everyday elegance.
              Our numbers tell the story of quiet confidence.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-0.5 mb-1.5">
                    <span
                      ref={(el) => setNumRef(el, i)}
                      className="font-heading text-[40px] md:text-[48px] font-semibold text-charcoal leading-none"
                    >
                      0
                    </span>
                    <span className="font-heading text-lg text-camel">
                      {s.suffix}
                    </span>
                  </div>
                  <span className="text-[11px] text-charcoal/30 tracking-[0.1em] uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            ref={imageRef}
            className="img-container rounded-2xl aspect-[4/3]"
          >
            <Image
              src="/images/about.jpg"
              alt="Our atelier"
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
