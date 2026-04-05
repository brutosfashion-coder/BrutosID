'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.4
      )
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          0.8
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8 },
          1.1
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Image container — strictly contained */}
      <div className="relative w-full h-[92vh] min-h-[600px] max-h-[920px] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Brutos ID — Premium Menswear"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

        {/* Content — bottom aligned */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-14 pb-10 lg:pb-14">
          <div className="max-w-xl">
            <p className="text-white/40 text-[11px] tracking-[0.25em] uppercase mb-5 font-light">
              Premium Menswear — Est. 2024
            </p>

            <h1
              ref={headingRef}
              className="font-heading text-[46px] sm:text-[60px] md:text-[72px] text-white font-medium leading-[0.95] mb-6 opacity-0"
            >
              Dress the
              <br />
              Man You&apos;ve
              <br />
              Become
            </h1>

            <div ref={contentRef} className="opacity-0">
              <p className="text-white/50 text-[14px] leading-relaxed max-w-md mb-8">
                Precision tailoring meets contemporary design. Crafted for
                gentlemen who value understated elegance.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="#collection"
                  className="inline-flex items-center gap-2.5 bg-white text-charcoal px-7 py-3.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-cream transition-colors duration-300"
                >
                  Explore Collection
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white/70 text-[13px] tracking-wide hover:bg-white/10 transition-colors duration-300"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>

          {/* Floating rating badge — top right */}
          <div
            ref={badgeRef}
            className="absolute top-24 right-6 lg:right-14 opacity-0 hidden md:flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3"
          >
            <div className="w-9 h-9 rounded-full bg-camel/90 flex items-center justify-center">
              <Star size={14} className="text-white fill-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">4.9</p>
              <p className="text-white/40 text-[10px] tracking-wide">2.8K Reviews</p>
            </div>
          </div>

          {/* Bottom tags bar */}
          <div className="flex items-center gap-3 mt-8 pt-5 border-t border-white/10 flex-wrap">
            {['Blazers', 'Linen', 'Trousers', 'Knitwear', 'Overcoats'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 text-white/35 text-[11px] tracking-wider"
                >
                  {tag}
                </span>
              )
            )}
            <span className="ml-auto text-white/25 text-[11px] tracking-wider hidden sm:block">
              Preview 01 / 08
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
