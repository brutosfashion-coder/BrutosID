"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: "url('/images/hero-model.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/80 via-charcoal/60 to-charcoal-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-charcoal-deep/30" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left - Text */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="section-label text-camel-light mb-6"
            >
              ★ Premium Menswear Since 2024
            </motion.div>

            <h1 className="heading-xl text-white mb-6">
              <AnimatedText text="Dress the Man You've Become" delay={0.5} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-md"
            >
              Premium menswear for the quietly confident. Crafted with intention, worn with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/collection" className="btn-primary group">
                Explore Collection
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {["New Arrival", "Best Seller", "Limited Edition"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase border border-white/20 text-white/70 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <div className="glass-card p-6 max-w-sm ml-auto">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-camel/20 to-mist/20 mb-4 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/featured-product.jpg')" }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium text-sm">Camel Wool Blazer</h3>
                  <p className="text-white/50 text-xs mt-0.5">Premium Collection</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-camel text-camel" />
                  <span className="text-white text-sm font-medium">4.9</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-4"
      >
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
          <ChevronLeft size={16} />
        </button>
        <span className="text-white/60 text-sm font-mono">
          <span className="text-white font-semibold">01</span> / 08
        </span>
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
          <ChevronRight size={16} />
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 right-6 lg:right-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
