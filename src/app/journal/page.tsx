'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Art of Layering: A Gentleman\'s Guide',
    excerpt: 'Master the subtle art of layering with our expert tips for creating sophisticated, weather-appropriate outfits.',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
  },
  {
    title: 'Fabric Matters: Choosing Quality Materials',
    excerpt: 'Understanding the difference between fabrics can transform your wardrobe. Here\'s what to look for.',
    date: 'March 8, 2026',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80',
  },
  {
    title: 'Building a Capsule Wardrobe',
    excerpt: 'Less is more. Discover how to build a versatile wardrobe with timeless essential pieces.',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
  },
];

export default function JournalPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-cream px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Journal
          </h1>
          <p className="text-stone text-base md:text-lg max-w-lg">
            Insights, style guides, and stories from the world of refined menswear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-xs text-camel uppercase tracking-wider mb-2">{post.date}</p>
              <h2 className="font-heading text-lg md:text-xl text-charcoal mb-2 group-hover:text-camel transition-colors">
                {post.title}
              </h2>
              <p className="text-stone text-sm leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
