"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import { ShoppingBag, Eye, ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "Camel Wool Blazer", price: 1250000, image: "/images/products/blazer.jpg", tag: "Best Seller" },
  { id: 2, name: "Charcoal Linen Shirt", price: 650000, image: "/images/products/shirt.jpg", tag: "New" },
  { id: 3, name: "Earth Tone Chinos", price: 850000, image: "/images/products/chinos.jpg", tag: null },
  { id: 4, name: "Merino Wool Polo", price: 550000, image: "/images/products/polo.jpg", tag: "Limited" },
];

function formatIDR(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
}

export default function FeaturedCollection() {
  return (
    <section className="py-24 md:py-32 bg-warmwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <ScrollReveal>
              <span className="section-label">Collection</span>
            </ScrollReveal>
            <h2 className="heading-lg text-charcoal mt-4">
              <AnimatedText text="This Season's Finest" delay={0.1} />
            </h2>
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-charcoal hover:text-camel transition-colors mt-4 md:mt-0 group"
            >
              View All
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-mist mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />

                  {/* Tag */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-[9px] tracking-[0.15em] uppercase bg-camel text-white rounded-full">
                      {product.tag}
                    </span>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-camel hover:text-white transition-colors shadow-lg">
                      <ShoppingBag size={16} />
                    </button>
                    <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-camel hover:text-white transition-colors shadow-lg">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-medium text-sm text-charcoal group-hover:text-camel-dark transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted text-sm mt-1">{formatIDR(product.price)}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Floating Stats Card */}
        <ScrollReveal delay={0.4} direction="right">
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg shadow-charcoal/5">
              <div className="text-center">
                <span className="block text-2xl font-serif italic text-charcoal">2,847</span>
                <span className="text-[10px] uppercase tracking-wider text-muted">Pieces Sold</span>
              </div>
              <div className="w-px h-10 bg-mist" />
              <div className="text-center">
                <span className="block text-2xl font-serif italic text-charcoal">98%</span>
                <span className="text-[10px] uppercase tracking-wider text-muted">Satisfaction</span>
              </div>
              <div className="w-px h-10 bg-mist" />
              <div className="text-center">
                <span className="block text-2xl font-serif italic text-camel">Free</span>
                <span className="text-[10px] uppercase tracking-wider text-muted">Shipping</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
