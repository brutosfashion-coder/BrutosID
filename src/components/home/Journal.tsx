'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    gradient: 'from-[#D6CEBE] to-[#C8B89A]',
    category: 'Style Guide',
    author: 'Arief R.',
    readTime: '5 min read',
    date: 'Mar 15, 2026',
    title: 'The Art of Building a Capsule Wardrobe for Every Season',
    initial: 'A',
  },
  {
    gradient: 'from-[#363636] to-[#4a4a4a]',
    category: 'Fabric',
    author: 'Daniel H.',
    readTime: '4 min read',
    date: 'Mar 08, 2026',
    title: 'Understanding Premium Fabrics: A Gentleman\'s Essential Knowledge',
    initial: 'D',
  },
  {
    gradient: 'from-[#C8B89A] to-[#D6CEBE]',
    category: 'Trends',
    author: 'Kevin S.',
    readTime: '6 min read',
    date: 'Feb 28, 2026',
    title: 'Quiet Luxury: Why Less Is Always More in Men\'s Fashion',
    initial: 'K',
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
          opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.jn-blur-reveal', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.jn-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        '.jn-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.jn-cards-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="px-3 md:px-4 pb-3 md:pb-4">
      <div className="bg-warm-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Header - Dentora style: badge left, heading right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
          <span className="jn-slide-up pill-badge self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-camel" />
            Our Insights
          </span>
          <h2
            className="jn-blur-reveal text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] md:text-right max-w-xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Gentleman&apos;s Guide to Timeless Style.
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="jn-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="jn-card group cursor-pointer">
              {/* Image Placeholder */}
              <div className={`relative overflow-hidden rounded-[16px] mb-5 aspect-[4/3] bg-gradient-to-br ${post.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]`}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <line x1="8" y1="7" x2="16" y2="7" />
                  <line x1="8" y1="11" x2="13" y2="11" />
                </svg>
                <div className="absolute top-3 left-3">
                  <span className="bg-charcoal/70 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta — Dentora style with author avatar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-mist flex items-center justify-center text-[9px] font-medium text-charcoal">
                  {post.initial}
                </div>
                <span className="text-xs text-charcoal/60">{post.author}</span>
                <span className="text-charcoal/20">&middot;</span>
                <span className="text-xs text-charcoal/40">{post.readTime}</span>
                <span className="text-charcoal/20">&middot;</span>
                <span className="text-xs text-charcoal/40">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl text-charcoal leading-snug mb-3 group-hover:text-camel transition-colors duration-300">
                {post.title}
              </h3>

              {/* Learn More */}
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-camel hover:text-camel-dark transition-colors group/link">
                <span className="text-base">↪</span>
                Learn More
              </a>
            </article>
          ))}
        </div>

        {/* Read More Blog CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="jn-slide-up group inline-flex items-center gap-2 bg-camel text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-camel-dark transition-colors duration-300"
          >
            Read More Blog
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
