"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  blur?: boolean;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 1.2,
  distance = 60,
  once = true,
  amount = 0.2,
  blur = false,
}: Props) {
  const dir = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...dir,
        ...(blur ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
