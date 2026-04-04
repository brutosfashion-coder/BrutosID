"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Counter from "@/components/ui/Counter";
import { Users, Award, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "100%", label: "Premium Fabric" },
  { icon: Users, value: "2,000+", label: "Satisfied Gentlemen" },
  { icon: Star, value: "4.9", label: "Customer Rating" },
];

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-mist">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: "url('/images/about-brand.jpg')" }}
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-camel/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-camel/20 rounded-3xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <span className="section-label">Our Story</span>
            </ScrollReveal>

            <div className="mt-4 mb-6">
              <h2 className="heading-lg text-charcoal">
                <AnimatedText text="Crafted for the Man Who Knows" delay={0.2} />
              </h2>
            </div>

            <ScrollReveal delay={0.3}>
              <p className="text-muted text-lg leading-relaxed mb-4">
                At Brutos ID, we believe that true elegance speaks in silence. Every piece in our collection is
                designed for the man who has earned his confidence — not through noise, but through substance.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                Our garments are crafted from the finest fabrics, tailored to perfection, and designed to
                accompany you through every chapter of your story. Because the best-dressed man in the room
                never tries to be.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.4 + i * 0.1}>
                  <div className="text-center lg:text-left">
                    <stat.icon size={20} className="text-camel mb-3 mx-auto lg:mx-0" />
                    <div className="text-3xl md:text-4xl font-serif italic text-charcoal mb-1">
                      <Counter value={stat.value} />
                    </div>
                    <p className="text-xs tracking-wider uppercase text-muted">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
