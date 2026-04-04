"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Counter from "@/components/ui/Counter";
import { Gift, Truck, Shield, RotateCcw } from "lucide-react";

const cards = [
  {
    type: "image" as const,
    image: "/images/why/lifestyle.jpg",
    title: "Curated Selection",
    description: "Every piece hand-selected for the modern gentleman",
  },
  {
    type: "highlight" as const,
    bgColor: "#C8B89A",
    icon: Gift,
    title: "Member Rewards",
    description: "15% off your first order when you join the inner circle",
    cta: "Join Now",
  },
  {
    type: "image" as const,
    image: "/images/why/customer.jpg",
    title: "Worn with Confidence",
    description: "Real men, real style, real satisfaction",
  },
  {
    type: "stat" as const,
    value: "98%",
    title: "Reorder Rate",
    description: "Our customers come back because quality speaks for itself",
  },
];

const features = [
  { icon: Truck, title: "Free Shipping", desc: "Orders over Rp 500K" },
  { icon: Shield, title: "Quality Guarantee", desc: "Premium materials only" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-offwhite relative overflow-hidden">
      {/* Subtle bg parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-camel/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">Why Brutos</span>
          </ScrollReveal>
          <h2 className="heading-lg text-charcoal mt-4">
            <AnimatedText text="What Sets Us Apart" delay={0.1} />
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden h-[400px] relative group cursor-pointer"
              >
                {card.type === "image" && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-medium text-lg">{card.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{card.description}</p>
                    </div>
                  </>
                )}

                {card.type === "highlight" && (
                  <div
                    className="h-full flex flex-col justify-between p-6"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <div>
                      {card.icon && <card.icon size={32} className="text-white/80 mb-4" />}
                      <h3 className="text-white text-2xl font-serif italic">{card.title}</h3>
                      <p className="text-white/80 text-sm mt-2">{card.description}</p>
                    </div>
                    {card.cta && (
                      <button className="self-start px-6 py-2.5 bg-white text-charcoal text-xs tracking-wider uppercase rounded-full font-medium hover:bg-offwhite transition-colors">
                        {card.cta}
                      </button>
                    )}
                  </div>
                )}

                {card.type === "stat" && (
                  <div className="h-full bg-charcoal flex flex-col justify-between p-6">
                    <div>
                      <div className="text-6xl font-serif italic text-camel mb-2">
                        <Counter value={card.value!} />
                      </div>
                      <h3 className="text-white text-lg font-medium">{card.title}</h3>
                      <p className="text-white/60 text-sm mt-2">{card.description}</p>
                    </div>
                    {/* Mini chart visual */}
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 98].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-camel/30 rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={0.5 + i * 0.1}>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-camel/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feat.icon size={20} className="text-camel" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-charcoal">{feat.title}</h4>
                  <p className="text-muted text-xs">{feat.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
