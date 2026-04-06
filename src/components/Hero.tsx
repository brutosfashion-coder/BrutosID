"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

const appear = (delay: number) => ({
  initial: { opacity: 0, y: 70, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay: 4.5 + delay, duration: 1.6, ease: lux },
});

export default function Hero() {
  return (
    <section className="relative mt-[60px] sm:mt-[68px] lg:mt-[74px]">
      {/* ====== DESKTOP ====== */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        style={{ aspectRatio: "16/10", maxHeight: "48vh" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 4.2, duration: 3.5, ease: lux }}
        >
          <div className="absolute inset-0 hero-ken-burns" style={{ animationDelay: "7.7s" }}>
            <Image
              src="/hero.jpg"
              alt="Koleksi fashion premium Brutos ID — brand pakaian berkualitas"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "25% 15%" }}
              sizes="100vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 2 }}
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(59,47,47,0.12) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[44%] max-w-[500px] pr-[3%] xl:pr-[4%]">
            <motion.div
              className="h-[1px] mb-5"
              style={{
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ delay: 4.4, duration: 1.5, ease: lux }}
            />
            <motion.h1
              className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-4"
              {...appear(0)}
            >
              Elegance is Never Loud
            </motion.h1>
            <motion.p
              className="text-[#6B5E54] text-[15px] lg:text-[16px] leading-[1.7] mb-7 max-w-[400px]"
              {...appear(0.3)}
            >
              Pakaian premium dengan sentuhan modern — dirancang untuk mereka yang menghargai kualitas dan gaya berpakaian elegan.
            </motion.p>
            <motion.div {...appear(0.6)}>
              <Link
                href="/"
                className="btn-gold px-10 py-[13px] text-[13px]"
              >
                BELANJA SEKARANG
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ====== MOBILE — FULL VIEWPORT HERO ====== */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ height: "calc(100svh - 60px)" }}>
        {/* Background image — lighter Ken Burns via CSS */}
        <motion.div
          className="absolute inset-0 gpu-layer"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 4.2, duration: 2, ease: lux }}
        >
          <div
            className="absolute inset-0 gpu-layer"
            style={{ animation: "kenBurnsMobile 60s ease-in-out infinite alternate" }}
          >
            <Image
              src="/hero.jpg"
              alt="Koleksi fashion premium Brutos ID — gaya berkelas"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "30% 10%" }}
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 mobile-hero-gradient pointer-events-none" />

        {/* Content at bottom */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
          {/* Gold line */}
          <motion.div
            className="h-[1px] mb-4 gold-line-pulse gpu-layer"
            style={{
              background: "linear-gradient(90deg, #C9A96E, transparent)",
              width: "35px",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 35, opacity: 1 }}
            transition={{ delay: 4.6, duration: 0.8, ease: lux }}
          />

          {/* H1 — no blur filter for perf */}
          <motion.h1
            className="font-serif text-[30px] sm:text-[34px] font-bold italic text-[#F0EBE4] leading-[1.1] mb-2.5 gpu-layer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.7, duration: 1, ease: lux }}
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Elegance is
            <br />
            Never Loud
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[#E8DFD4]/70 text-[12.5px] sm:text-[13px] leading-[1.65] mb-6 max-w-[260px] gpu-layer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.0, duration: 0.8, ease: lux }}
          >
            Pakaian premium dengan sentuhan modern — dirancang untuk mereka yang menghargai kualitas dan penampilan.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="gpu-layer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.2, duration: 0.8, ease: lux }}
          >
            <Link href="/" className="btn-glass-gold-light text-[10.5px] sm:text-[11px] px-6 py-2.5">
              BELANJA SEKARANG
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <motion.div
            className="w-[1px] h-4 bg-[#F0EBE4]"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: 6.5,
            }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>

      {/* Desktop scroll indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 6, duration: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-7 bg-[#3B2F2F]"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 6.5,
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
