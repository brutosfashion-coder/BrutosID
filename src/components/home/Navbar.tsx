'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-cream'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-brutos.png"
            alt="Brutos ID"
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9"
          />
          <span className="font-heading text-lg md:text-xl tracking-wider text-charcoal font-semibold">
            BRUTOS ID
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-charcoal font-medium'
                      : 'text-stone hover:text-charcoal'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-camel"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button aria-label="Search" className="text-stone hover:text-charcoal transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="text-stone hover:text-charcoal transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="text-stone hover:text-charcoal transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-cream border-t border-sand/50"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-base tracking-wide ${
                      isActive ? 'text-charcoal font-medium' : 'text-stone'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-5 pt-4 border-t border-sand/30">
                <button aria-label="Search" className="text-stone">
                  <Search size={20} strokeWidth={1.5} />
                </button>
                <button aria-label="Account" className="text-stone">
                  <User size={20} strokeWidth={1.5} />
                </button>
                <button aria-label="Cart" className="text-stone">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
