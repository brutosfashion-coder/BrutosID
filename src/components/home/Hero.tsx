'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      // Image parallax
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

      // Word-by-word heading reveal
      const headingEl = headingRef.current;
      if (headingEl) {
        const text = headingEl.textContent || '';
        const words = text.split(' ');
        headingEl.innerHTML = words
          .map(
            (word) =>
              '<span class="inline-block overflow-hidden mr-[0.25em]"><span class="hero-word inline-block">' + word + '</span></span>'
          )
          .join('');

        tl.fromTo(
          '.hero-word',
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.08,
          }
        );
      }

      // Subtitle slide up
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );

      // CTA button
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      );

      // Bottom bar
      tl.fromTo(
        bottomBarRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-3 pt-3 md:px-5 md:pt-5">
      <div className="relative w-full min-h-screen rounded-[24px] overflow-hidden">
        {/* Background Image */}
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="/hero-model.png"
            alt="Man in premium beige blazer"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-12 lg:px-16 pt-32 pb-8">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center max-w-[900px]">
            <h1
              ref={headingRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dress the Man You&apos;ve Become
            </h1>

            <p
              ref={subtitleRef}
              className="mt-6 md:mt-8 max-w-[520px] text-white/70 text-base md:text-lg leading-relaxed opacity-0"
            >
              Premium tailored menswear for the modern gentleman. Where quiet luxury
              meets timeless sophistication.
            </p>

            <div ref={ctaRef} className="mt-8 md:mt-10 opacity-0">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-camel text-white font-semibold rounded-full hover:bg-camel-dark transition-all duration-300 hover:shadow-xl hover:shadow-camel/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore Collection
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            ref={bottomBarRef}
            className="flex items-center justify-between border-t border-white/10 pt-5 opacity-0"
          >
            <p
              className="text-white/60 text-sm hidden sm:block"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Style, Our Craft
            </p>

            <div className="flex items-center gap-3 text-white/50 text-sm">
              <span className="text-white font-medium">01</span>
              <span>/</span>
              <span>08</span>
            </div>

            <div className="flex items-center gap-2 text-white/50 text-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">Scroll for More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
