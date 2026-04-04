'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CornerDownRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface JournalPost {
  image: string;
  category: string;
  author: string;
  authorInitial: string;
  readTime: string;
  date: string;
  title: string;
}

const posts: JournalPost[] = [
  {
    image: '/images/journal/post-1.svg',
    category: 'Style Guide',
    author: 'James Whitfield',
    authorInitial: 'J',
    readTime: '5 min read',
    date: 'Mar 15, 2026',
    title: 'The Art of Building a Capsule Wardrobe for Every Season',
  },
  {
    image: '/images/journal/post-2.svg',
    category: 'Craftsmanship',
    author: 'Oliver Crane',
    authorInitial: 'O',
    readTime: '4 min read',
    date: 'Mar 10, 2026',
    title: 'Behind the Seams: How Our Blazers Are Handcrafted in Italy',
  },
  {
    image: '/images/journal/post-3.svg',
    category: 'Lifestyle',
    author: 'Nathan Brooks',
    authorInitial: 'N',
    readTime: '6 min read',
    date: 'Mar 05, 2026',
    title: 'Quiet Luxury: Why Understated Style Speaks the Loudest',
  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Cards stagger
      const validCards = cardsRef.current.filter(Boolean);
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      {/* Divider top */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header: Badge left, Heading right */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          {/* Badge */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mist text-sm font-body text-charcoal/70">
              <span className="w-2 h-2 rounded-full bg-camel" />
              Our Insights
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-medium leading-[1.1] lg:text-right max-w-2xl">
            The Gentleman&apos;s Guide to
            <br />
            Timeless Style.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full font-body text-xs font-medium text-charcoal">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 mb-3">
                {/* Author avatar */}
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-camel/30 to-camel/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-camel/70 font-body text-xs font-medium">{post.authorInitial}</span>
                </div>
                <span className="font-body text-charcoal/70 text-sm">{post.author}</span>
                <span className="font-body text-charcoal/30 text-sm">•</span>
                <span className="font-body text-charcoal/50 text-sm">{post.readTime}</span>
                <span className="font-body text-charcoal/30 text-sm">•</span>
                <span className="font-body text-charcoal/50 text-sm">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl text-charcoal font-medium leading-snug mb-3 group-hover:text-camel transition-colors duration-300">
                {post.title}
              </h3>

              {/* Learn More link */}
              <span className="inline-flex items-center gap-2 font-body text-camel text-sm font-medium group-hover:gap-3 transition-all duration-300">
                <CornerDownRight className="w-4 h-4" />
                Learn More
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div ref={ctaRef} className="flex justify-center mt-14">
          <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-camel text-white rounded-full font-body text-sm font-medium hover:bg-camel/90 transition-colors group">
            Read More Blog
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
