'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'Brutos has completely redefined my wardrobe. The attention to detail in every piece is remarkable — from the stitching to the fabric weight, everything feels intentional.',
    name: 'Alexander Whitmore',
    role: 'Creative Director',
    initial: 'A',
  },
  {
    quote:
      "I've never felt more confident in what I wear. Their blazers fit like they were made just for me. True quiet luxury at its finest.",
    name: 'Daniel Harrington',
    role: 'Investment Analyst',
    initial: 'D',
  },
  {
    quote:
      "What sets Brutos apart is their understanding of timeless style. These aren't trend pieces — they're wardrobe foundations you'll wear for years.",
    name: 'Marcus Chen',
    role: 'Architect',
    initial: 'M',
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const animating = useRef(false);

  const go = useCallback(
    (dir: 'prev' | 'next') => {
      if (animating.current) return;
      animating.current = true;

      const next =
        dir === 'next'
          ? (active + 1) % testimonials.length
          : (active - 1 + testimonials.length) % testimonials.length;

      gsap.to(quoteRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          setActive(next);
          gsap.fromTo(
            quoteRef.current,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: 'power2.out',
              onComplete: () => {
                animating.current = false;
              },
            }
          );
        },
      });
    },
    [active]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-sand/60 mb-16" />

        {/* Top: badge + nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-camel" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone">
              Testimonials
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go('prev')}
              className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-charcoal/30 hover:border-charcoal/30 hover:text-charcoal/60 transition-all"
              aria-label="Previous"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => go('next')}
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-charcoal/85 transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quote area */}
        <div ref={quoteRef} className="max-w-3xl">
          <span className="font-heading text-[72px] text-camel/15 leading-none select-none block -mb-6">
            &ldquo;
          </span>
          <blockquote className="font-heading text-[24px] md:text-[32px] lg:text-[40px] text-charcoal font-medium leading-[1.35] mb-10">
            {t.quote}
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-cream-dark flex items-center justify-center">
              <span className="font-heading text-[14px] text-charcoal/40">
                {t.initial}
              </span>
            </div>
            <div>
              <p className="text-charcoal text-[14px] font-medium">{t.name}</p>
              <p className="text-charcoal/30 text-[12px]">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-10 border-t border-sand/40 flex items-center gap-10">
          <div>
            <p className="font-heading text-[36px] md:text-[44px] text-charcoal font-semibold leading-none">
              2,852
            </p>
            <p className="text-charcoal/25 text-[11px] tracking-[0.1em] uppercase mt-1">
              Happy Customers
            </p>
          </div>
          <div className="w-px h-12 bg-sand/40" />
          <div>
            <p className="font-heading text-[36px] md:text-[44px] text-charcoal font-semibold leading-none">
              4.9
            </p>
            <p className="text-charcoal/25 text-[11px] tracking-[0.1em] uppercase mt-1">
              Average Rating
            </p>
          </div>
          <div className="w-px h-12 bg-sand/40 hidden sm:block" />
          <div className="hidden sm:block">
            <p className="font-heading text-[36px] md:text-[44px] text-charcoal font-semibold leading-none">
              12
            </p>
            <p className="text-charcoal/25 text-[11px] tracking-[0.1em] uppercase mt-1">
              Countries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
