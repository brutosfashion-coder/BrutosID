'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 min-h-[calc(100vh-5rem)] flex">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left: Image */}
        <div className="relative h-[60vh] md:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Man in brown blazer"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center items-start px-8 md:px-14 lg:px-20 py-14 md:py-20 bg-cream-dark">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading italic text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight"
          >
            Elevate
            <br />
            Your Style
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-stone text-base md:text-lg max-w-md leading-relaxed"
          >
            Timeless attire for the modern man who values sophistication and class.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/shop"
              className="mt-8 inline-block px-8 py-3.5 bg-camel text-white text-sm tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
