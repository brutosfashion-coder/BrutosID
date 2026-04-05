'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collection" className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Divider */}
        <div className="h-px bg-mist/40 mb-16" />

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-charcoal/50">
            <span className="w-6 h-px bg-camel" />
            Featured Collection
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-charcoal font-medium leading-[1.05] mb-4 max-w-2xl">
          Premium Menswear for
          <br />a Refined Lifestyle
        </h2>

        <p className="font-body text-charcoal/45 text-[15px] max-w-md mb-12 leading-relaxed">
          Each piece crafted with meticulous attention to detail, using
          the&nbsp;finest materials sourced worldwide.
        </p>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div ref={leftRef}>
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
              <Image
                src="/images/featured-product.svg"
                alt="Featured product"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg text-charcoal font-medium">
                  Brutos Atelier
                </h3>
                <p className="font-body text-charcoal/40 text-sm">
                  Lead Design Studio
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-camel text-sm">★</span>
                <span className="font-body text-sm text-charcoal">4.9</span>
                <span className="font-body text-xs text-charcoal/35">
                  (45+ reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightRef}>
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
              <Image
                src="/images/about-brand.svg"
                alt="Collection showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Stats overlay — inside rounded container */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-body text-charcoal/45 text-[11px]">
                      New Arrivals
                    </p>
                    <p className="font-heading text-charcoal text-lg font-semibold">
                      24 Pieces
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-charcoal/45 text-[11px]">
                      Crafting Time
                    </p>
                    <p className="font-heading text-charcoal text-lg font-semibold">
                      48 hrs
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-body text-charcoal/45 text-[11px]">
                      Season Progress
                    </span>
                    <span className="font-body text-camel text-[11px] font-medium">
                      72%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-mist/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-camel rounded-full"
                      style={{ width: '72%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#collection"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-body font-medium hover:bg-charcoal/90 transition-colors group"
            >
              View Full Collection
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
