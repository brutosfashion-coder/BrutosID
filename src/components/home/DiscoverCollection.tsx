'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DiscoverCollection() {
  return (
    <section className="py-20 md:py-28 bg-warm-bg px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-5">
            Discover the
            <br />
            Collection
          </h2>
          <p className="text-stone text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Sophisticated pieces crafted for the modern gentleman. Each item in our collection reflects our commitment to quality and timeless style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-block px-7 py-3.5 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="inline-block px-7 py-3.5 bg-dark-brown text-white text-xs tracking-[0.15em] uppercase rounded border border-dark-brown hover:bg-dark-brown/90 transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
          </div>
        </motion.div>

        {/* Right: Two images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80"
                alt="Man in blazer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className="mt-3 text-xs tracking-[0.1em] uppercase text-stone text-center font-medium">
              Shop Collection
            </p>
          </div>
          <div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                alt="Flat lay clothing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className="mt-3 text-xs tracking-[0.1em] uppercase text-stone text-center font-medium">
              About Us
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
