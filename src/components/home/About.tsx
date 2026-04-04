'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealText =
  'We blend traditional craftsmanship with contemporary design, creating pieces that transcend seasons and trends. For the man who dresses not to impress, but to express.';

const stats = [
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 2852, suffix: '+', label: 'Happy Customers' },
  { value: 4.9, suffix: '★', label: 'Average Rating' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const setStatRef = useCallback((el: HTMLSpanElement | null, idx: number) => {
    statNumberRefs.current[idx] = el;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge slide up
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: badgeRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Progressive text reveal - character by character on scroll
      if (textContainerRef.current) {
        const chars = textContainerRef.current.querySelectorAll('.text-reveal-char');
        if (chars.length > 0) {
          ScrollTrigger.create({
            trigger: textContainerRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.5,
            onUpdate: (self) => {
              const progress = self.progress;
              chars.forEach((char, i) => {
                const charProgress = i / chars.length;
                if (progress > charProgress) {
                  char.classList.add('revealed');
                } else {
                  char.classList.remove('revealed');
                }
              });
            },
          });
        }
      }

      // Stats section
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate stat numbers
        statNumberRefs.current.forEach((el, i) => {
          if (!el) return;
          const stat = stats[i];
          const target = { val: 0 };
          gsap.to(target, {
            val: stat.value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              if (el) {
                if (stat.value % 1 !== 0) {
                  el.textContent = target.val.toFixed(1);
                } else {
                  el.textContent = Math.round(target.val).toLocaleString();
                }
              }
            },
          });
        });
      }

      // Image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split reveal text into characters
  const renderRevealText = () => {
    return revealText.split('').map((char, i) => (
      <span key={i} className="text-reveal-char">
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-28 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div ref={badgeRef} className="mb-12 md:mb-16">
          <span className="pill-badge">
            <span className="w-2 h-2 rounded-full bg-camel" />
            Our Story
          </span>
        </div>

        {/* Top row: Photos left + Text reveal right */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 mb-20 md:mb-28">
          {/* Left: Two photos */}
          <div className="flex gap-3 lg:flex-col lg:gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-camel/30 to-camel/60 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading text-2xl font-medium">A</span>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-charcoal/20 to-charcoal/50 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading text-2xl font-medium">R</span>
            </div>
          </div>

          {/* Right: Progressive text reveal */}
          <div ref={textContainerRef}>
            <p className="font-heading text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-medium">
              {renderRevealText()}
            </p>
          </div>
        </div>

        {/* Bottom row: Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
          {/* Left: Stats */}
          <div ref={statsRef}>
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-charcoal mb-8">
              Thousands Trust Our Craft
            </h3>

            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span
                      ref={(el) => setStatRef(el, i)}
                      className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal"
                    >
                      0
                    </span>
                    <span className="font-heading text-2xl md:text-3xl text-camel font-medium">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="text-sm text-charcoal/50 font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-brand.svg"
                alt="Brutos ID Craftsmanship"
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
