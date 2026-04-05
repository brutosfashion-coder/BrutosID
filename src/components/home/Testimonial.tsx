'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'Brutos has completely redefined my wardrobe. The attention to detail in every piece is remarkable — from the stitching to the fabric weight, everything feels intentional and luxurious.',
    name: 'Alexander Whitmore',
    role: 'Creative Director',
  },
  {
    quote:
      "I've never felt more confident in what I wear. Their blazers fit like they were made just for me. True quiet luxury at its finest.",
    name: 'Daniel Harrington',
    role: 'Investment Analyst',
  },
  {
    quote:
      "What sets Brutos apart is their understanding of timeless style. These aren't trend pieces — they're wardrobe foundations you'll wear for years.",
    name: 'Marcus Chen',
    role: 'Architect',
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const animating = useRef(false);

  const nav = useCallback(
    (dir: 'prev' | 'next') => {
      if (animating.current) return;
      animating.current = true;
      const next =
        dir === 'next'
          ? (active + 1) % testimonials.length
          : (active - 1 + testimonials.length) % testimonials.length;

      gsap.to(quoteRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActive(next);
          gsap.fromTo(
            quoteRef.current,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
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
          duration: 1,
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-mist/40 mb-16" />

        {/* Header + nav */}
        <div className="flex items-end justify-between mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-charcoal/50">
            <span className="w-6 h-px bg-camel" />
            Testimonials
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => nav('prev')}
              className="w-10 h-10 rounded-full border border-mist flex items-center justify-center text-charcoal/40 hover:border-charcoal/30 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => nav('next')}
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-charcoal/90 transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Quote */}
        <div ref={quoteRef} className="max-w-3xl">
          <span className="font-heading text-6xl text-camel/20 leading-none select-none block mb-2">
            &#x201C;
          </span>
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-[38px] text-charcoal font-medium leading-[1.3] mb-8">
            {t.quote}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-mist/60 flex items-center justify-center">
              <span className="font-heading text-sm text-charcoal/50">
                {t.name[0]}
              </span>
            </div>
            <div>
              <p className="font-body text-charcoal font-medium text-sm">
                {t.name}
              </p>
              <p className="font-body text-charcoal/40 text-xs">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 flex items-center gap-8">
          <div>
            <p className="font-heading text-3xl md:text-4xl text-charcoal font-semibold">
              2,852
            </p>
            <p className="font-body text-charcoal/35 text-[11px] tracking-wide">
              Happy Customers
            </p>
          </div>
          <div className="w-px h-10 bg-mist/40" />
          <div>
            <p className="font-heading text-3xl md:text-4xl text-charcoal font-semibold">
              4.9
            </p>
            <p className="font-body text-charcoal/35 text-[11px] tracking-wide">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
