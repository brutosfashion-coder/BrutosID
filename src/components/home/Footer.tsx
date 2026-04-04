'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Company: ['Home', 'Collection', 'About', 'Contact'],
  Resources: ['Style Guide', 'Size Chart', 'FAQ', 'Blog'],
  Legal: ['Privacy Policy', 'Terms & Conditions', 'Returns', 'Shipping'],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Links fade in
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: linksRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Watermark scale in
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: watermarkRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );

      // Bottom bar
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: bottomRef.current, start: 'top 95%', toggleActions: 'play none none reverse' },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="pt-20 md:pt-28 pb-8">
      {/* Divider top */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Links grid */}
        <div
          ref={linksRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16"
        >
          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-charcoal font-semibold text-sm uppercase tracking-wider mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-charcoal/60 text-sm hover:text-camel transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / Social column */}
          <div>
            <h4 className="font-body text-charcoal font-semibold text-sm uppercase tracking-wider mb-5">
              We&apos;d Love to Help
            </h4>
            <a
              href="mailto:hello@brutos.id"
              className="font-heading text-charcoal text-xl md:text-2xl font-medium hover:text-camel transition-colors duration-300 block mb-6"
            >
              hello@brutos.id
            </a>
            <p className="font-body text-charcoal/50 text-sm mb-3">Follow Us</p>
            <div className="flex items-center gap-2">
              {[
                { label: 'Instagram', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: 'X', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: 'Facebook', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { label: 'YouTube', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/60 hover:bg-camel hover:border-camel hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant watermark */}
        <div ref={watermarkRef} className="relative overflow-hidden mb-8">
          <p
            className="font-heading text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] text-charcoal/[0.04] font-semibold leading-none text-center select-none whitespace-nowrap"
          >
            Brutos
          </p>
        </div>

        {/* Bottom bar */}
        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-mist/50"
        >
          <p className="font-body text-charcoal/40 text-sm">
            &copy; 2026 Brutos ID. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-charcoal/40 text-sm hover:text-camel transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="font-body text-charcoal/40 text-sm hover:text-camel transition-colors">
              Privacy &amp; Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
