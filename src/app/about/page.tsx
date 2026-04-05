'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-cream">
      {/* Hero Section */}
      <div className="px-6 lg:px-10 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-stone text-base md:text-lg leading-relaxed mb-6">
              Founded with a vision to redefine men&apos;s fashion, Brutos ID brings
              together timeless craftsmanship and modern sensibility. Every piece
              in our collection reflects our commitment to quality, sustainability,
              and the art of dressing well.
            </p>
            <p className="text-stone text-base md:text-lg leading-relaxed">
              We believe that clothing is more than fabric — it&apos;s an expression
              of character, confidence, and purpose. From carefully sourced
              materials to expert tailoring, each garment tells a story of
              dedication and refinement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
              alt="About Brutos ID"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-warm-bg py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-14">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Craftsmanship',
                desc: 'Every stitch, every seam — meticulously crafted to meet the highest standards of quality.',
              },
              {
                title: 'Sustainability',
                desc: 'We source responsibly, produce ethically, and design pieces that stand the test of time.',
              },
              {
                title: 'Timeless Style',
                desc: 'Fashion fades, but style endures. We create pieces that transcend trends and seasons.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <h3 className="font-heading text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
