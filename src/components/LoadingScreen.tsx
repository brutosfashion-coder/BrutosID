"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const exitEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2800);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "#EDE6DD" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: exitEase }}
        >
          <div className="flex flex-col items-center">
            {/* Logo head icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.3, ease }}
            >
              <Image
                src="/logo-head.png"
                alt="Brutos ID"
                width={100}
                height={132}
                priority
                className="w-[70px] md:w-[90px] h-auto"
              />
            </motion.div>

            {/* BRUTOS text */}
            <motion.h1
              className="font-serif text-[28px] md:text-[36px] font-bold text-[#3B2F2F] tracking-[0.12em] mt-5"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1, ease }}
            >
              BRUTOS
            </motion.h1>

            {/* ── ID ── with animated lines */}
            <motion.div
              className="flex items-center gap-3 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease }}
            >
              <motion.div
                className="h-[1px] bg-[#3B2F2F]/50"
                initial={{ width: 0 }}
                animate={{ width: 35 }}
                transition={{ delay: 1.1, duration: 0.7, ease }}
              />
              <span className="font-serif text-[15px] md:text-[18px] text-[#3B2F2F] tracking-[0.25em]">
                ID
              </span>
              <motion.div
                className="h-[1px] bg-[#3B2F2F]/50"
                initial={{ width: 0 }}
                animate={{ width: 35 }}
                transition={{ delay: 1.1, duration: 0.7, ease }}
              />
            </motion.div>

            {/* Gold loading bar */}
            <motion.div
              className="mt-10 h-[1.5px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #C9A96E, transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 100, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1.2, ease }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
