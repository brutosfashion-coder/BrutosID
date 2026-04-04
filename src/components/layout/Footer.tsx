"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Careers", href: "/careers" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/collection" },
      { label: "New Arrivals", href: "/collection?sort=newest" },
      { label: "Best Sellers", href: "/collection?sort=popular" },
      { label: "Sale", href: "/collection?sale=true" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Return Policy", href: "/returns" },
      { label: "Shipping Info", href: "/shipping" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@brutos.id", href: "mailto:hello@brutos.id" },
      { label: "WhatsApp", href: "https://wa.me/6281234567890" },
      { label: "Instagram", href: "https://instagram.com/brutosid" },
      { label: "Jakarta, Indonesia", href: "#" },
    ],
  },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <footer ref={ref} className="bg-charcoal-deep pt-20 pb-8 relative overflow-hidden">
      {/* Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none"
      >
        <span className="font-serif text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold text-white/[0.02] leading-none tracking-wider">
          BRUTOS
        </span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        {/* Top - Logo */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-serif text-3xl font-bold text-white tracking-wider">
              BRUTOS<span className="text-camel ml-1 text-xl">ID</span>
            </span>
            <p className="text-white/30 text-sm mt-3 max-w-xs">
              Premium menswear for the quietly confident. Crafted with intention, worn with purpose.
            </p>
          </div>
        </ScrollReveal>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {columns.map((col, i) => (
            <ScrollReveal key={col.title} delay={i * 0.1}>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-camel transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        {/* Social + Copyright */}
        <ScrollReveal>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">
              © 2026 Brutos ID. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              {["Instagram", "TikTok", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-camel transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
