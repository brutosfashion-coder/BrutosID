'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-brown px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream leading-snug mb-10"
        >
          &ldquo;Dress well, live well,
          <br className="hidden sm:block" />
          be a gentleman.&rdquo;
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
