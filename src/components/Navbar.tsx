"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function GentlemanLogo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular frame */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Head */}
      <ellipse cx="50" cy="32" rx="14" ry="16" fill="currentColor" />
      {/* Hair detail - swept back */}
      <path d="M36 28C36 20 42 14 50 14C58 14 64 20 64 28C64 24 58 18 50 18C42 18 36 24 36 28Z" fill="currentColor" />
      {/* Beard */}
      <path d="M40 38C40 38 42 48 50 48C58 48 60 38 60 38" fill="currentColor" />
      {/* Suit body */}
      <path d="M30 60C30 52 38 48 50 48C62 48 70 52 70 60L72 88L28 88L30 60Z" fill="currentColor" />
      {/* Suit lapels */}
      <path d="M50 48L42 62L50 58L58 62L50 48Z" fill="white" opacity="0.3" />
      {/* Suit collar */}
      <path d="M46 48L50 56L54 48" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <GentlemanLogo className="text-brand-brown" size={38} />
            <span className="font-serif text-xl lg:text-[22px] font-bold text-brand-brown tracking-[0.12em]">
              BRUTOS ID
            </span>
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link pb-1">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              <FiSearch size={19} />
            </button>
            <button
              aria-label="Account"
              className="text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              <FiUser size={19} />
            </button>
            <button
              aria-label="Cart"
              className="text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              <FiShoppingCart size={19} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-brand-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 bg-white space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-brand-charcoal hover:text-brand-gold font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-3 border-t border-gray-100">
            <button aria-label="Search" className="text-brand-charcoal hover:text-brand-gold transition-colors">
              <FiSearch size={20} />
            </button>
            <button aria-label="Account" className="text-brand-charcoal hover:text-brand-gold transition-colors">
              <FiUser size={20} />
            </button>
            <button aria-label="Cart" className="text-brand-charcoal hover:text-brand-gold transition-colors">
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
