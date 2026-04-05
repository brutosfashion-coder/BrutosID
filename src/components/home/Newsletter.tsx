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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-mist/40 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — heading */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-medium leading-[1.1]">
              Stay in
              <br />
              <span className="text-camel">Style</span>
            </h2>
          </div>

          {/* Right — description + form */}
          <div>
            <p className="font-body text-charcoal/45 text-[15px] leading-relaxed mb-6">
              Get the latest collections, style tips, and exclusive offers
              delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-5 py-3.5 bg-cream-dark border border-mist/40 rounded-l-full font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-camel transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-6 py-3.5 bg-charcoal text-white rounded-r-full font-body text-sm font-medium hover:bg-charcoal/90 transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
