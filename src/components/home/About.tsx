'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  triggerRef: React.RefObject<HTMLElement | null>;
}

function StatCounter({ end, suffix = '', prefix = '', label, triggerRef }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(Math.round(obj.val));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, triggerRef]);

  return (
    <div className="text-center md:text-left">
      <p
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm md:text-base text-charcoal/60 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const imageRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge slide in
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Blur-to-clear heading reveal (KEY Dentora animation)
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Description text
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Left images parallax and reveal
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imagesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Right image
      gsap.fromTo(
        imageRightRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRightRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats stagger
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subtle parallax on images
      const leftImgs = imagesRef.current;
      if (leftImgs) {
        gsap.to(leftImgs, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="px-3 md:px-5 pb-3 md:pb-5">
      <div className="bg-warm-white rounded-[24px] py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Badge */}
          <div ref={badgeRef} className="mb-10 md:mb-14 opacity-0">
            <span className="pill-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-camel" />
              Our Story
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Images */}
            <div ref={imagesRef} className="relative opacity-0">
              <div className="relative">
                {/* First portrait image */}
                <div className="relative w-[75%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/hero-model.png"
                    alt="Craftsmanship detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 35vw"
                  />
                </div>

                {/* Second overlapping portrait image */}
                <div className="absolute top-[30%] right-0 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-warm-white">
                  <Image
                    src="/hero-model.png"
                    alt="Premium fabric close-up"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 55vw, 25vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-charcoal text-white rounded-2xl px-5 py-4 shadow-lg z-10">
                <p
                  className="text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  10+
                </p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-0.5">
                  Years of Craft
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              <h2
                ref={headingRef}
                className="text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] opacity-0"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Crafted for the Man Who Knows
              </h2>

              <p
                ref={descRef}
                className="mt-6 md:mt-8 text-charcoal/60 text-base md:text-lg leading-relaxed max-w-[520px] opacity-0"
              >
                Every stitch tells a story of dedication. We blend traditional
                craftsmanship with contemporary design, creating pieces that
                transcend seasons and trends. For the man who dresses not to
                impress, but to express.
              </p>

              {/* Lifestyle image on right */}
              <div
                ref={imageRightRef}
                className="mt-8 md:mt-10 w-full aspect-[16/10] rounded-2xl overflow-hidden opacity-0"
              >
                <Image
                  src="/hero-model.png"
                  alt="Lifestyle"
                  fill={false}
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Stats Row */}
              <div
                ref={statsRef}
                className="mt-10 md:mt-14 grid grid-cols-3 gap-6 md:gap-10"
              >
                <div className="stat-item opacity-0">
                  <StatCounter
                    end={98}
                    suffix="%"
                    label="Premium Fabric"
                    triggerRef={statsRef}
                  />
                </div>
                <div className="stat-item opacity-0">
                  <StatCounter
                    end={2852}
                    suffix="+"
                    label="Satisfied Gentlemen"
                    triggerRef={statsRef}
                  />
                </div>
                <div className="stat-item opacity-0">
                  <div className="text-center md:text-left">
                    <p
                      className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal flex items-baseline gap-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <StatCounterInline
                        end={4.9}
                        decimal
                        triggerRef={statsRef}
                      />
                      <span className="text-camel text-2xl md:text-3xl">★</span>
                    </p>
                    <p className="mt-2 text-sm md:text-base text-charcoal/60 font-medium">
                      Customer Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Inline stat counter for the rating (handles decimal) */
function StatCounterInline({
  end,
  decimal = false,
  triggerRef,
}: {
  end: number;
  decimal?: boolean;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(decimal ? parseFloat(obj.val.toFixed(1)) : Math.round(obj.val));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, decimal, triggerRef]);

  return <span>{decimal ? count.toFixed(1) : count}</span>;
}
