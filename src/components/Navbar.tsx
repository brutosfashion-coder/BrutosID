"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* Gentleman Silhouette SVG */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-brown"
            >
              <path
                d="M32 4C26 4 22 9 22 15C22 21 26 26 32 26C38 26 42 21 42 15C42 9 38 4 32 4Z"
                fill="currentColor"
              />
              <path
                d="M20 28C16 28 12 32 12 38L12 42L16 60L28 56L32 60L36 56L48 60L52 42L52 38C52 32 48 28 44 28L40 34L32 38L24 34L20 28Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-serif text-xl lg:text-2xl font-bold text-brand-brown tracking-wide">
              BRUTOS ID
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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
              <FiSearch size={20} />
            </button>
            <button
              aria-label="Account"
              className="text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              <FiUser size={20} />
            </button>
            <button
              aria-label="Cart"
              className="text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              <FiShoppingCart size={20} />
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
