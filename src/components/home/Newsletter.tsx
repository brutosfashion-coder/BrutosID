'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nl-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.nl-blur-reveal', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.nl-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="px-3 md:px-4 pb-3 md:pb-4">
      <div className="bg-warm-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Heading — Dentora exact style */}
          <div>
            <h2
              className="nl-blur-reveal text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Style Matters<br />
              <span className="text-camel">Connect</span> With<br />
              Us Today
            </h2>
          </div>

          {/* Right - Form — Dentora email subscribe style */}
          <div>
            <p className="nl-slide-up text-charcoal/60 text-base leading-relaxed mb-8 max-w-md">
              Join our newsletter to receive the latest collection drops, exclusive offers, and style insights curated for the modern gentleman.
            </p>
            <div className="nl-slide-up flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full pl-11 pr-5 py-3.5 rounded-full border border-charcoal/15 bg-transparent text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-camel transition-colors"
                />
              </div>
              <button className="bg-camel text-white rounded-full px-7 py-3.5 text-sm font-medium hover:bg-camel-dark transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="nl-slide-up text-[10px] text-charcoal/30 mt-3 tracking-wide">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
