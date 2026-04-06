"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const NAV = ["MANOR", "COLLECTION", "INSPIRATION", "ABOUT", "CONTACT"];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("MANOR");

  /* Lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#EDE6DD]/95 backdrop-blur-md border-b border-[#3B2F2F]/8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4.6, duration: 1, ease }}
      >
        <nav className="mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 h-[60px] sm:h-[68px] lg:h-[74px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-head.png"
              alt="Brutos ID — Brand Fashion Premium"
              width={34}
              height={44}
              className="w-[26px] h-[34px] sm:w-[30px] sm:h-[40px] lg:w-[34px] lg:h-[44px]"
            />
            <span className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#3B2F2F] tracking-[0.03em]">
              BRUTOS ID
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV.map((label) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={
                  active === label
                    ? "text-[13px] lg:text-[13.5px] text-[#3B2F2F] font-bold uppercase tracking-[0.08em] underline underline-offset-[6px] decoration-[1.5px] transition-all duration-300"
                    : "text-[13px] lg:text-[13.5px] text-[#8C7E74] font-bold uppercase tracking-[0.08em] hover:text-[#3B2F2F] transition-all duration-300"
                }
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-4 border border-[#3B2F2F]/20 rounded-full px-5 py-2">
            <FiSearch className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
            <FiUser className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
            <FiShoppingCart className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
          </div>

          {/* Mobile: icons + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <FiShoppingCart className="w-[18px] h-[18px] text-[#3B2F2F]" strokeWidth={1.7} />
            <button
              className="relative w-8 h-8 flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <motion.span
                className="absolute w-5 h-[1.5px] bg-[#3B2F2F] rounded-full"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.4, ease }}
              />
              <motion.span
                className="absolute w-5 h-[1.5px] bg-[#3B2F2F] rounded-full"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-5 h-[1.5px] bg-[#3B2F2F] rounded-full"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.4, ease }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ═══ MOBILE FULLSCREEN MENU ═══ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-overlay md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Header area with close alignment */}
            <div className="h-[60px] sm:h-[68px]" />

            {/* Menu content */}
            <div className="flex-1 flex flex-col justify-center px-10">
              {/* Gold line top */}
              <motion.div
                className="mobile-menu-gold-line mb-10"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "60%", opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease }}
              />

              {/* Menu items */}
              {NAV.map((label, i) => (
                <motion.button
                  key={label}
                  onClick={() => { setActive(label); setOpen(false); }}
                  className="text-left mb-1"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
                >
                  <span
                    className={`font-serif text-[28px] sm:text-[32px] font-light tracking-[0.06em] transition-all duration-300 ${
                      active === label
                        ? "text-[#C9A96E]"
                        : "text-[#F0EBE4]/70"
                    }`}
                    style={{ lineHeight: "2.2" }}
                  >
                    {label}
                  </span>
                  {active === label && (
                    <motion.div
                      className="h-[1px] mt-0"
                      style={{ background: "linear-gradient(90deg, #C9A96E, transparent)", width: "40px" }}
                      layoutId="menuUnderline"
                    />
                  )}
                </motion.button>
              ))}

              {/* Gold line bottom */}
              <motion.div
                className="mobile-menu-gold-line mt-10"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "40%", opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease }}
              />

              {/* Icons row */}
              <motion.div
                className="flex items-center gap-5 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease }}
              >
                <FiSearch className="w-5 h-5 text-[#C5B9A8]" strokeWidth={1.5} />
                <FiUser className="w-5 h-5 text-[#C5B9A8]" strokeWidth={1.5} />
                <FiShoppingCart className="w-5 h-5 text-[#C5B9A8]" strokeWidth={1.5} />
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-[#8C7E74]/50 text-[9px] uppercase mt-6"
                style={{ letterSpacing: "0.25em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Elegance is Never Loud
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
