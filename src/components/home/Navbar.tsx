'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-mist/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 relative z-10">
            <Image
              src="/logo-brutos.png"
              alt="Brutos ID"
              width={110}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[13px] font-body tracking-[0.08em] uppercase transition-colors duration-300 ${
                  item.active
                    ? scrolled
                      ? 'text-charcoal font-semibold'
                      : 'text-white font-semibold'
                    : scrolled
                      ? 'text-charcoal/50 hover:text-charcoal'
                      : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="#collection"
              className={`hidden md:inline-flex px-6 py-2.5 rounded-full text-[13px] font-body font-medium tracking-wide border transition-all duration-300 ${
                scrolled
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-charcoal'
              }`}
            >
              Shop Now
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 relative z-10 ${
                scrolled || mobileOpen ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-20 px-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-lg font-heading border-b border-mist/30 transition-colors ${
                  item.active ? 'text-camel' : 'text-charcoal hover:text-camel'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#collection"
              onClick={() => setMobileOpen(false)}
              className="mt-8 text-center px-6 py-3 bg-charcoal text-white rounded-full text-sm font-body font-medium"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
