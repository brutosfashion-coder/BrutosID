'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  initial: string;
  portraitInitial: string;
}

const testimonials: TestimonialData[] = [
  {
    quote:
      'Brutos has completely redefined my wardrobe. The attention to detail in every piece is remarkable — from the stitching to the fabric weight, everything feels intentional and luxurious.',
    name: 'Alexander Whitmore',
    role: 'Creative Director',
    initial: 'A',
    portraitInitial: 'W',
  },
  {
    quote:
      'I\'ve never felt more confident in what I wear. Their blazers fit like they were made just for me. The quality is unmatched at this price point — true quiet luxury.',
    name: 'Daniel Harrington',
    role: 'Investment Analyst',
    initial: 'D',
    portraitInitial: 'H',
  },
  {
    quote:
      'What sets Brutos apart is their understanding of timeless style. These aren\'t trend pieces — they\'re wardrobe foundations you\'ll wear for years to come.',
    name: 'Marcus Chen',
    role: 'Architect & Designer',
    initial: 'M',
    portraitInitial: 'C',
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isAnimating = useRef(false);

  const navigate = useCallback(
    (direction: 'prev' | 'next') => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const nextIndex =
        direction === 'next'
          ? (active + 1) % testimonials.length
          : (active - 1 + testimonials.length) % testimonials.length;

      // Animate out
      gsap.to(quoteRef.current, {
        opacity: 0,
        filter: 'blur(6px)',
        y: direction === 'next' ? -20 : 20,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setActive(nextIndex);
          // Animate in
          gsap.fromTo(
            quoteRef.current,
            {
              opacity: 0,
              filter: 'blur(6px)',
              y: direction === 'next' ? 20 : -20,
            },
            {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              onComplete: () => {
                isAnimating.current = false;
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
      // Badge
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Content
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Stats
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = testimonials[active];

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      {/* Divider top */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Badge */}
        <div ref={badgeRef} className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mist text-sm font-body text-charcoal/70">
            <span className="w-2 h-2 rounded-full bg-camel" />
            Testimonials
          </span>
        </div>

        {/* 3-column layout */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-[180px_1fr_160px] gap-8 lg:gap-12 items-start">
          {/* LEFT: Author photo + stats */}
          <div className="hidden lg:flex flex-col gap-8">
            {/* Author photo */}
            <div className="w-[160px] h-[160px] rounded-2xl bg-gradient-to-br from-camel/30 to-camel/10 flex items-center justify-center">
              <span className="font-heading text-4xl text-camel/60 font-medium">{current.initial}</span>
            </div>

            {/* Stats */}
            <div ref={statsRef}>
              <p className="font-body text-charcoal/50 text-sm mb-1">Happy Customers</p>
              <p className="font-heading text-4xl text-charcoal font-semibold">2,852</p>
            </div>
          </div>

          {/* CENTER: Quote */}
          <div ref={quoteRef} className="flex flex-col justify-center min-h-[280px]">
            {/* Decorative quote mark */}
            <span className="font-heading text-7xl text-camel/30 leading-none mb-4 select-none">
              &#x275D;
            </span>

            {/* Quote text */}
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal font-medium leading-[1.3] mb-8">
              {current.quote}
            </blockquote>

            {/* Author info */}
            <div>
              <p className="font-body text-charcoal font-medium text-base">{current.name}</p>
              <p className="font-body text-charcoal/50 text-sm">{current.role}</p>
            </div>

            {/* Mobile stats */}
            <div className="lg:hidden mt-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-camel/30 to-camel/10 flex items-center justify-center">
                <span className="font-heading text-xl text-camel/60 font-medium">{current.initial}</span>
              </div>
              <div>
                <p className="font-body text-charcoal/50 text-xs">Happy Customers</p>
                <p className="font-heading text-2xl text-charcoal font-semibold">2,852</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Portrait + nav */}
          <div className="hidden lg:flex flex-col items-end gap-8">
            {/* Portrait */}
            <div className="w-[140px] h-[140px] rounded-2xl bg-gradient-to-br from-mist/60 to-mist/30 flex items-center justify-center">
              <span className="font-heading text-3xl text-charcoal/30 font-medium">{current.portraitInitial}</span>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-end gap-3 mt-10">
          <button
            onClick={() => navigate('prev')}
            className="w-11 h-11 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:border-charcoal/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="w-11 h-11 rounded-full bg-camel flex items-center justify-center text-white hover:bg-camel/90 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
