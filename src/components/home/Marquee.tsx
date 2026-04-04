"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const items = [
  "Premium Fabric",
  "Tailored Fit",
  "Timeless Style",
  "Quiet Luxury",
  "Handcrafted Detail",
  "Old Money Aesthetic",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-flex gap-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((text, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-charcoal/80">
              {text}
            </span>
            <span className="text-camel text-2xl">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <ScrollReveal>
      <section className="py-12 md:py-16 bg-mist overflow-hidden">
        <MarqueeRow />
        <div className="mt-4">
          <MarqueeRow reverse />
        </div>
      </section>
    </ScrollReveal>
  );
}
