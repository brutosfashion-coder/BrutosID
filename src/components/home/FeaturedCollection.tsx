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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collection" className="py-24 md:py-32 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        {/* Divider */}
        <div className="h-px bg-sand/60 mb-16" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-camel" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-stone">
            Featured
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="font-heading text-[36px] md:text-[48px] lg:text-[56px] text-charcoal font-medium leading-[1.05] max-w-lg">
            Premium Menswear
            <br />
            <span className="text-camel">Refined</span> Lifestyle
          </h2>
          <p className="text-charcoal/35 text-[14px] leading-relaxed max-w-sm">
            Each piece crafted with meticulous attention to detail, using
            the finest materials sourced worldwide.
          </p>
        </div>

        {/* 2-column product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — large product image */}
          <div ref={leftRef}>
            <div className="img-container rounded-2xl aspect-[3/4] mb-5">
              <Image
                src="/images/featured-1.jpg"
                alt="Featured collection"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="font-heading text-lg text-charcoal font-medium">
                  The Brutos Blazer
                </h3>
                <p className="text-charcoal/35 text-[13px]">
                  Italian Wool Blend
                </p>
              </div>
              <p className="font-heading text-xl text-charcoal font-semibold">
                Rp 2.850K
              </p>
            </div>
          </div>

          {/* Right — image with overlay card */}
          <div ref={rightRef}>
            <div className="img-container rounded-2xl aspect-[3/4]">
              <Image
                src="/images/featured-2.jpg"
                alt="Collection showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay stats card — inside container, no overflow */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-charcoal/35 text-[11px] tracking-wider uppercase">
                      New Arrivals
                    </p>
                    <p className="font-heading text-charcoal text-xl font-semibold">
                      24 Pieces
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-charcoal/35 text-[11px] tracking-wider uppercase">
                      Crafting
                    </p>
                    <p className="font-heading text-charcoal text-xl font-semibold">
                      48 hrs
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal/35 text-[11px]">
                      Season Progress
                    </span>
                    <span className="text-camel text-[11px] font-medium">
                      72%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-cream-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-camel rounded-full transition-all duration-1000"
                      style={{ width: '72%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-white rounded-full text-[13px] font-medium tracking-wide hover:bg-charcoal/85 transition-colors group"
              >
                View Collection
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <span className="text-charcoal/25 text-[12px] tracking-wide">
                Free shipping on orders above 1.5M
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
