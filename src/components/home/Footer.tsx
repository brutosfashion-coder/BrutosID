'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Company: ['Home', 'Collection', 'About', 'Contact'],
  Resources: ['Style Guide', 'Size Chart', 'FAQ', 'Blog'],
  Legal: ['Privacy Policy', 'Terms', 'Returns', 'Shipping'],
};

const socialIcons = [
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Instagram',
    path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01',
    extra: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z',
  },
  {
    name: 'X',
    path: 'M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.5-8L20 4h-2l-5.5 6.5L8 4H4z',
  },
  {
    name: 'YouTube',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z',
  },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ft-slide-up',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Giant watermark parallax
      gsap.fromTo(
        '.ft-watermark',
        { y: 50 },
        {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.ft-watermark',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="px-4 md:px-8 pb-4">
      <div className="bg-[#363636] rounded-[24px] px-6 md:px-12 pt-16 md:pt-20 pb-8 overflow-hidden relative">
        {/* Top Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="ft-slide-up">
              <h4 className="font-heading text-white text-base mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="ft-slide-up">
            <h4 className="font-heading text-white text-base mb-5">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hello@brutos.id"
                  className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                >
                  hello@brutos.id
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281234567890"
                  className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                >
                  +62 812 3456 7890
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
                  aria-label={icon.name}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icon.path} />
                    {icon.extra && <path d={icon.extra} />}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant Watermark */}
        <div className="ft-watermark relative flex justify-center mb-8 pointer-events-none select-none overflow-hidden">
          <span className="font-heading text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] font-bold text-white/[0.03] leading-none tracking-tight whitespace-nowrap">
            Brutos
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy;2026 All Rights Reserved</p>
          <a href="#" className="hover:text-white/60 transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Privacy &amp; Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
