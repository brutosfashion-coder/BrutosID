'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        tagsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-model.png"
          alt="Brutos ID — Premium Menswear"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Content — anchored to bottom */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col justify-end px-6 lg:px-12 pb-10 md:pb-14 opacity-0"
        >
          <div className="max-w-xl">
            <p className="font-body text-white/50 text-[11px] tracking-[0.2em] uppercase mb-4">
              Premium Menswear Collection
            </p>

            <h1 className="font-heading text-[44px] sm:text-6xl md:text-7xl text-white font-medium leading-[0.95] mb-5">
              Dress the Man
              <br />
              You&apos;ve Become
            </h1>

            <p className="font-body text-white/55 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Elevating everyday elegance through precision tailoring
              and&nbsp;thoughtful design. For the modern gentleman.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#collection"
                className="inline-flex items-center gap-3 bg-white text-charcoal px-7 py-3.5 rounded-full text-sm font-body font-medium hover:bg-cream transition-colors"
              >
                Explore Collection
                <ArrowRight size={16} />
              </a>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <Star size={13} className="text-camel fill-camel" />
                <span className="text-white/70 text-xs font-body">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Bottom tags */}
          <div
            ref={tagsRef}
            className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10 opacity-0"
          >
            {['Premium Blazer', 'Linen Shirt', 'Wool Trousers', 'Overcoat', 'Polo Knit'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-white/15 text-white/45 text-[11px] font-body tracking-wide"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
