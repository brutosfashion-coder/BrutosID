'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Brutos has completely transformed how I approach dressing. Every piece feels intentional, luxurious, and perfectly crafted for the modern gentleman.',
    name: 'Arief Rachman',
    role: 'Creative Director',
    initial: 'A',
  },
  {
    quote: 'The quality is unmatched. I have never felt more confident walking into a room. Brutos understands what quiet luxury truly means.',
    name: 'Daniel Hartono',
    role: 'Managing Partner',
    initial: 'D',
  },
  {
    quote: 'From the fabric to the fit, everything about Brutos speaks to a man who values substance over flash. It has become my go-to for every occasion.',
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

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.to('.tm-quote-text', {
      opacity: 0,
      y: -20,
      filter: 'blur(5px)',
      duration: 0.3,
      ease: 'power2.in',
    })
      .to('.tm-author', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      }, '<')
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

  const goNext = () => {
    const next = (index + 1) % testimonials.length;
    animateChange(next);
  };

  const goPrev = () => {
    const prev = (index - 1 + testimonials.length) % testimonials.length;
    animateChange(prev);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tm-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tm-blur-reveal',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.tm-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = testimonials[index];

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Badge */}
        <div className="mb-12">
          <span className="tm-slide-up inline-block border border-[#363636]/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[#363636]/70">
            Testimonials
          </span>
        </div>

        {/* Centered Quote Layout */}
        <div className="tm-slide-up flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="tm-blur-reveal">
            <span className="font-heading text-7xl md:text-8xl text-[#C8B89A]/40 leading-none select-none block mb-2">
              &ldquo;
            </span>
          </div>
          <p className="tm-quote-text font-heading text-xl md:text-2xl lg:text-3xl text-[#363636] italic leading-relaxed">
            {current.quote}
          </p>
          <div className="tm-author mt-10 flex flex-col items-center">
            {/* Letter avatar */}
            <div className="w-12 h-12 rounded-full bg-[#C8B89A] flex items-center justify-center text-white font-heading text-lg font-semibold mb-3">
              {current.initial}
            </div>
            <p className="font-medium text-[#363636] text-sm">{current.name}</p>
            <p className="text-xs text-[#363636]/50 mt-0.5">{current.role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10 gap-2">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-[#363636]/20 flex items-center justify-center text-[#363636] hover:bg-[#363636] hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-[#C8B89A] text-white flex items-center justify-center hover:bg-[#b8a78a] transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
