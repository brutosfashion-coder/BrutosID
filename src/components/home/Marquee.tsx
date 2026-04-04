'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  'Premium Fabric',
  'Tailored Fit',
  'Timeless Style',
  'Quiet Luxury',
  'Handcrafted Detail',
  'Old Money Aesthetic',
];

function BlockSeparator() {
  return (
    <span className="flex items-center gap-[3px] mx-6 flex-shrink-0" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="w-[5px] h-[5px] rounded-[1px] bg-camel/50"
        />
      ))}
    </span>
  );
}

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="flex items-center flex-shrink-0">
      <span className="text-lg md:text-xl font-body text-charcoal/60 whitespace-nowrap tracking-wide">
        {item}
      </span>
      <BlockSeparator />
    </span>
  ));

  return (
    <div ref={sectionRef} className="py-8">
      {/* Top divider */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-6">
        <div className="marquee-track flex animate-marquee">
          {/* Duplicate content for seamless loop */}
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>
    </div>
  );
}
