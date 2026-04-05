'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    image: '/images/journal/post-1.jpg',
    category: 'Style Guide',
    date: 'Mar 15, 2026',
    title: 'The Art of Building a Capsule Wardrobe',
  },
  {
    image: '/images/journal/post-2.jpg',
    category: 'Craftsmanship',
    date: 'Mar 10, 2026',
    title: 'Behind the Seams: Our Italian Workshop',
  },
  {
    image: '/images/journal/post-3.jpg',
    category: 'Lifestyle',
    date: 'Mar 05, 2026',
    title: 'Quiet Luxury: Understated Style That Speaks',
  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journal-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
    <section ref={sectionRef} id="journal" className="py-24 md:py-32 px-6 lg:px-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px bg-sand/60 mb-16" />

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-camel" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-stone">
                Our Insights
              </span>
            </div>
            <h2 className="font-heading text-[36px] md:text-[48px] text-charcoal font-medium leading-[1.05]">
              The Journal
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-[13px] text-charcoal/40 hover:text-camel transition-colors"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="journal-card group cursor-pointer">
              <div className="img-container rounded-2xl aspect-[4/3] mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] tracking-[0.1em] uppercase text-charcoal/70">
                    {post.category}
                  </span>
                </div>
              </div>

              <p className="text-charcoal/25 text-[11px] tracking-wider mb-2">
                {post.date}
              </p>
              <h3 className="font-heading text-[18px] md:text-[20px] text-charcoal font-medium leading-snug group-hover:text-camel transition-colors duration-300 mb-3">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-charcoal/30 group-hover:text-camel transition-colors">
                Read More <ArrowUpRight size={12} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
