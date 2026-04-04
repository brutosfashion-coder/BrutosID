"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
  className?: string;
}

export default function Counter({ value, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericMatch = value.match(/[\d,.]+/);
    if (!numericMatch) { setDisplay(value); return; }

    const target = parseFloat(numericMatch[0].replace(/,/g, ""));
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const hasDecimal = numericMatch[0].includes(".");
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;

      if (hasDecimal) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else if (target >= 1000) {
        setDisplay(`${prefix}${Math.round(current).toLocaleString()}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
