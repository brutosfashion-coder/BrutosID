'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scrollRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 mb-16">
        <div className="h-px bg-mist/40" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-charcoal/50 mb-4 block">
              <span className="w-6 h-px bg-camel inline-block" />
              Why Brutos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-medium leading-[1.05]">
              Why Choose Brutos?
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-mist flex items-center justify-center text-charcoal/40 hover:border-charcoal/30 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-charcoal/90 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
      >
        {/* Spacer */}
        <div
          className="hidden xl:block flex-shrink-0"
          style={{ width: 'calc((100vw - 1100px) / 2)' }}
        />

        {/* Card 1 — Image */}
        <div className="why-card flex-shrink-0 w-[270px] md:w-[300px] h-[380px] rounded-2xl overflow-hidden relative">
          <Image
            src="/images/why/customer.svg"
            alt="Curated Selection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="font-heading text-xl text-white font-medium">
              Curated Selection
            </h3>
          </div>
        </div>

        {/* Card 2 — Accent */}
        <div className="why-card flex-shrink-0 w-[270px] md:w-[300px] h-[380px] rounded-2xl bg-camel p-6 flex flex-col justify-between">
          <div>
            <div className="flex -space-x-2 mb-3">
              {['A', 'R', 'M', 'J'].map((l) => (
                <div
                  key={l}
                  className="w-8 h-8 rounded-full border-2 border-camel bg-white/20 flex items-center justify-center"
                >
                  <span className="text-white text-[11px] font-medium">
                    {l}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-white/80 font-body text-sm">
              3.5K+ members
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full mt-3 ml-0 block w-fit">
              <Trophy size={13} className="text-white" />
              <span className="text-white text-[11px] font-body font-medium">
                Rewards
              </span>
            </div>
          </div>
          <p className="text-white/90 font-body text-sm leading-relaxed">
            Maintain your style streak and earn exclusive rewards &amp; early
            access.
          </p>
        </div>

        {/* Card 3 — Image */}
        <div className="why-card flex-shrink-0 w-[270px] md:w-[300px] h-[380px] rounded-2xl overflow-hidden relative">
          <Image
            src="/images/why/lifestyle.svg"
            alt="Timeless Quality"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="font-heading text-xl text-white font-medium">
              Timeless Quality
            </h3>
          </div>
        </div>

        {/* Card 4 — Stats */}
        <div className="why-card flex-shrink-0 w-[270px] md:w-[300px] h-[380px] rounded-2xl bg-charcoal p-6 flex flex-col justify-between">
          <div>
            <p className="font-heading text-5xl text-white font-semibold">
              98%
            </p>
            <p className="font-body text-white/45 text-sm mt-1">
              Customer Satisfaction
            </p>
          </div>
          <div className="flex items-end gap-3 justify-center">
            {[45, 65, 90].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 rounded-lg bg-camel"
                  style={{ height: `${h * 1.2}px` }}
                />
                <span className="text-white/35 font-body text-[11px]">
                  {['Mar', 'Apr', 'May'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div
          className="hidden xl:block flex-shrink-0"
          style={{ width: 'calc((100vw - 1100px) / 2)' }}
        />
      </div>
    </section>
  );
}
