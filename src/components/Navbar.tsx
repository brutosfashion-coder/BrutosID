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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EDE6DD] border-b border-[#3B2F2F]/10">
      <nav className="max-w-[1240px] mx-auto px-6 h-[70px] lg:h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-head.png"
            alt="Brutos ID"
            width={44}
            height={44}
            className="w-[38px] h-[38px] lg:w-[44px] lg:h-[44px]"
          />
          <span className="font-serif text-[20px] lg:text-[22px] font-bold text-[#3B2F2F] tracking-[0.03em]">
            BRUTOS ID
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                n.active
                  ? "text-[14.5px] lg:text-[15px] text-[#3B2F2F] font-medium underline underline-offset-[6px] decoration-[1.5px]"
                  : "text-[14.5px] lg:text-[15px] text-[#8C7E74] hover:text-[#3B2F2F] transition-colors"
              }
            >
              {n.label}
            </Link>
          ))}
        </div>

        {/* Icons in pill border */}
        <div className="hidden md:flex items-center gap-4 border border-[#3B2F2F]/20 rounded-full px-4 py-[7px]">
          <FiSearch className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
          <FiUser className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
          <FiShoppingCart className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#EDE6DD] border-t border-[#3B2F2F]/10 px-6 py-4 space-y-3">
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
