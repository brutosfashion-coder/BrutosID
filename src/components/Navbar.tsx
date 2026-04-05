"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream bg-textured border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[60px] lg:h-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-nav.png"
              alt="Brutos ID"
              width={99}
              height={44}
              className="h-[36px] w-auto object-contain"
              priority
            />
            <span className="font-serif text-[19px] font-bold text-brand-charcoal tracking-[0.06em]">
              BRUTOS ID
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[14px] text-brand-charcoal hover:text-brand-gold transition-colors duration-300 ${
                  l.active
                    ? "underline underline-offset-[5px] decoration-[1.5px] decoration-brand-charcoal font-medium"
                    : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons — grouped in rounded border box */}
          <div className="hidden lg:flex items-center gap-4 border border-stone-300/60 rounded-full px-4 py-2">
            <button aria-label="Search" className="text-brand-charcoal hover:text-brand-gold transition-colors cursor-pointer">
              <FiSearch size={17} strokeWidth={1.6} />
            </button>
            <button aria-label="Account" className="text-brand-charcoal hover:text-brand-gold transition-colors cursor-pointer">
              <FiUser size={17} strokeWidth={1.6} />
            </button>
            <button aria-label="Cart" className="text-brand-charcoal hover:text-brand-gold transition-colors cursor-pointer">
              <FiShoppingCart size={17} strokeWidth={1.6} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Menu"
            className="lg:hidden text-brand-charcoal cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-brand-cream bg-textured ${
          open ? "max-h-[400px] border-t border-stone-200/40" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-[15px] text-brand-charcoal hover:text-brand-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-3 mt-2 border-t border-stone-200/40">
            <FiSearch size={20} className="text-brand-charcoal" />
            <FiUser size={20} className="text-brand-charcoal" />
            <FiShoppingCart size={20} className="text-brand-charcoal" />
          </div>
        </div>
      </div>
    </nav>
  );
}
