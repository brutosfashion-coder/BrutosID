"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./LoadingContext";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];
const exitEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const { onLoadComplete, onFullyLoaded } = useLoading();
  const fullyFiredRef = useRef(false);

  /* Ensure onFullyLoaded fires exactly once, even if onExitComplete fails */
  const fireFullyLoaded = useCallback(() => {
    if (!fullyFiredRef.current) {
      fullyFiredRef.current = true;
      onFullyLoaded();
    }
  }, [onFullyLoaded]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    /* At 4200ms: signal Hero/Navbar to start, begin exit animation */
    const t1 = setTimeout(() => {
      onLoadComplete();
      setShow(false);
      document.body.style.overflow = "";
    }, 4200);

    /* Backup: fire isFullyLoaded at 5500ms (4200 + 1300ms margin)
       in case AnimatePresence onExitComplete doesn't trigger */
    const t2 = setTimeout(fireFullyLoaded, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [onLoadComplete, fireFullyLoaded]);

  return (
    <AnimatePresence onExitComplete={fireFullyLoaded}>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center px-6"
          style={{ backgroundColor: "#EDE6DD" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: exitEase }}
        >
          {/* Ambient golden glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.5 }}
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(201,169,110,0.13) 0%, transparent 55%)",
            }}
          />

          <div className="flex flex-col items-center relative w-full max-w-[320px]">
            {/* Top decorative gold line */}
            <motion.div
              className="h-[1px] mb-8 sm:mb-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "45%", opacity: 1 }}
              transition={{ delay: 0.2, duration: 2, ease: lux }}
            />

            {/* Logo head with glow */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(25px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.2, ease: lux }}
            >
              <motion.div
                className="absolute -inset-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0.35] }}
                transition={{ delay: 0.6, duration: 3 }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 65%)",
                  filter: "blur(25px)",
                }}
              />
              <Image
                src="/logo-head.png"
                alt="Brutos ID"
                width={120}
                height={160}
                priority
                className="w-[70px] sm:w-[85px] md:w-[110px] h-auto relative z-10"
              />
            </motion.div>

            {/* BRUTOS — letter by letter with 3D rotateX */}
            <div className="flex mt-6 sm:mt-7 overflow-hidden">
              {"BRUTOS".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-serif text-[26px] sm:text-[30px] md:text-[40px] font-bold text-[#3B2F2F]"
                  style={{ letterSpacing: "0.16em", display: "inline-block" }}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.13,
                    duration: 1.1,
                    ease: lux,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ── ID ── with expanding lines + letter-spacing */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.3, ease: lux }}
            >
              <motion.div
                className="h-[1px] bg-[#3B2F2F]/40"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 1.8, duration: 1.3, ease: lux }}
              />
              <motion.span
                className="font-serif text-[14px] sm:text-[16px] md:text-[20px] text-[#3B2F2F]/60"
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ delay: 1.8, duration: 1.5, ease: lux }}
              >
                ID
              </motion.span>
              <motion.div
                className="h-[1px] bg-[#3B2F2F]/40"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 1.8, duration: 1.3, ease: lux }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-[#8C7E74] text-[9px] sm:text-[10px] md:text-[11px] uppercase mt-6 sm:mt-8 text-center"
              style={{ letterSpacing: "0.25em" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1.3, ease: lux }}
            >
              ELEGANCE IS NEVER LOUD
            </motion.p>

            {/* Gold loading bar */}
            <div className="mt-6 sm:mt-8 overflow-hidden w-[55%] sm:w-[160px]">
              <motion.div
                className="h-[1.5px] origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #C9A96E, #C9A96E, transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 2.9, duration: 1.3, ease: lux }}
              />
            </div>

            {/* Bottom decorative gold line */}
            <motion.div
              className="h-[1px] mt-8 sm:mt-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "45%", opacity: 1 }}
              transition={{ delay: 3.2, duration: 1.2, ease: lux }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
