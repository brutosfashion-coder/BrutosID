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
      <div className="max-w-[1100px] mx-auto px-5 h-[68px] lg:h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-head.png"
            alt="Brutos ID — Brand Fashion Premium"
            width={24}
            height={32}
            className="w-[22px] h-[29px] lg:w-[24px] lg:h-[32px] brightness-0 invert opacity-85"
          />
          <span className="font-serif text-[16px] font-bold text-[#E8DFD4] tracking-[0.02em]">
            BRUTOS ID
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-5">
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

        <div className="sm:hidden flex items-center gap-3">
          <a href="https://instagram.com/brutos.id" aria-label="Instagram Brutos ID" className="text-[#C5B9A8]">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="https://facebook.com/brutosid" aria-label="Facebook Brutos ID" className="text-[#C5B9A8]">
            <FaFacebookF className="w-3.5 h-3.5" />
          </a>
          <a href="https://twitter.com/brutosid" aria-label="Twitter Brutos ID" className="text-[#C5B9A8]">
            <FaTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
