"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const LINKS = ["KOLEKSI", "TENTANG", "JURNAL", "KONTAK"];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Footer() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.footer
      className="bg-[#2C1E16]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease }}
    >
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
      <div className="sm:hidden">
        {/* Top: Logo + brand */}
        <div className="flex items-center justify-center gap-2 pt-6 pb-4">
          <Image
            src="/logo-head.png"
            alt="Brutos ID"
            width={20}
            height={26}
            className="w-[18px] h-[24px] brightness-0 invert opacity-80"
          />
          <span className="font-serif text-[14px] font-bold text-[#E8DFD4] tracking-[0.04em]">
            BRUTOS ID
          </span>
        </div>

        {/* Gold separator */}
        <div className="flex justify-center">
          <div
            className="h-[1px] w-[50px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)" }}
          />
        </div>

        {/* Menu links in a row */}
        <div className="flex items-center justify-center gap-4 py-4">
          {LINKS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={
                active === label
                  ? "text-[9px] text-[#F5F0EB] font-bold uppercase tracking-[0.08em] transition-all duration-300"
                  : "text-[9px] text-[#C5B9A8]/70 font-bold uppercase tracking-[0.08em] active:text-[#F5F0EB] transition-all duration-300"
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 pb-4">
          <a href="https://instagram.com/brutos.id" aria-label="Instagram Brutos ID" className="text-[#C5B9A8]/60 active:text-[#F5F0EB] transition-colors">
            <FaInstagram className="w-[14px] h-[14px]" />
          </a>
          <a href="https://facebook.com/brutosid" aria-label="Facebook Brutos ID" className="text-[#C5B9A8]/60 active:text-[#F5F0EB] transition-colors">
            <FaFacebookF className="w-[12px] h-[12px]" />
          </a>
          <a href="https://twitter.com/brutosid" aria-label="Twitter Brutos ID" className="text-[#C5B9A8]/60 active:text-[#F5F0EB] transition-colors">
            <FaTwitter className="w-[14px] h-[14px]" />
          </a>
        </div>

        {/* Copyright / tagline */}
        <div className="text-center pb-5">
          <p className="text-[#8C7E74]/40 text-[8px] uppercase tracking-[0.2em]">
            Elegance is Never Loud
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
