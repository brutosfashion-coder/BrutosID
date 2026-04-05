'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks: Record<string, string[]> = {
  Company: ['Home', 'Collection', 'About', 'Contact'],
  Resources: ['Style Guide', 'Size Chart', 'FAQ', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Returns', 'Shipping'],
};

const socialIcons = [
  {
    label: 'Instagram',
    d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    label: 'X',
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Facebook',
    d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="pt-20 pb-8 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-mist/40 mb-16" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-charcoal font-semibold text-[11px] uppercase tracking-[0.12em] mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-charcoal/40 text-sm hover:text-camel transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-body text-charcoal font-semibold text-[11px] uppercase tracking-[0.12em] mb-4">
              Contact
            </h4>
            <a
              href="mailto:hello@brutos.id"
              className="font-body text-charcoal/60 text-sm hover:text-camel transition-colors duration-300 block mb-4"
            >
              hello@brutos.id
            </a>
            <p className="font-body text-charcoal/35 text-[11px] tracking-wide mb-2">
              Follow Us
            </p>
            <div className="flex gap-2">
              {socialIcons.map(({ label, d }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-full border border-mist/50 flex items-center justify-center text-charcoal/35 hover:bg-camel hover:border-camel hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant watermark */}
        <div ref={watermarkRef} className="overflow-hidden mb-6">
          <p className="font-heading text-[100px] sm:text-[160px] md:text-[200px] lg:text-[280px] text-charcoal/[0.03] font-bold leading-none text-center select-none whitespace-nowrap">
            Brutos
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-mist/30">
          <p className="font-body text-charcoal/30 text-xs">
            &copy; 2026 Brutos ID. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="font-body text-charcoal/30 text-xs hover:text-camel transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-body text-charcoal/30 text-xs hover:text-camel transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
