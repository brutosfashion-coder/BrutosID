'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Signature Shirts',
    description: 'Impeccably tailored shirts crafted from the finest fabrics for a refined look.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
  },
  {
    title: 'Refined Outerwear',
    description: 'Sophisticated outerwear pieces that combine warmth with timeless style.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
  },
  {
    title: 'Elegant Accessories',
    description: 'Curated accessories to complement and complete your distinguished ensemble.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-cream px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl md:text-4xl text-center text-charcoal mb-14"
        >
          Our Collections
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-5">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-2">
                {cat.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed mb-5">
                {cat.description}
              </p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
              >
                Shop Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
