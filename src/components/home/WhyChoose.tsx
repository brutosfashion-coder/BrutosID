'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featurePills = ['Free Shipping', 'Quality Guarantee', 'Easy Returns'];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -360 : 360;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateScrollState, 400);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wc-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.wc-blur-reveal',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.wc-slide-up',
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

      gsap.fromTo(
        '.wc-pill',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.wc-pills-row',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <span className="wc-slide-up inline-block border border-[#363636]/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[#363636]/70 mb-6">
              Why Choose Us
            </span>
            <h2 className="wc-blur-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-[#363636] leading-[1.1]">
              What Sets<br />Us Apart
            </h2>
          </div>
          <div className="wc-slide-up flex items-center gap-2 mt-2">
            <button
              onClick={() => scroll('left')}
              className={`w-10 h-10 rounded-full border border-[#363636]/20 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft ? 'hover:bg-[#363636] hover:text-white text-[#363636]' : 'opacity-30 cursor-not-allowed text-[#363636]/40'
              }`}
              disabled={!canScrollLeft}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-[#C8B89A] text-white hover:bg-[#b8a78a]'
                  : 'bg-[#C8B89A]/30 text-white/50 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-2 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Card 1 - Curated Selection (clean, no photo) */}
          <div className="wc-slide-up flex-shrink-0 w-[300px] md:w-[340px] snap-start">
            <div className="h-[400px] rounded-[16px] border border-[#363636]/10 bg-white p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D6CEBE]/30 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <span className="inline-block bg-[#D6CEBE]/20 text-[#363636]/60 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Curated
                </span>
                <h3 className="font-heading text-2xl text-[#363636] leading-tight mb-3">
                  Curated Selection
                </h3>
                <p className="text-[#363636]/50 text-sm leading-relaxed">
                  Hand-picked pieces from the world&apos;s finest ateliers. Every garment is chosen with intention and care.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#C8B89A] text-sm font-medium">
                <span>Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Membership Card */}
          <div className="wc-slide-up flex-shrink-0 w-[300px] md:w-[340px] snap-start">
            <div className="h-[400px] rounded-[16px] bg-[#C8B89A] p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <span className="inline-block bg-white/20 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                  &#127942; Member Rewards
                </span>
                <h3 className="font-heading text-5xl text-white font-semibold leading-none mb-2">15%</h3>
                <p className="text-white/80 text-lg font-heading">off your first order</p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-[#C8B89A] bg-[#D6CEBE] flex items-center justify-center text-[10px] text-[#363636] font-medium"
                      >
                        {['A', 'B', 'C', 'D'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-white/80 text-xs ml-3">3.5K+ members</span>
                </div>
                <button className="w-full bg-white text-[#363636] rounded-full py-3 text-sm font-medium hover:bg-white/90 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Timeless Quality (clean, no photo) */}
          <div className="wc-slide-up flex-shrink-0 w-[300px] md:w-[340px] snap-start">
            <div className="h-[400px] rounded-[16px] border border-[#363636]/10 bg-white p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D6CEBE]/30 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8B89A" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="inline-block bg-[#D6CEBE]/20 text-[#363636]/60 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Quality
                </span>
                <h3 className="font-heading text-2xl text-[#363636] leading-tight mb-3">
                  Timeless Quality
                </h3>
                <p className="text-[#363636]/50 text-sm leading-relaxed">
                  Designed for the modern gentleman. Built to last with premium fabrics and meticulous attention to detail.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#C8B89A] text-sm font-medium">
                <span>Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4 - Stats Card */}
          <div className="wc-slide-up flex-shrink-0 w-[300px] md:w-[340px] snap-start">
            <div className="h-[400px] rounded-[16px] bg-[#363636] p-7 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="inline-block border border-white/20 text-white/70 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                  Customer Stats
                </span>
                <h3 className="font-heading text-6xl text-white font-semibold leading-none mb-1">98%</h3>
                <p className="text-white/50 text-sm">Customer satisfaction rate</p>
              </div>
              {/* Bar Chart */}
              <div>
                <div className="flex items-end gap-2 h-28 mb-3">
                  {[65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 92, 98].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === 11 ? '#C8B89A' : 'rgba(255,255,255,0.15)',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/30">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="wc-pills-row flex flex-wrap justify-center gap-3 mt-10">
          {featurePills.map((pill, i) => (
            <span
              key={i}
              className="wc-pill inline-flex items-center gap-2 border border-[#363636]/15 rounded-full px-5 py-2.5 text-sm text-[#363636]/70"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C8B89A]">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
