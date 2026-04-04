'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Progress bar counter ─────────────────────────────────────── */
function AnimatedProgress({
  target,
  triggerRef,
}: {
  target: number;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [width, setWidth] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => setWidth(Math.round(obj.val)),
        });
      },
    });
    return () => { trigger.kill(); };
  }, [target, triggerRef]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-charcoal/50">Season Collection Progress</span>
        <span className="text-xs font-semibold text-charcoal">{width}%</span>
      </div>
      <div className="h-2 bg-mist/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-camel rounded-full transition-all duration-100"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blur reveal heading
      gsap.fromTo(
        '.fc-blur-reveal',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        {
          opacity: 1, filter: 'blur(0px)', y: 0,
          duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.fc-blur-reveal', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Slide ups
      gsap.fromTo(
        '.fc-slide-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      // Profile card slide-in from left
      gsap.fromTo(
        '.fc-profile-card',
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.fc-profile-card', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Image reveal
      gsap.fromTo(
        '.fc-image-reveal',
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.fc-image-reveal', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      // Stats card float in
      gsap.fromTo(
        statsCardRef.current,
        { opacity: 0, y: 40, x: 20 },
        {
          opacity: 1, y: 0, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: statsCardRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collection" className="px-3 md:px-4 pb-3 md:pb-4">
      <div className="bg-warm-white rounded-[24px] px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
          <div>
            <span className="fc-slide-up inline-block pill-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-camel" />
              Featured Collection
            </span>
            <h2 className="fc-blur-reveal text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
              Premium Menswear for<br />a Refined Lifestyle
            </h2>
          </div>
          <p className="fc-slide-up text-charcoal/50 text-base leading-relaxed max-w-sm md:text-right mt-2">
            Join thousands of gentlemen who elevate their wardrobe with curated pieces designed for timeless elegance.
          </p>
        </div>

        {/* Dentora-style Feature Layout: Profile Card + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Designer Profile Card (Dentora doctor card style) */}
          <div className="fc-profile-card opacity-0">
            <div className="bg-cream rounded-[20px] p-6 md:p-8 h-full flex flex-col">
              {/* Designer Profile */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-camel to-mist flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-2xl font-heading font-bold">B</span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal">Brutos Atelier</h3>
                  <p className="text-sm text-charcoal/50">Lead Design Studio</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-3.5 h-3.5 text-camel" fill="currentColor" />
                    <span className="text-sm font-semibold text-charcoal">4.9</span>
                    <span className="text-xs text-charcoal/40 ml-1">(45+ reviews)</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                Each piece is meticulously crafted by our design team, blending Italian tailoring traditions with modern Indonesian sensibility.
              </p>

              {/* Mini product preview */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['Blazer', 'Shirt', 'Trousers'].map((item, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-white border border-charcoal/5 flex flex-col items-center justify-center p-3 hover:border-camel/30 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-camel/60 mb-1.5" />
                    <span className="text-[10px] text-charcoal/50 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="mt-auto group inline-flex items-center justify-center gap-2 bg-camel text-white rounded-full px-6 py-3.5 text-sm font-medium hover:bg-camel-dark transition-all duration-300 hover:shadow-lg hover:shadow-camel/25"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right — Product Image with Floating Stats */}
          <div className="relative">
            <div className="fc-image-reveal relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] rounded-[20px] overflow-hidden opacity-0">
              <Image
                src="/hero-model.png"
                alt="Featured collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card — Dentora style overlay */}
            <div
              ref={statsCardRef}
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl max-w-[280px] opacity-0"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-charcoal/50">New Arrivals This Season</span>
                  <span className="text-2xl font-heading font-bold text-charcoal">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-charcoal/50">Average Crafting Time</span>
                  <span className="text-2xl font-heading font-bold text-charcoal">48<span className="text-sm font-normal text-charcoal/50 ml-1">hrs</span></span>
                </div>
                <AnimatedProgress target={72} triggerRef={statsCardRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
