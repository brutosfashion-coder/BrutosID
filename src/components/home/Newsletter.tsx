'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 md:py-20 bg-dark-brown px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-2xl md:text-3xl text-cream mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-sand text-sm md:text-base mb-8 leading-relaxed">
          Stay updated with our latest collections, style tips, and exclusive offers.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 rounded bg-white/10 border border-sand/30 text-cream placeholder:text-sand/60 text-sm focus:outline-none focus:border-camel transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
