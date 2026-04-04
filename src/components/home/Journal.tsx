'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=350&fit=crop&q=80',
    category: 'Style Guide',
    author: 'Arief R.',
    readTime: '5 min read',
    date: 'Mar 15, 2026',
    title: 'The Art of Building a Capsule Wardrobe for Every Season',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop&q=80',
    category: 'Fabric',
    author: 'Daniel H.',
    readTime: '4 min read',
    date: 'Mar 08, 2026',
    title: 'Understanding Premium Fabrics: A Gentleman\'s Essential Knowledge',
  },
  {
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=350&fit=crop&q=80',
    category: 'Trends',
    author: 'Kevin S.',
    readTime: '6 min read',
    date: 'Feb 28, 2026',
    title: 'Quiet Luxury: Why Less Is Always More in Men\'s Fashion',
  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.jn-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.jn-blur-reveal',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.jn-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.jn-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.jn-cards-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
          <span className="jn-slide-up inline-block border border-[#363636]/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[#363636]/70 self-start">
            Journal
          </span>
          <h2 className="jn-blur-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-[#363636] leading-[1.1] md:text-right max-w-xl">
            The Gentleman&apos;s Guide to Timeless Style.
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="jn-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="jn-card group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-[16px] mb-5 aspect-[4/3] bg-[#D6CEBE]/30">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#363636]/80 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-[#D6CEBE] flex items-center justify-center text-[9px] font-medium text-[#363636]">
                  {post.author.charAt(0)}
                </div>
                <span className="text-xs text-[#363636]/60">{post.author}</span>
                <span className="text-[#363636]/20">·</span>
                <span className="text-xs text-[#363636]/40">{post.readTime}</span>
                <span className="text-[#363636]/20">·</span>
                <span className="text-xs text-[#363636]/40">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl text-[#363636] leading-snug mb-3 group-hover:text-[#C8B89A] transition-colors duration-300">
                {post.title}
              </h3>

              {/* Link */}
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-[#C8B89A] hover:text-[#b8a78a] transition-colors">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="jn-slide-up inline-flex items-center gap-2 bg-[#C8B89A] text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-[#b8a78a] transition-colors duration-300"
          >
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
