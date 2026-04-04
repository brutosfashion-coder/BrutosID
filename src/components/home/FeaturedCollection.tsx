'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Monitor, PhoneOff, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const statsOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Heading blur reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Left card slide in
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: leftCardRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Profile info
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: profileRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Right card slide in
      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: rightCardRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Stats overlay
      gsap.fromTo(
        statsOverlayRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: statsOverlayRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const progressBars = Array.from({ length: 12 }, (_, i) => {
    const heights = [40, 55, 70, 50, 80, 65, 90, 72, 60, 85, 75, 68];
    return heights[i % heights.length];
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Badge */}
        <div ref={badgeRef} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mist text-sm font-body text-charcoal/70">
            <span className="w-2 h-2 rounded-full bg-camel" />
            Featured Collection
          </span>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-medium leading-[1.1] mb-4 max-w-2xl"
        >
          Premium Menswear for a Refined Lifestyle
        </h2>

        {/* Subtitle */}
        <p ref={subtitleRef} className="font-body text-charcoal/60 text-lg max-w-xl mb-14">
          Each piece is designed with meticulous attention to detail, using the finest materials sourced from around the world.
        </p>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Video call card */}
            <div ref={leftCardRef} className="flex-shrink-0">
              <div className="relative w-full sm:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4cfc7] to-[#b8b0a2]">
                {/* Inset small image */}
                <div className="absolute top-3 right-3 w-16 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-camel/40 to-camel/20 z-10 border-2 border-white/50">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/80 font-heading text-lg font-medium">B</span>
                  </div>
                </div>

                {/* Main image placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/60 font-heading text-6xl font-medium">B</span>
                </div>

                {/* Call controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                  <button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Monitor className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <PhoneOff className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile info */}
            <div ref={profileRef} className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl text-charcoal font-semibold mb-1">Brutos Atelier</h3>
              <p className="font-body text-charcoal/50 text-sm mb-3">Lead Design Studio</p>

              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-amber-500">★</span>
                <span className="font-body text-charcoal font-medium text-sm">4.9</span>
                <span className="font-body text-charcoal/40 text-sm">(45+ reviews)</span>
              </div>

              <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-6 max-w-[240px]">
                Every garment tells a story of heritage and precision, crafted for the modern gentleman who values subtlety over spectacle.
              </p>

              <button className="inline-flex items-center gap-3 px-6 py-3 bg-camel text-white rounded-full font-body text-sm font-medium hover:bg-camel/90 transition-colors w-fit group">
                Explore Collection
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div ref={rightCardRef} className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/featured-product.svg"
                alt="Featured collection"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating stats card */}
            <div
              ref={statsOverlayRef}
              className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-[320px] bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-body text-charcoal/50 text-xs mb-1">New Arrivals</p>
                  <p className="font-heading text-charcoal text-xl font-semibold">24 Pieces</p>
                </div>
                <div>
                  <p className="font-body text-charcoal/50 text-xs mb-1">Avg Crafting Time</p>
                  <p className="font-heading text-charcoal text-xl font-semibold">48 hrs</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-body text-charcoal/60 text-xs">Season Collection Progress</p>
                  <p className="font-body text-camel text-xs font-medium">72%</p>
                </div>
                <div className="flex items-center gap-[3px]">
                  {progressBars.map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2 rounded-full ${
                        i < Math.round(12 * 0.72) ? 'bg-camel' : 'bg-mist/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
