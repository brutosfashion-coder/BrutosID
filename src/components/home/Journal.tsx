'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    image: '/images/journal/post-1.svg',
    category: 'Style Guide',
    date: 'Mar 15, 2026',
    title: 'The Art of Building a Capsule Wardrobe for Every Season',
  },
  {
    image: '/images/journal/post-2.svg',
    category: 'Craftsmanship',
    date: 'Mar 10, 2026',
    title: 'Behind the Seams: How Our Blazers Are Handcrafted in Italy',
  },
  {
    image: '/images/journal/post-3.svg',
    category: 'Lifestyle',
    date: 'Mar 05, 2026',
    title: 'Quiet Luxury: Why Understated Style Speaks the Loudest',
  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journal-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journal-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-mist/40 mb-16" />

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-charcoal/50 mb-4 block">
              <span className="w-6 h-px bg-camel inline-block" />
              Our Insights
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-medium leading-[1.05]">
              The Gentleman&apos;s Journal
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-body text-charcoal/50 hover:text-camel transition-colors"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="journal-card group cursor-pointer">
              {/* Image — properly contained */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-body text-charcoal">
                    {post.category}
                  </span>
                </div>
              </div>

              <p className="font-body text-charcoal/35 text-[11px] tracking-wide mb-2">
                {post.date}
              </p>
              <h3 className="font-heading text-xl text-charcoal font-medium leading-snug group-hover:text-camel transition-colors duration-300">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
