"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    slug: "art-of-quiet-luxury",
    title: "The Art of Quiet Luxury in Men's Fashion",
    excerpt: "Why the most powerful men in the room are the ones you don't notice — until you do.",
    category: "Style Guide",
    author: "Brutos Editorial",
    date: "March 28, 2026",
    image: "/images/journal/post-1.jpg",
  },
  {
    slug: "perfect-blazer-fit",
    title: "How to Find Your Perfect Blazer Fit",
    excerpt: "The difference between looking good and looking like the blazer owns you.",
    category: "Fit Guide",
    author: "Brutos Editorial",
    date: "March 20, 2026",
    image: "/images/journal/post-2.jpg",
  },
  {
    slug: "fabric-care-essentials",
    title: "Essential Fabric Care for Premium Garments",
    excerpt: "Invest in your wardrobe's longevity with these timeless care techniques.",
    category: "Care Tips",
    author: "Brutos Editorial",
    date: "March 12, 2026",
    image: "/images/journal/post-3.jpg",
  },
];

export default function Journal() {
  return (
    <section className="py-24 md:py-32 bg-warmwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <ScrollReveal>
              <span className="section-label">Journal</span>
            </ScrollReveal>
            <h2 className="heading-lg text-charcoal mt-4">
              <AnimatedText text="The Gentleman's Guide" delay={0.1} />
            </h2>
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-charcoal hover:text-camel transition-colors mt-4 md:mt-0 group"
            >
              All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-[9px] tracking-[0.15em] uppercase bg-camel/10 text-camel rounded-full mb-4">
                    {post.category}
                  </span>

                  <h3 className="font-serif text-xl italic text-charcoal group-hover:text-camel-dark transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <User size={11} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
