'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? 340 : -340,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-14 mb-12">
        {/* Divider */}
        <div className="h-px bg-sand/60 mb-16" />

        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-camel" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-stone">
                Why Brutos
              </span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] text-charcoal font-medium leading-[1.05]">
              Why Choose
              <br />
              <span className="text-camel">Brutos?</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-charcoal/30 hover:border-charcoal/30 hover:text-charcoal/60 transition-all"
              aria-label="Previous"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-charcoal/85 transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-14 pb-2"
      >
        {/* Card 1 — Image */}
        <div className="why-card flex-shrink-0 w-[260px] md:w-[300px] h-[400px] rounded-2xl overflow-hidden relative">
          <Image
            src="/images/why/why-1.jpg"
            alt="Curated Selection"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-white/50 text-[10px] tracking-[0.15em] uppercase mb-1">
              01
            </p>
            <h3 className="font-heading text-xl text-white font-medium">
              Curated Selection
            </h3>
          </div>
        </div>

        {/* Card 2 — Accent card */}
        <div className="why-card flex-shrink-0 w-[260px] md:w-[300px] h-[400px] rounded-2xl bg-camel p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-5">
              <Award size={18} className="text-white" />
            </div>
            <h3 className="font-heading text-2xl text-white font-medium mb-2">
              Loyalty
              <br />
              Rewards
            </h3>
            <p className="text-white/60 text-[13px] leading-relaxed">
              Earn points with every purchase. Unlock early access, exclusive
              drops, and personalized styling.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['A', 'R', 'M'].map((l) => (
                <div
                  key={l}
                  className="w-7 h-7 rounded-full bg-white/20 border-2 border-camel flex items-center justify-center"
                >
                  <span className="text-white text-[10px] font-medium">
                    {l}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-white/60 text-[12px]">3.5K+ members</span>
          </div>
        </div>

        {/* Card 3 — Image */}
        <div className="why-card flex-shrink-0 w-[260px] md:w-[300px] h-[400px] rounded-2xl overflow-hidden relative">
          <Image
            src="/images/why/why-2.jpg"
            alt="Timeless Quality"
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-white/50 text-[10px] tracking-[0.15em] uppercase mb-1">
              03
            </p>
            <h3 className="font-heading text-xl text-white font-medium">
              Timeless Quality
            </h3>
          </div>
        </div>

        {/* Card 4 — Dark stats */}
        <div className="why-card flex-shrink-0 w-[260px] md:w-[300px] h-[400px] rounded-2xl bg-charcoal p-6 flex flex-col justify-between">
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.15em] uppercase mb-3">
              Satisfaction Rate
            </p>
            <p className="font-heading text-[56px] text-white font-semibold leading-none">
              98<span className="text-camel">%</span>
            </p>
          </div>
          <div className="flex items-end gap-2.5">
            {[40, 58, 85, 72, 95].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-full rounded-md bg-camel/80"
                  style={{ height: `${h * 1.2}px` }}
                />
                <span className="text-white/20 text-[10px]">
                  {['J', 'F', 'M', 'A', 'M'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
