'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceTags = ['Premium Blazer', 'Linen Shirt', 'Wool Trousers', 'Overcoat', 'Polo Knit'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Word-by-word heading reveal
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.hero-word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 60, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            delay: 0.3,
          }
        );
      }

      // Subtitle fade
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.9 }
        );
      }

      // CTA fade
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.1 }
        );
      }

      // Floating card slide in from left
      if (floatingCardRef.current) {
        gsap.fromTo(
          floatingCardRef.current,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1.3 }
        );
      }

      // Service tags scale in
      if (tagsRef.current) {
        const tags = tagsRef.current.querySelectorAll('.service-tag');
        gsap.fromTo(
          tags,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.06,
            delay: 1.4,
          }
        );
      }

      // Bottom bar fade
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.6 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingText = 'Dress the Man You\'ve Become';
  const words = headingText.split(' ');

  return (
    <section ref={sectionRef} className="relative mx-3 mt-3 md:mx-4 md:mt-4">
      <div className="rounded-[24px] overflow-hidden relative min-h-[88vh]">
        {/* Background image */}
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="/hero-model.png"
            alt="Brutos ID - Premium Menswear"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[88vh] px-6 md:px-10 lg:px-14">
          {/* Main content - centered vertically */}
          <div className="flex-1 flex flex-col justify-center pt-24 pb-8 max-w-2xl">
            <h1
              ref={headingRef}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] mb-6"
            >
              {words.map((word, i) => (
                <span key={i} className="hero-word inline-block mr-[0.25em]">
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={subtitleRef}
              className="font-body text-white/70 text-base md:text-lg max-w-md mb-8 leading-relaxed opacity-0"
            >
              Elevating everyday elegance through precision tailoring and 
              thoughtful design. For the modern gentleman.
            </p>

            <a
              ref={ctaRef}
              href="#collection"
              className="inline-flex items-center gap-4 opacity-0 group w-fit"
            >
              <span className="bg-white text-charcoal px-7 py-3.5 rounded-full text-sm font-medium font-body tracking-wide">
                Explore Collection
              </span>
              <span className="w-12 h-12 rounded-full bg-camel flex items-center justify-center group-hover:bg-camel-dark transition-colors">
                <ArrowRight size={18} className="text-white" />
              </span>
            </a>
          </div>

          {/* Bottom area */}
          <div className="pb-6 md:pb-8 space-y-4">
            {/* Floating card + service tags row */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
              {/* Floating card - bottom left */}
              <div
                ref={floatingCardRef}
                className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 max-w-xs opacity-0"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-camel to-camel-dark flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-heading text-lg font-semibold">B</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm leading-snug font-body">
                      Crafted with intention for the modern gentleman.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Star size={14} className="text-camel fill-camel" />
                      <span className="text-white/80 text-xs font-body">4.9 Rating</span>
                      <ArrowRight size={12} className="text-white/50 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service tags - bottom right */}
              <div ref={tagsRef} className="flex flex-wrap justify-end gap-2">
                {serviceTags.map((tag) => (
                  <span
                    key={tag}
                    className="service-tag px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-body tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div
              ref={bottomBarRef}
              className="flex items-center justify-between border-t border-white/15 pt-4 opacity-0"
            >
              <span className="text-white/50 text-xs font-body tracking-wider uppercase">
                Your Style, Our Craft
              </span>
              <span className="text-white/50 text-xs font-body hidden sm:inline">
                Preview 01 / 08 Next
              </span>
              <span className="flex items-center gap-2 text-white/50 text-xs font-body">
                <ChevronDown size={14} className="animate-bounce" />
                Scroll for More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
