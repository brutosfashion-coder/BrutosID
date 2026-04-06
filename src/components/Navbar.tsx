"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#EDE6DD] border-b border-[#3B2F2F]/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 4.6, duration: 1, ease }}
    >
      <nav className="mx-auto px-8 lg:px-12 xl:px-16 h-[68px] lg:h-[74px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-head.png"
            alt="Brutos ID"
            width={34}
            height={44}
            className="w-[30px] h-[40px] lg:w-[34px] lg:h-[44px]"
          />
          <span className="font-serif text-[20px] lg:text-[22px] font-bold text-[#3B2F2F] tracking-[0.03em]">
            BRUTOS ID
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4 border border-[#3B2F2F]/20 rounded-full px-5 py-2">
          <FiSearch className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
          <FiUser className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
          <FiShoppingCart className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
        </div>

        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#EDE6DD] border-t border-[#3B2F2F]/10 px-6 py-4">
          <div className="flex items-center gap-4 pt-2">
            <FiSearch className="w-5 h-5" />
            <FiUser className="w-5 h-5" />
            <FiShoppingCart className="w-5 h-5" />
          </div>
        </div>
      )}
    </motion.header>
  );
}
