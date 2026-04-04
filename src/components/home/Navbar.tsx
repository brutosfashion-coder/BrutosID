'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      tl.fromTo(
        linksRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/90 backdrop-blur-xl shadow-sm border-b border-mist/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div ref={logoRef} className="flex-shrink-0 opacity-0">
              <a href="#" className="flex items-center gap-3">
                <Image
                  src="/logo-brutos.png"
                  alt="BRUTOS ID"
                  width={140}
                  height={48}
                  className={`h-10 w-auto transition-all duration-300 ${
                    scrolled ? 'brightness-0' : 'brightness-0 invert'
                  }`}
                  priority
                />
              </a>
            </div>

            {/* Center Nav Links - pill shape container */}
            <div ref={linksRef} className="hidden lg:flex opacity-0">
              <div
                className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
                  scrolled
                    ? 'border-charcoal/10 bg-cream'
                    : 'border-white/20 bg-white/10 backdrop-blur-md'
                }`}
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-camel/20 ${
                      scrolled
                        ? 'text-charcoal hover:text-warm-black'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right CTA */}
            <div ref={ctaRef} className="hidden lg:flex items-center gap-4 opacity-0">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-camel text-white text-sm font-semibold rounded-full hover:bg-camel-dark transition-all duration-300 hover:shadow-lg hover:shadow-camel/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-warm-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[320px] bg-warm-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-charcoal text-lg font-medium rounded-xl hover:bg-cream transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href="#collection"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-camel text-white font-semibold rounded-full hover:bg-camel-dark transition-all"
              >
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
