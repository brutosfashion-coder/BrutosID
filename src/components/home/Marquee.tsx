'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  'Premium Fabric',
  'Tailored Fit',
  'Timeless Style',
  'Quiet Luxury',
  'Handcrafted Detail',
  'Old Money Aesthetic',
];

/* Dentora-style block separator */
function BlockSeparator() {
  return (
    <span className="flex items-center gap-[3px] px-4 md:px-6 select-none">
      <span className="w-1.5 h-1.5 rounded-sm bg-camel/60" />
      <span className="w-1.5 h-1.5 rounded-sm bg-camel/40" />
      <span className="w-1.5 h-1.5 rounded-sm bg-camel/60" />
    </span>
  );
}

function MarqueeRow({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="flex overflow-hidden py-4">
      <div
        className={`marquee-track flex items-center gap-0 whitespace-nowrap ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal/80 px-4 md:px-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {item}
            </span>
            <BlockSeparator />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-14 lg:py-18 overflow-hidden opacity-0">
      <div className="max-w-[1400px] mx-auto px-6 mb-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>
      <MarqueeRow speed={45} />
      <MarqueeRow reverse speed={50} />
      <div className="max-w-[1400px] mx-auto px-6 mt-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>
    </section>
  );
}
