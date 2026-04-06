"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CATS = [
  {
    title: "Kemeja Signature",
    desc: "Koleksi kemeja premium dari bahan katun terbaik dengan potongan presisi dan tampilan timeless.",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80",
  },
  {
    title: "Outerwear Premium",
    desc: "Jaket dan outerwear bergaya maskulin modern untuk mereka yang menghargai penampilan berkelas.",
    img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
  },
  {
    title: "Aksesoris Elegan",
    desc: "Lengkapi gaya berpakaian Anda dengan koleksi aksesoris pilihan yang menunjang penampilan.",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
  },
];

function MobileCatCard({ cat, index }: { cat: (typeof CATS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="mobile-cat-card gpu-layer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.8, ease: lux }}
    >
      {/* Full-width image — never cropped */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src={cat.img}
          alt={`${cat.title} — koleksi fashion premium Brutos ID`}
          fill
          className="object-cover rounded-t-[10px]"
          sizes="(max-width: 640px) 90vw, 42vw"
        />
        {/* Subtle gold gradient at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(255,255,255,0.25), transparent)" }}
        />
      </div>

      {/* Content below image */}
      <div className="px-5 py-4">
        <h3 className="font-serif text-[17px] italic font-semibold text-[#3B2F2F] mb-1.5 leading-tight">
          {cat.title}
        </h3>
        <p className="text-[#9C8E82] text-[11.5px] leading-[1.6] mb-3">
          {cat.desc}
        </p>
        <Link
          href="/"
          className="inline-block text-[10px] uppercase font-bold tracking-[0.12em] text-[#C9A96E] border-b border-[#C9A96E]/40 pb-[2px] transition-colors duration-300 active:text-[#B8944D]"
        >
          Lihat Koleksi →
        </Link>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section
      className="py-10 sm:py-16 lg:py-20"
      style={{ background: "#F5F0EB" }}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden sm:block w-[90%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-3 gap-5 lg:gap-7">
          {CATS.map((c) => (
            <div key={c.title} className="text-center">
              <div className="relative w-full aspect-[5/3] mb-5 rounded-xl overflow-hidden">
                <Image
                  src={c.img}
                  alt={`${c.title} — koleksi fashion premium Brutos ID`}
                  fill
                  className="object-cover"
                  sizes="28vw"
                />
              </div>
              <h3 className="font-serif text-[24px] lg:text-[28px] italic font-semibold text-[#3B2F2F] mb-2">
                {c.title}
              </h3>
              <p className="text-[#9C8E82] text-[13px] lg:text-[14px] leading-[1.55] mb-5 px-1">
                {c.desc}
              </p>
              <Link
                href="/"
                className="inline-block w-full max-w-[280px] text-center bg-[#B49A6A] hover:bg-[#A38B5E] text-white text-[12.5px] tracking-[0.18em] font-medium py-[11px] transition-colors border border-[#A08A5A] rounded-[3px]"
              >
                BELANJA SEKARANG
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE — vertical cards, full images ── */}
      <div className="sm:hidden px-5">
        {/* Section header */}
        <motion.div
          className="mb-6 gpu-layer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: lux }}
        >
          <div
            className="h-[1px] mb-3 gold-line-pulse"
            style={{ background: "linear-gradient(90deg, #C9A96E, transparent)", width: "30px" }}
          />
          <h2 className="font-serif text-[21px] italic text-[#3B2F2F] font-light">
            Kategori Pilihan
          </h2>
        </motion.div>

        {/* Cards — vertical layout */}
        <div className="flex flex-col gap-4">
          {CATS.map((cat, i) => (
            <MobileCatCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
