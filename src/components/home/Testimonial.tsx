"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The quality speaks for itself. Every piece from Brutos feels like it was made specifically for me. This is what real luxury means — no logos, just excellence.",
    name: "Reza Mahendra",
    title: "Entrepreneur",
    rating: 5,
  },
  {
    quote: "I've tried many brands, but Brutos understands the modern gentleman. The fit, the fabric, the subtle details — everything is considered. My go-to for every occasion.",
    name: "Andi Pratama",
    title: "Creative Director",
    rating: 5,
  },
  {
    quote: "Finally, a brand that gets it. Quiet confidence, premium materials, and designs that let you stand out by fitting in perfectly. Brutos is a game changer.",
    name: "Budi Santoso",
    title: "Financial Analyst",
    rating: 5,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-mist relative overflow-hidden">
      {/* Large quote watermark */}
      <div className="absolute top-12 left-10 text-charcoal/5">
        <Quote size={200} strokeWidth={1} />
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center relative">
        <ScrollReveal>
          <span className="section-label">Testimonials</span>
        </ScrollReveal>

        <div className="mt-12 min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-camel text-camel" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-charcoal leading-snug mb-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-charcoal">{testimonials[current].name}</p>
                <p className="text-muted text-sm">{testimonials[current].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-muted font-mono">
            <span className="text-charcoal font-semibold">{String(current + 1).padStart(2, "0")}</span>
            {" / "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
