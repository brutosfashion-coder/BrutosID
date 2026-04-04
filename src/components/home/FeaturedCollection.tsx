'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Camel Overcoat',
    price: 'Rp 4.850.000',
    badge: 'Best Seller',
    badgeColor: 'bg-[#C8B89A] text-white',
    gradient: 'from-[#D6CEBE] to-[#C8B89A]',
  },
  {
    name: 'Charcoal Wool Suit',
    price: 'Rp 7.250.000',
    badge: 'New',
    badgeColor: 'bg-[#363636] text-white',
    gradient: 'from-[#363636] to-[#4a4a4a]',
  },
  {
    name: 'Linen Relaxed Shirt',
    price: 'Rp 1.650.000',
    badge: 'Limited',
    badgeColor: 'bg-[#C8B89A]/20 text-[#363636]',
    gradient: 'from-[#C8B89A] to-[#D6CEBE]',
  },
  {
    name: 'Merino Turtleneck',
    price: 'Rp 2.150.000',
    badge: 'Best Seller',
    badgeColor: 'bg-[#C8B89A] text-white',
    gradient: 'from-[#4a4a4a] to-[#363636]',
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 pb-6">
      <div className="bg-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
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
        <div className="pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <div key={i} className="fc-slide-up group cursor-pointer">
                <div className={`relative overflow-hidden rounded-[16px] mb-4 aspect-[4/5] bg-gradient-to-br ${product.gradient} flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.03]`}>
                  {/* Hanger icon placeholder */}
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10">
                    <path d="M12 2a3 3 0 0 0-3 3c0 1.1.6 2 1.5 2.5L3 14h18l-7.5-6.5A3 3 0 0 0 15 5a3 3 0 0 0-3-3z" />
                    <path d="M3 14v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
                  </svg>
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
