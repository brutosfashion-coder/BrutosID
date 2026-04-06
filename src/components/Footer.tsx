"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const LINKS = ["MANOR", "COLLECTION", "INSPIRATION", "ABOUT", "CONTACT"];

export default function Footer() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <footer className="sticky bottom-0 bg-[#2C1E16]">

      {/* ── DESKTOP ── */}
      <div className="hidden sm:flex max-w-[1100px] mx-auto px-5 h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-head.png"
            alt="Brutos ID — Brand Fashion Premium"
            width={24}
            height={32}
            className="w-[24px] h-[32px] brightness-0 invert opacity-85"
          />
          <span className="font-serif text-[16px] font-bold text-[#E8DFD4] tracking-[0.02em]">
            BRUTOS ID
          </span>
        </Link>

        <div className="flex items-center gap-5">
          {LINKS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={
                active === label
                  ? "text-[11.5px] text-[#F5F0EB] font-bold uppercase tracking-[0.08em] underline underline-offset-[5px] decoration-[1.5px] transition-all duration-300"
                  : "text-[11.5px] text-[#C5B9A8] font-bold uppercase tracking-[0.08em] hover:text-[#F5F0EB] transition-all duration-300"
              }
            >
              {label}
            </button>
          ))}
          <span className="text-[#F5F0EB]/20 text-[16px]">|</span>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/brutos.id" aria-label="Instagram Brutos ID" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/brutosid" aria-label="Facebook Brutos ID" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com/brutosid" aria-label="Twitter Brutos ID" className="text-[#C5B9A8] hover:text-[#F5F0EB] transition-colors">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="sm:hidden px-5 py-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image
            src="/logo-head.png"
            alt="Brutos ID"
            width={20}
            height={26}
            className="w-[16px] h-[22px] brightness-0 invert opacity-80"
          />
          <span className="font-serif text-[13px] font-bold text-[#E8DFD4] tracking-[0.04em]">
            BRUTOS ID
          </span>
        </div>

        {/* Gold separator */}
        <div className="flex justify-center mb-4">
          <div
            className="h-[1px] w-[40px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), transparent)" }}
          />
        </div>

        {/* Menu links */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {LINKS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={
                active === label
                  ? "text-[8.5px] text-[#F5F0EB] font-bold uppercase tracking-[0.08em] underline underline-offset-[4px] decoration-[1px] transition-all duration-300"
                  : "text-[8.5px] text-[#C5B9A8]/60 font-bold uppercase tracking-[0.08em] active:text-[#F5F0EB] transition-all duration-300"
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 mb-4">
          <a href="https://instagram.com/brutos.id" aria-label="Instagram" className="text-[#C5B9A8]/50 active:text-[#F5F0EB] transition-colors">
            <FaInstagram className="w-[13px] h-[13px]" />
          </a>
          <a href="https://facebook.com/brutosid" aria-label="Facebook" className="text-[#C5B9A8]/50 active:text-[#F5F0EB] transition-colors">
            <FaFacebookF className="w-[11px] h-[11px]" />
          </a>
          <a href="https://twitter.com/brutosid" aria-label="Twitter" className="text-[#C5B9A8]/50 active:text-[#F5F0EB] transition-colors">
            <FaTwitter className="w-[13px] h-[13px]" />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-center text-[#8C7E74]/35 text-[7.5px] uppercase tracking-[0.2em]">
          Elegance is Never Loud
        </p>
      </div>
    </footer>
  );
}
