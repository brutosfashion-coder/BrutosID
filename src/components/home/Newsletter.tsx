'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setEmail('');
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-sand/60 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="font-heading text-[36px] md:text-[48px] text-charcoal font-medium leading-[1.1]">
              Stay in
              <br />
              <span className="text-camel">Style</span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-charcoal/35 text-[14px] leading-relaxed mb-6">
              Get the latest collections, style tips, and exclusive member-only
              offers delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-5 py-3.5 bg-cream-dark border border-sand/50 rounded-l-full text-[13px] text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-camel transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-6 py-3.5 bg-charcoal text-white rounded-r-full text-[13px] font-medium hover:bg-charcoal/85 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
