'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const columns: Record<string, string[]> = {
  Company: ['Home', 'Collection', 'About Us', 'Contact'],
  Resources: ['Style Guide', 'Size Chart', 'FAQ', 'Journal'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Returns', 'Shipping'],
};

const socials = [
  {
    name: 'Instagram',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    name: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="pt-24 pb-8 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-sand/60 mb-16" />

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-charcoal/30 text-[13px] hover:text-camel transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal mb-5">
              Contact
            </h4>
            <a
              href="mailto:hello@brutos.id"
              className="text-charcoal/50 text-[13px] hover:text-camel transition-colors duration-300 block mb-5"
            >
              hello@brutos.id
            </a>

            <p className="text-charcoal/25 text-[10px] tracking-[0.1em] uppercase mb-3">
              Follow Us
            </p>
            <div className="flex gap-2">
              {socials.map(({ name, path }) => (
                <a
                  key={name}
                  href="#"
                  className="w-8 h-8 rounded-full border border-sand/60 flex items-center justify-center text-charcoal/25 hover:bg-camel hover:border-camel hover:text-white transition-all duration-300"
                  aria-label={name}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant watermark */}
        <div ref={watermarkRef} className="overflow-hidden mb-8">
          <p className="font-heading text-[90px] sm:text-[140px] md:text-[180px] lg:text-[260px] text-charcoal/[0.03] font-bold leading-none text-center select-none tracking-tight">
            BRUTOS
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-sand/30">
          <p className="text-charcoal/20 text-[11px] tracking-wide">
            &copy; 2026 Brutos ID. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-charcoal/20 text-[11px] hover:text-camel transition-colors">
              Terms
            </a>
            <a href="#" className="text-charcoal/20 text-[11px] hover:text-camel transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
