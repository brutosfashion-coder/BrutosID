'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WhyCard {
  type: 'image' | 'accent' | 'stats';
  image?: string;
  title?: string;
}

const cards: WhyCard[] = [
  { type: 'image', image: '/images/why/customer.svg', title: 'Curated Selection' },
  { type: 'accent' },
  { type: 'image', image: '/images/why/lifestyle.svg', title: 'Timeless Quality' },
  { type: 'stats' },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 360;
    scrollContainerRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading blur reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Cards stagger
      const validCards = cardsRef.current.filter(Boolean);
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const barHeights = [45, 65, 85];
  const barLabels = ['Mar', 'Apr', 'May'];

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div ref={headingRef} className="flex items-end justify-between mb-12">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-medium leading-[1.1]">
            Why Choose Brutos?
          </h2>
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToDirection('left')}
              className="w-11 h-11 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:border-charcoal/40 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToDirection('right')}
              className="w-11 h-11 rounded-full bg-camel flex items-center justify-center text-white hover:bg-camel/90 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-12 lg:px-16 pb-4"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {/* Spacer for centering on large screens */}
        <div className="hidden xl:block flex-shrink-0" style={{ width: 'calc((100vw - 1200px) / 2)' }} />

        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[340px] h-[420px] rounded-2xl overflow-hidden snap-start"
          >
            {card.type === 'image' && (
              <div className="relative w-full h-full">
                <Image
                  src={card.image!}
                  alt={card.title || ''}
                  fill
                  className="object-cover"
                />
                {/* Dark gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white font-medium">{card.title}</h3>
                </div>
              </div>
            )}

            {card.type === 'accent' && (
              <div className="w-full h-full bg-camel p-6 flex flex-col justify-between">
                {/* Top: Avatar group */}
                <div>
                  <div className="flex items-center mb-3">
                    <div className="flex -space-x-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full border-2 border-camel bg-white/30 flex items-center justify-center"
                        >
                          <span className="text-white text-xs font-medium">
                            {['A', 'R', 'M', 'J'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="ml-3 text-white/90 font-body text-sm font-medium">3.5K+ members</span>
                  </div>

                  {/* Rewards badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Trophy className="w-4 h-4 text-white" />
                    <span className="text-white font-body text-sm font-medium">Rewards</span>
                  </div>
                </div>

                {/* Bottom: Text */}
                <p className="text-white font-body text-base leading-relaxed">
                  Maintain your style streak and earn exclusive discounts and early access rewards.
                </p>
              </div>
            )}

            {card.type === 'stats' && (
              <div className="w-full h-full bg-charcoal p-6 flex flex-col justify-between">
                {/* Top: Stats */}
                <div>
                  <p className="font-heading text-5xl text-white font-semibold mb-2">98%</p>
                  <p className="font-body text-white/60 text-sm">Customer Satisfaction</p>
                </div>

                {/* Bottom: Bar chart */}
                <div className="flex items-end gap-4 justify-center">
                  {barHeights.map((height, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div
                        className="w-16 rounded-xl bg-camel"
                        style={{ height: `${height * 1.5}px` }}
                      />
                      <span className="text-white/50 font-body text-xs">{barLabels[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Spacer for centering on large screens */}
        <div className="hidden xl:block flex-shrink-0" style={{ width: 'calc((100vw - 1200px) / 2)' }} />
      </div>
    </section>
  );
}
