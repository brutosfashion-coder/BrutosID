"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-2xl font-bold text-white tracking-wider">
                BRUTOS<span className="text-camel ml-1 text-lg">ID</span>
              </span>
            </Link>

            {/* Center Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 text-[11px] font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-10 h-10 items-center justify-center text-white/80 hover:text-white transition-colors">
                <Search size={18} />
              </button>
              <Link
                href="/account"
                className="hidden md:flex w-10 h-10 items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <User size={18} />
              </Link>
              <Link
                href="/cart"
                className="relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <ShoppingBag size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-camel text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link href="/collection" className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 !text-[10px]">
                Shop Now
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-charcoal-deep z-50 p-8"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="mt-16 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm tracking-[0.15em] uppercase text-white/80 hover:text-camel transition-colors border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/collection" className="btn-primary w-full text-center">
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
