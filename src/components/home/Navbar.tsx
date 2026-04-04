'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Collection', href: '#collection', active: false },
  { label: 'About', href: '#about', active: false },
  { label: 'Journal', href: '#journal', active: false },
  { label: 'Contact', href: '#contact', active: false },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(logoRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      tl.fromTo(linksRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5');
      tl.fromTo(ctaRef.current, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
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

            {/* Center Nav Links - Dentora pill container with active state */}
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
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      item.active
                        ? scrolled
                          ? 'bg-charcoal text-white'
                          : 'bg-white/20 text-white'
                        : scrolled
                          ? 'text-charcoal hover:text-warm-black hover:bg-camel/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right CTA - Dentora style with border */}
            <div ref={ctaRef} className="hidden lg:flex items-center gap-4 opacity-0">
              <a
                href="#collection"
                className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  scrolled
                    ? 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white'
                    : 'border-white/30 text-white hover:bg-white/15'
                }`}
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-warm-black/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[320px] bg-warm-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-lg font-medium rounded-xl transition-colors ${
                    item.active
                      ? 'bg-charcoal text-white'
                      : 'text-charcoal hover:bg-cream'
                  }`}
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
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
