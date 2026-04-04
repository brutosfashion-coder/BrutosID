'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nl-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.nl-blur-reveal',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.nl-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Heading */}
          <div>
            <h2 className="nl-blur-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-[#363636] leading-[1.1]">
              Your Style Matters<br />
              <span className="text-[#C8B89A]">Connect</span> With<br />
              Us Today
            </h2>
          </div>

          {/* Right - Form */}
          <div>
            <p className="nl-slide-up text-[#363636]/60 text-base leading-relaxed mb-8 max-w-md">
              Subscribe to our newsletter and be the first to discover new collections,
              exclusive offers, and style insights curated for the modern gentleman.
            </p>
            <div className="nl-slide-up flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full border border-[#363636]/15 bg-transparent text-sm text-[#363636] placeholder:text-[#363636]/30 focus:outline-none focus:border-[#C8B89A] transition-colors"
              />
              <button className="bg-[#C8B89A] text-white rounded-full px-7 py-3.5 text-sm font-medium hover:bg-[#b8a78a] transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="nl-slide-up text-[10px] text-[#363636]/30 mt-3 tracking-wide">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="nl-slide-up mt-16 border-t border-[#363636]/10" />
      </div>
    </section>
  );
}
