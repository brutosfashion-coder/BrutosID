"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLoading } from "./LoadingContext";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { isLoaded } = useLoading();

  /* Desktop text appear helper — only animates after loading completes */
  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 70, filter: "blur(10px)" },
    animate: isLoaded
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 70, filter: "blur(10px)" },
    transition: { delay: 0.3 + delay, duration: 1.6, ease: lux },
  });

  return (
    <section className="relative mt-[60px] sm:mt-[68px] lg:mt-[74px]">
      {/* ====== DESKTOP ====== */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        style={{ aspectRatio: "16/10", maxHeight: "48vh" }}
      >
        {/* Hero image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 1.25, opacity: 0 }}
          transition={{ delay: 0, duration: 3.5, ease: lux }}
        >
          <div className="absolute inset-0 hero-ken-burns" style={{ animationDelay: isLoaded ? "3.5s" : "999s" }}>
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

        {/* Vignette overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 2 }}
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(59,47,47,0.12) 100%)",
          }}
        />

        {/* Desktop text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[44%] max-w-[500px] pr-[3%] xl:pr-[4%]">
            {/* Gold accent line */}
            <motion.div
              className="h-[1px] mb-5"
              style={{
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={isLoaded ? { width: 60, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: lux }}
            />
            {/* H1 */}
            <motion.h1
              className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-4"
              {...appear(0)}
            >
              Elegance is Never Loud
            </motion.h1>
            {/* Description */}
            <motion.p
              className="text-[#6B5E54] text-[15px] lg:text-[16px] leading-[1.7] mb-7 max-w-[400px]"
              {...appear(0.3)}
            >
              Pakaian premium dengan sentuhan modern — dirancang untuk mereka
              yang menghargai kualitas dan gaya berpakaian elegan.
            </motion.p>
            {/* CTA */}
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

      {/* ====== MOBILE — COMPACT VIEWPORT, FULL BODY VISIBLE ====== */}
      <div className="md:hidden relative w-full overflow-hidden" style={{ height: "calc(65svh - 60px)" }}>
        {/* Background image */}
        <motion.div
          className="absolute inset-0 gpu-layer"
          initial={{ scale: 1, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 0 }}
          transition={{ delay: 0, duration: 2, ease: lux }}
        >
          <Image
            src="/hero.jpg"
            alt="Koleksi fashion premium Brutos ID — gaya berkelas"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "20% 15%" }}
            sizes="100vw"
          />
        </motion.div>

        {/* Light overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(245,240,235,0.3) 0%, rgba(245,240,235,0.2) 40%, transparent 70%)",
          }}
        />

        {/* Text content — right side, vertically centered */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-[55%] sm:w-[50%] pr-5 sm:pr-8">
            <div
              className="rounded-sm px-5 py-6"
              style={{ backgroundColor: "rgba(245,240,235,0.45)" }}
            >
              {/* Gold accent line */}
              <motion.div
                className="h-[1px] mb-4 gpu-layer"
                style={{
                  background: "linear-gradient(90deg, #C9A96E, transparent)",
                }}
                initial={{ width: 0, opacity: 0 }}
                animate={isLoaded ? { width: 35, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: lux }}
              />

              {/* H1 */}
              <motion.h1
                className="font-serif text-[28px] sm:text-[34px] font-bold italic text-[#1A1412] leading-[1.1] mb-3 gpu-layer"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 1, ease: lux }}
              >
                Elegance is
                <br />
                Never Loud
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-[#3B3029] text-[12px] sm:text-[13px] leading-[1.65] mb-5 max-w-[220px] font-medium gpu-layer"
                initial={{ opacity: 0, y: 15 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.8, duration: 0.8, ease: lux }}
              >
                Pakaian premium dengan sentuhan modern — dirancang untuk mereka
                yang menghargai kualitas dan penampilan.
              </motion.p>

              {/* CTA button */}
              <motion.div
                className="gpu-layer"
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 1.0, duration: 0.8, ease: lux }}
              >
                <Link
                  href="/"
                  className="inline-block bg-[#B8956A] text-white text-[10px] sm:text-[11px] tracking-[0.2em] px-6 py-3 uppercase hover:bg-[#A07D55] transition-colors duration-300"
                >
                  BELANJA SEKARANG
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop scroll indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ delay: 1.8, duration: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-7 bg-[#3B2F2F]"
          animate={isLoaded ? { scaleY: [1, 0.5, 1] } : { scaleY: 1 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 2.3,
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
