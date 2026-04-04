'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Brutos has completely transformed how I approach dressing. Every piece feels intentional, luxurious, and perfectly crafted for the modern gentleman who values substance.',
    name: 'Arief Rachman',
    role: 'Creative Director',
    initial: 'A',
  },
  {
    quote: 'The quality is unmatched. I have never felt more confident walking into a room. Brutos understands what quiet luxury truly means for a discerning man.',
    name: 'Daniel Hartono',
    role: 'Managing Partner',
    initial: 'D',
  },
  {
    quote: 'From the fabric to the fit, everything about Brutos speaks to a man who values substance over flash. It has become my go-to brand for every occasion.',
    name: 'Kevin Sugiarto',
    role: 'Architect',
    initial: 'K',
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateChange = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });

    tl.to('.tm-quote-text', {
      opacity: 0, y: -20, filter: 'blur(5px)', duration: 0.3, ease: 'power2.in',
    })
      .to('.tm-author', { opacity: 0, duration: 0.2, ease: 'power2.in' }, '<')
      .call(() => setIndex(newIndex))
      .fromTo('.tm-quote-text',
        { opacity: 0, y: 20, filter: 'blur(5px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }
      )
      .fromTo('.tm-author',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' },
        '<0.1'
      );
  }, [isAnimating]);

  const goNext = () => animateChange((index + 1) % testimonials.length);
  const goPrev = () => animateChange((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tm-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.tm-blur-reveal', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.tm-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const current = testimonials[index];

  return (
    <section ref={sectionRef} className="px-3 md:px-4 pb-3 md:pb-4">
      <div className="bg-warm-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Header Row: Badge + Happy Customers stat */}
        <div className="flex items-start justify-between mb-12">
          <span className="tm-slide-up pill-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-camel" />
            Testimonials
          </span>
          <div className="tm-slide-up text-right hidden md:block">
            <p className="text-xs text-charcoal/40 uppercase tracking-wider">Happy Customers</p>
            <p className="text-4xl font-heading font-bold text-charcoal mt-1">2,852</p>
          </div>
        </div>

        {/* Wide Dentora-style Layout: Quote Left + Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left — Quote */}
          <div className="tm-slide-up">
            <div className="tm-blur-reveal">
              <span className="font-heading text-7xl md:text-8xl text-camel/30 leading-none select-none block mb-4">
                &ldquo;
              </span>
            </div>
            <p className="tm-quote-text font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.3] max-w-2xl">
              {current.quote}
            </p>

            {/* Author */}
            <div className="tm-author mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-camel flex items-center justify-center text-white font-heading text-xl font-semibold shadow-md">
                {current.initial}
              </div>
              <div>
                <p className="font-medium text-charcoal text-base">{current.name}</p>
                <p className="text-sm text-charcoal/50 mt-0.5">{current.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 mt-8">
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full bg-camel text-white flex items-center justify-center hover:bg-camel-dark transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span className="ml-3 text-sm text-charcoal/40">
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right — Decorative Portrait (Dentora style) */}
          <div className="tm-slide-up hidden lg:block">
            <div className="w-48 h-64 rounded-[20px] bg-gradient-to-b from-mist to-camel/30 flex items-end justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
              <div className="relative z-10 text-center pb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <span className="text-3xl font-heading font-bold text-white">{current.initial}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
