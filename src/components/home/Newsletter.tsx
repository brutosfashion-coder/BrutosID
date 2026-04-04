'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading blur reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Form slide up
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      {/* Divider top */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Heading */}
          <div ref={headingRef}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-charcoal font-medium leading-[1.1]">
              Your Style Matters
              <br />
              <span className="text-camel">Connect</span> With
              <br />
              Us Today
            </h2>
          </div>

          {/* RIGHT: Description + Form */}
          <div ref={formRef}>
            <p className="font-body text-charcoal/60 text-base leading-relaxed mb-8 max-w-md">
              Stay informed with the latest collections, style tips, and exclusive offers delivered straight to your inbox.
              Join our community of modern gentlemen.
            </p>

            <form onSubmit={handleSubmit} className="flex items-center gap-0">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-warm-white border border-mist rounded-l-full font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-camel transition-colors"
                />
              </div>
              <button
                type="submit"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-4 bg-camel text-white rounded-r-full font-body text-sm font-medium hover:bg-camel/90 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
