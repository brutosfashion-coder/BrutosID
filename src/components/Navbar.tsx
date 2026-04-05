"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const NAV = [
  { href: "/", label: "Home", active: true },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EDE6DD]/95 backdrop-blur-sm border-b border-[#3B2F2F]/5">
      <nav className="max-w-[1100px] mx-auto px-5 h-[54px] lg:h-[58px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-head.png" alt="Brutos ID" width={36} height={36} className="w-8 h-8 lg:w-9 lg:h-9" />
          <span className="font-serif text-[17px] lg:text-[19px] font-bold text-[#3B2F2F] tracking-[0.02em]">BRUTOS ID</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                n.active
                  ? "text-[13.5px] text-[#3B2F2F] underline underline-offset-[5px] decoration-[1.5px]"
                  : "text-[13.5px] text-[#8C7E74] hover:text-[#3B2F2F] transition-colors"
              }
            >
              {n.label}
            </Link>
          ))}
        </div>

        {/* Icons in pill border */}
        <div className="hidden md:flex items-center gap-3 border border-[#3B2F2F]/20 rounded-full px-3.5 py-[5px]">
          <FiSearch className="w-4 h-4 text-[#3B2F2F]" strokeWidth={1.8} />
          <FiUser className="w-4 h-4 text-[#3B2F2F]" strokeWidth={1.8} />
          <FiShoppingCart className="w-4 h-4 text-[#3B2F2F]" strokeWidth={1.8} />
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#EDE6DD] border-t border-[#3B2F2F]/10 px-5 py-4 space-y-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-[15px] text-[#3B2F2F]">
              {n.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-[#3B2F2F]/10">
            <FiSearch className="w-5 h-5" />
            <FiUser className="w-5 h-5" />
            <FiShoppingCart className="w-5 h-5" />
          </div>
        </div>
      )}
    </header>
  );
}
