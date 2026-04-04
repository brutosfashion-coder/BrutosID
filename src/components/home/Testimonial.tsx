'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Brutos has completely transformed how I approach dressing. Every piece feels intentional, luxurious, and perfectly crafted for the modern gentleman.',
    name: 'Arief Rachman',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    sideImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=260&fit=crop&q=80',
  },
  {
    quote: 'The quality is unmatched. I\'ve never felt more confident walking into a room. Brutos understands what quiet luxury truly means.',
    name: 'Daniel Hartono',
    role: 'Managing Partner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
    sideImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=260&fit=crop&q=80',
  },
  {
    quote: 'From the fabric to the fit, everything about Brutos speaks to a man who values substance over flash. It\'s become my go-to for every occasion.',
    name: 'Kevin Sugiarto',
    role: 'Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
    sideImage: 'https://images.unsplash.com/photo-1480429370612-2b63fcbafb67?w=200&h=260&fit=crop&q=80',
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
      .to('.tm-avatar-img, .tm-side-img, .tm-author', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      }, '<')
      .call(() => setIndex(newIndex))
      .fromTo('.tm-quote-text',
        { opacity: 0, y: 20, filter: 'blur(5px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }
      )
      .fromTo('.tm-avatar-img, .tm-side-img, .tm-author',
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
          {/* Left - Avatar */}
          <div className="tm-slide-up md:col-span-3 flex flex-col items-center md:items-start">
            <div className="tm-avatar-img relative w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-[16px] overflow-hidden mb-4">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-medium text-[#363636]">Happy Customers</p>
            <p className="text-xs text-[#363636]/40 mt-1">2026</p>
          </div>

          {/* Center - Quote */}
          <div className="md:col-span-6 flex flex-col items-center text-center">
            <div className="tm-blur-reveal">
              <span className="font-heading text-7xl md:text-8xl text-[#C8B89A]/40 leading-none select-none block mb-2">
                &ldquo;
              </span>
            </div>
            <p className="tm-quote-text font-heading text-xl md:text-2xl lg:text-3xl text-[#363636] italic leading-relaxed max-w-lg">
              {current.quote}
            </p>
            <div className="tm-author mt-8">
              <p className="font-medium text-[#363636] text-sm">{current.name}</p>
              <p className="text-xs text-[#363636]/50 mt-0.5">{current.role}</p>
            </div>
          </div>

          {/* Right - Side Image */}
          <div className="tm-slide-up md:col-span-3 hidden md:flex justify-end">
            <div className="tm-side-img relative w-[140px] h-[180px] rounded-[16px] overflow-hidden">
              <Image
                src={current.sideImage}
                alt="Lifestyle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-end mt-10 gap-2">
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
