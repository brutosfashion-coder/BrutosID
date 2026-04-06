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

function MobileCatCard({ cat, index }: { cat: typeof CATS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="mobile-cat-card bg-white/50 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 1, ease: lux }}
    >
      <div className="flex">
        {/* Image side */}
        <div className="relative w-[42%] overflow-hidden">
          <div className="relative w-full h-full" style={{ minHeight: "160px" }}>
            <Image
              src={cat.img}
              alt={`${cat.title} — koleksi fashion premium Brutos ID`}
              fill
              className="object-cover"
              sizes="42vw"
            />
            {/* Gold overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 flex flex-col justify-center px-4 py-5">
          <h3 className="font-serif text-[18px] sm:text-[20px] italic font-semibold text-[#3B2F2F] mb-2 leading-tight">
            {cat.title}
          </h3>
          <p className="text-[#9C8E82] text-[11px] sm:text-[12px] leading-[1.55] mb-4">
            {cat.desc}
          </p>
          <Link
            href="/"
            className="self-start text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.12em] text-[#C9A96E] border-b border-[#C9A96E]/40 pb-[2px] transition-all duration-300 active:border-[#C9A96E]"
          >
            Lihat Koleksi →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/paper-texture.jpg')",
        backgroundSize: "600px 600px",
        backgroundRepeat: "repeat",
      }}
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

      {/* ── MOBILE ── */}
      <div className="sm:hidden px-5">
        {/* Section header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: lux }}
        >
          <div
            className="h-[1px] mb-4 gold-line-pulse"
            style={{ background: "linear-gradient(90deg, #C9A96E, transparent)", width: "30px" }}
          />
          <h2 className="font-serif text-[22px] italic text-[#3B2F2F] font-light">
            Kategori Pilihan
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {CATS.map((cat, i) => (
            <MobileCatCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
