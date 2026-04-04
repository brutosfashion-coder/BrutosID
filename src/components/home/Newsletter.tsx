"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-camel/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-mist/5 rounded-full blur-[120px]" />

      <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center relative">
        <ScrollReveal>
          <span className="section-label text-camel">Stay Connected</span>
        </ScrollReveal>

        <h2 className="heading-lg text-white mt-4 mb-6">
          <AnimatedText text="Join the Inner Circle" delay={0.1} />
        </h2>

        <ScrollReveal delay={0.3}>
          <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
            Exclusive access to new drops, style guides, and member-only offers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/10 rounded-full text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-camel/50 transition-colors"
                required
              />
              <button type="submit" className="btn-primary !py-4 group whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-camel"
            >
              <div className="w-10 h-10 bg-camel/20 rounded-full flex items-center justify-center">
                <Check size={18} />
              </div>
              <span className="text-white text-sm">Welcome to the inner circle.</span>
            </motion.div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="text-white/20 text-xs mt-6">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
