'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const footerLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-dark-brown text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 px-6 lg:px-10 py-14">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-3xl mb-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sand text-sm mb-8">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded bg-white/10 border border-sand/30 text-cream placeholder:text-sand/60 text-sm focus:outline-none focus:border-camel transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Top Row */}
      <div className="px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-brutos.png"
              alt="Brutos ID"
              width={32}
              height={32}
              className="w-7 h-7 brightness-0 invert"
            />
            <span className="font-heading text-lg tracking-wider text-cream font-semibold">
              BRUTOS ID
            </span>
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sand text-sm hover:text-cream transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-sand hover:text-cream transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-sand hover:text-cream transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-sand hover:text-cream transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 lg:px-10 py-5">
        <p className="text-center text-sand/60 text-xs tracking-wide">
          © {new Date().getFullYear()} BRUTOS ID. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
