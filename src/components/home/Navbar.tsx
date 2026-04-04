'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Collection', href: '#collection', active: false },
  { label: 'About', href: '#about', active: false },
  { label: 'Journal', href: '#journal', active: false },
  { label: 'Contact', href: '#contact', active: false },
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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
          {/* Logo */}
          <a href="#" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo-brutos.png"
              alt="Brutos ID"
              width={120}
              height={36}
              className={`h-9 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </a>

          {/* Center pill nav - desktop */}
          <div className="hidden lg:flex items-center">
            <div
              className={`flex items-center gap-1 rounded-full border px-1.5 py-1.5 transition-all duration-500 ${
                scrolled
                  ? 'border-mist bg-warm-white'
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
                        : 'bg-white text-charcoal'
                      : scrolled
                        ? 'text-charcoal hover:bg-cream'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Shop Now + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#collection"
              className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                scrolled
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-charcoal'
              }`}
            >
              Shop Now
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-10 p-2 rounded-full transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-8">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-2xl font-heading font-medium border-b border-mist/50 transition-colors ${
                  item.active ? 'text-camel' : 'text-charcoal hover:text-camel'
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#collection"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white rounded-full text-sm font-medium"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
