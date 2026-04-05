"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function GentlemanLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke="#3B2F2F" strokeWidth="1.8" fill="none"/>
      {/* Head */}
      <ellipse cx="50" cy="30" rx="13" ry="15" fill="#3B2F2F"/>
      {/* Hair swept back */}
      <path d="M37 26C37 18 42 13 50 13C58 13 63 18 63 26C63 22 58 16 50 16C42 16 37 22 37 26Z" fill="#3B2F2F"/>
      {/* Beard */}
      <path d="M40 36C40 36 43 46 50 46C57 46 60 36 60 36" fill="#3B2F2F"/>
      {/* Suit body */}
      <path d="M30 58C30 50 38 46 50 46C62 46 70 50 70 58L72 90L28 90L30 58Z" fill="#3B2F2F"/>
      {/* Suit V-neck / lapels */}
      <path d="M50 46L41 62L50 57L59 62L50 46Z" fill="#F5F0EB" opacity="0.25"/>
      <path d="M46 46L50 55L54 46" stroke="#F5F0EB" strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <GentlemanLogo />
            <span className="font-serif text-[21px] font-bold text-brand-charcoal tracking-[0.1em]">
              BRUTOS ID
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-[15px] text-brand-charcoal hover:text-brand-gold transition-colors duration-300 ${
                  link.label === "Home" ? "underline underline-offset-4 decoration-brand-charcoal decoration-1" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button aria-label="Search" className="text-brand-charcoal hover:text-brand-gold transition-colors"><FiSearch size={18} strokeWidth={1.8}/></button>
            <button aria-label="Account" className="text-brand-charcoal hover:text-brand-gold transition-colors"><FiUser size={18} strokeWidth={1.8}/></button>
            <button aria-label="Cart" className="text-brand-charcoal hover:text-brand-gold transition-colors"><FiShoppingCart size={18} strokeWidth={1.8}/></button>
          </div>

          {/* Mobile Toggle */}
          <button aria-label="Menu" className="lg:hidden text-brand-charcoal" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${open ? "max-h-96 border-t border-stone-200/60" : "max-h-0"}`}>
        <div className="px-5 py-4 space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2.5 font-serif text-brand-charcoal hover:text-brand-gold transition-colors" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-3 border-t border-stone-100">
            <button aria-label="Search" className="text-brand-charcoal"><FiSearch size={20}/></button>
            <button aria-label="Account" className="text-brand-charcoal"><FiUser size={20}/></button>
            <button aria-label="Cart" className="text-brand-charcoal"><FiShoppingCart size={20}/></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
