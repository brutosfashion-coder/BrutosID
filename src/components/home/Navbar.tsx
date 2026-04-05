'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#', active: true },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onScroll = useCallback(() => setScrolled(window.scrollY > 60), []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-smooth)] ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-6 lg:px-14">
          {/* Logo */}
          <a href="#" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo-brutos.png"
              alt="Brutos ID"
              width={100}
              height={28}
              className={`h-7 w-auto transition-all duration-500 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/0 rounded-full px-1 py-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-full text-[12px] tracking-[0.1em] uppercase transition-all duration-300 ${
                  item.active
                    ? scrolled
                      ? 'bg-charcoal text-white'
                      : 'bg-white/15 text-white backdrop-blur-sm'
                    : scrolled
                      ? 'text-charcoal/40 hover:text-charcoal'
                      : 'text-white/50 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="#collection"
              className={`hidden md:inline-flex px-5 py-2 rounded-full text-[12px] tracking-[0.06em] uppercase border transition-all duration-300 ${
                scrolled
                  ? 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal'
                  : 'border-white/25 text-white/80 hover:bg-white hover:text-charcoal hover:border-white'
              }`}
            >
              Shop Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden relative z-10 p-2 ${
                scrolled || open ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-cream shadow-2xl pt-20 px-8">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-4 font-heading text-lg border-b border-sand/40 transition-colors ${
                  item.active ? 'text-camel' : 'text-charcoal/70 hover:text-camel'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#collection"
              onClick={() => setOpen(false)}
              className="mt-8 block text-center py-3 bg-charcoal text-white rounded-full text-[13px] tracking-wide"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
