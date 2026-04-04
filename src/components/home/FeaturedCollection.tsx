'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Camel Overcoat',
    price: 'Rp 4.850.000',
    badge: 'Best Seller',
    badgeColor: 'bg-[#C8B89A] text-white',
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Charcoal Wool Suit',
    price: 'Rp 7.250.000',
    badge: 'New',
    badgeColor: 'bg-[#363636] text-white',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Linen Relaxed Shirt',
    price: 'Rp 1.650.000',
    badge: 'Limited',
    badgeColor: 'bg-[#C8B89A]/20 text-[#363636]',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Merino Turtleneck',
    price: 'Rp 2.150.000',
    badge: 'Best Seller',
    badgeColor: 'bg-[#C8B89A] text-white',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop&q=80',
  },
];

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fc-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.fc-blur-reveal',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.fc-slide-up',
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
        '.fc-stats-card',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.fc-stats-card',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <span className="fc-slide-up inline-block border border-[#363636]/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[#363636]/70 mb-6">
              Collection
            </span>
            <h2 className="fc-blur-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-[#363636] leading-[1.1]">
              This Season&apos;s<br />Finest
            </h2>
          </div>
          <a
            href="#"
            className="fc-slide-up hidden md:inline-flex items-center gap-2 border border-[#363636]/20 rounded-full px-5 py-2.5 text-sm text-[#363636] hover:bg-[#363636] hover:text-white transition-all duration-300 mt-2"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Product Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <div key={i} className="fc-slide-up group cursor-pointer">
                <div className="relative overflow-hidden rounded-[16px] mb-4 aspect-[4/5] bg-[#D6CEBE]/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${product.badgeColor} text-[10px] tracking-wider uppercase font-medium px-3 py-1 rounded-full`}>
                      {product.badge}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-lg text-[#363636] mb-1">{product.name}</h3>
                <p className="text-sm text-[#363636]/60 font-body">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Floating Stats Card */}
          <div className="fc-stats-card absolute -bottom-6 right-4 md:right-8 bg-white border border-[#D6CEBE]/50 rounded-[16px] px-5 py-4 shadow-lg backdrop-blur-sm z-10">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-heading font-semibold text-[#363636]">2,847</p>
                <p className="text-xs text-[#363636]/50 tracking-wide">Pieces Sold</p>
              </div>
              <div className="w-px h-10 bg-[#D6CEBE]/50" />
              <div>
                <p className="text-2xl font-heading font-semibold text-[#C8B89A]">98%</p>
                <p className="text-xs text-[#363636]/50 tracking-wide">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View All */}
        <div className="md:hidden flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#363636]/20 rounded-full px-5 py-2.5 text-sm text-[#363636] hover:bg-[#363636] hover:text-white transition-all duration-300"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
