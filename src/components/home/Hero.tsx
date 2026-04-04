'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, Play, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceTags = [
  'Premium Blazer',
  'Linen Shirt',
  'Wool Trousers',
  'Overcoat',
  'Polo Knit',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

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

      // Floating card - Dentora style slide-in
      tl.fromTo(
        floatingCardRef.current,
        { opacity: 0, x: -40, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      );

      // Service tags
      tl.fromTo(
        '.hero-tag',
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'back.out(1.5)',
          stagger: 0.06,
        },
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
    <section ref={sectionRef} className="relative px-3 pt-3 md:px-4 md:pt-4">
      <div className="relative w-full min-h-[92vh] rounded-[24px] overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-between min-h-[92vh] px-6 md:px-12 lg:px-16 pt-28 pb-6">
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
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full pr-2 pl-7 py-2 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-sm font-medium">Explore Collection</span>
                <span className="w-10 h-10 rounded-full bg-camel flex items-center justify-center group-hover:bg-camel-dark transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Area — floating elements + bar */}
          <div className="space-y-5">
            {/* Floating Card + Tags Row */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
              {/* Floating Stats Card - Dentora style */}
              <div
                ref={floatingCardRef}
                className="glass rounded-2xl p-4 max-w-[320px] opacity-0"
              >
                <div className="flex items-start gap-3">
                  {/* Video Thumbnail Placeholder */}
                  <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-camel/40 to-camel/20" />
                    <Play className="w-5 h-5 text-white relative z-10" fill="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/90 text-xs font-medium leading-snug">
                      Crafted with intention for the modern gentleman.
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Star className="w-3.5 h-3.5 text-camel" fill="currentColor" />
                      <span className="text-white text-sm font-semibold">4.9</span>
                      <span className="text-white/40 text-xs ml-1">Rating</span>
                      <ArrowRight className="w-3 h-3 text-white/40 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Tags - Dentora style pills */}
              <div ref={tagsRef} className="flex flex-wrap justify-end gap-2">
                {serviceTags.map((tag, i) => (
                  <span
                    key={i}
                    className="hero-tag px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white/80 bg-white/5 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 cursor-default opacity-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Bar - Dentora style */}
            <div
              ref={bottomBarRef}
              className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0"
            >
              <p
                className="text-white/60 text-sm hidden sm:block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Your Style, Our Craft
              </p>

              <div className="flex items-center gap-3 text-white/50 text-sm">
                <span className="text-white font-medium">Preview</span>
                <span className="text-white font-medium">01</span>
                <span>/</span>
                <span>08</span>
                <span className="ml-2">Next</span>
              </div>

              <div className="flex items-center gap-2 text-white/50 text-sm">
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Scroll for More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
