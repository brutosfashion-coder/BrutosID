"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Click-Based Flip Card ── */
function FlipCard({
  frontSrc,
  backSrc,
  alt,
  href,
  label,
  delay,
  isMobile,
}: {
  frontSrc: string;
  backSrc: string;
  alt: string;
  href: string;
  label: string;
  delay: number;
  isMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [flipped, setFlipped] = useState(false);

  /* ── Mobile: minimal JS animation, CSS handles the flip ── */
  if (isMobile) {
    return (
      <div className="flex-1 flex flex-col">
        <div
          ref={ref}
          className="relative cursor-pointer gpu-layer"
          style={{ perspective: "1000px" }}
          onClick={() => setFlipped((prev) => !prev)}
        >
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: "3 / 5" }}
          >
            <div className={`absolute inset-0 card-flip-container ${flipped ? "flipped" : ""}`}>
              {/* Front */}
              <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src={frontSrc}
                  alt={alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top center" }}
                  sizes="46vw"
                  priority
                />
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <Image
                  src={backSrc}
                  alt={`${alt} — tampilan lain`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top center" }}
                  sizes="46vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120D]/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <Link
          href={href}
          className="block bg-white text-center active:bg-[#F0EBE4] transition-colors rounded-b-lg"
          style={{ padding: "10px 0" }}
        >
          <span
            className="text-[#3B2F2F] uppercase font-bold"
            style={{ fontSize: "10px", letterSpacing: "0.14em" }}
          >
            {label}
          </span>
        </Link>
      </div>
    );
  }

  /* ── Desktop: full Framer Motion animation ── */
  return (
    <div className="flex-1 flex flex-col">
      <div
        ref={ref}
        className="relative cursor-pointer card-glow group"
        style={{ perspective: "1200px" }}
        onClick={() => setFlipped((prev) => !prev)}
      >
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: "2 / 3" }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay, duration: 1.6, ease: lux }}
        >
          <div className={`absolute inset-0 card-flip-container ${flipped ? "flipped" : ""}`}>
            {/* Front */}
            <div
              className="absolute inset-0 overflow-hidden rounded-none"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={frontSrc}
                alt={alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                style={{ objectPosition: "top center" }}
                sizes="28vw"
                priority
              />
              <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-colors duration-[1200ms] pointer-events-none" />
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 overflow-hidden rounded-none"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <Image
                src={backSrc}
                alt={`${alt} — tampilan lain`}
                fill
                className="object-cover"
                style={{ objectPosition: "top center" }}
                sizes="28vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120D]/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollReveal direction="up" delay={delay + 1.4} distance={15} duration={0.6}>
        <Link
          href={href}
          className="block bg-white text-center active:bg-[#F0EBE4] transition-colors rounded-none"
          style={{ padding: "12px 0" }}
        >
          <span
            className="text-[#3B2F2F] uppercase font-bold"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {label}
          </span>
        </Link>
      </ScrollReveal>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════════════ DESKTOP (md+) ═══════════════ */}
      <section className="hidden md:block relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #F5F0EB 0%, #F5F0EB 46%, #3B2F2F 60%, #3B2F2F 100%)",
            }}
          />
        </div>

        <div
          className="relative mx-auto"
          style={{ maxWidth: "1280px", padding: "40px 48px 32px", display: "grid", gridTemplateColumns: "38% 1fr", gap: "36px" }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col self-stretch">
            <div className="flex flex-col justify-end" style={{ flex: "0 0 55%", paddingBottom: "28px" }}>
              <motion.div
                className="h-[1px] mb-5 gold-line-pulse"
                style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 70, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: lux }}
              />
              <ScrollReveal direction="left" delay={0.1} distance={70} blur>
                <h2
                  className="font-serif italic gold-shimmer-text"
                  style={{ fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.08, fontWeight: 400 }}
                >
                  Jelajahi<br />Koleksi Kami
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3} distance={50} blur>
                <p className="text-[#7D7168] mt-3" style={{ fontSize: "clamp(13px, 1vw, 15px)", lineHeight: 1.6, maxWidth: "340px" }}>
                  Fashion premium dengan sentuhan modern — dirancang untuk mereka yang mengutamakan kualitas dan gaya berpakaian maskulin.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.55} distance={30}>
                <div className="flex gap-3 mt-6">
                  <Link href="/" className="btn-glass-gold" style={{ fontSize: "11.5px", letterSpacing: "0.12em", padding: "10px 22px" }}>LIHAT KOLEKSI</Link>
                  <Link href="/" className="btn-glass-gold" style={{ fontSize: "11.5px", letterSpacing: "0.12em", padding: "10px 22px" }}>TENTANG KAMI</Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col justify-start" style={{ flex: "0 0 45%", paddingTop: "36px" }}>
              <motion.div
                className="h-[1px] mb-5 gold-line-pulse"
                style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.6), transparent)" }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.5, ease: lux }}
              />
              <ScrollReveal direction="left" delay={0.2} distance={60} blur>
                <p className="font-serif italic quote-glow" style={{ fontSize: "clamp(20px, 2vw, 32px)", lineHeight: 1.35, color: "#F0EBE4" }}>
                  &ldquo;Berpakaian baik, hidup lebih baik,<br />jadilah versi terbaik dirimu.&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.45} distance={25}>
                <div className="mt-6">
                  <Link href="/" className="btn-glass-gold-light" style={{ fontSize: "11.5px", letterSpacing: "0.12em", padding: "10px 22px" }}>BELANJA SEKARANG</Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Flip Cards ─── */}
          <div className="flex gap-4">
            <FlipCard frontSrc="/collection-model.jpg" backSrc="/collection-model.jpg" alt="Koleksi fashion premium Brutos ID — gaya maskulin modern" href="/" label="LIHAT KOLEKSI" delay={0.4} />
            <FlipCard frontSrc="/collection-flatlay.jpg" backSrc="/collection-flatlay.jpg" alt="Flatlay koleksi premium Brutos ID — fashion modern berkelas" href="/" label="TENTANG KAMI" delay={0.7} />
          </div>
        </div>
      </section>

      {/* ═══════════════ MOBILE (<md) ═══════════════ */}
      <section className="md:hidden">
        {/* ── Discover Header ── */}
        <div className="relative px-6 pt-10 pb-7" style={{ background: "#F5F0EB" }}>
          <div className="relative">
            <div className="h-[1px] mb-4 gold-line-pulse gpu-layer" style={{ width: 40, background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
            <h2 className="font-serif italic gold-shimmer-text mb-3" style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}>
              Jelajahi<br />Koleksi Kami
            </h2>
            <p className="text-[#7D7168] mb-5" style={{ fontSize: "12.5px", lineHeight: 1.65, maxWidth: "270px" }}>
              Fashion premium dengan sentuhan modern — dirancang untuk mereka yang mengutamakan kualitas dan gaya.
            </p>
            <div className="flex gap-2.5">
              <Link href="/" className="btn-glass-gold" style={{ fontSize: "9.5px", padding: "9px 16px" }}>LIHAT KOLEKSI</Link>
              <Link href="/" className="btn-glass-gold" style={{ fontSize: "9.5px", padding: "9px 16px" }}>TENTANG KAMI</Link>
            </div>
          </div>
        </div>

        {/* Gradient transition — cream to dark brown */}
        <div
          style={{
            height: "48px",
            background: "linear-gradient(to bottom, #F5F0EB, #3B2F2F)",
          }}
        />

        {/* ── Flip Cards — no Framer, pure CSS ── */}
        <div className="relative px-4 py-5" style={{ background: "#3B2F2F" }}>
          <div className="relative flex gap-2.5">
            <FlipCard frontSrc="/collection-model.jpg" backSrc="/collection-model.jpg" alt="Koleksi fashion premium Brutos ID" href="/" label="LIHAT KOLEKSI" delay={0.1} isMobile />
            <FlipCard frontSrc="/collection-flatlay.jpg" backSrc="/collection-flatlay.jpg" alt="Koleksi premium Brutos ID — fashion modern" href="/" label="TENTANG KAMI" delay={0.25} isMobile />
          </div>
        </div>

        {/* ── Quote ── */}
        <div className="relative px-6 pt-8 pb-10" style={{ background: "#3B2F2F" }}>
          <div className="relative">
            <div className="h-[1px] mb-5 gold-line-pulse gpu-layer" style={{ width: 35, background: "linear-gradient(90deg, rgba(201,169,110,0.5), transparent)" }} />
            <p className="font-serif italic mb-5" style={{ fontSize: "22px", lineHeight: 1.35, color: "#F0EBE4" }}>
              &ldquo;Berpakaian baik,<br />hidup lebih baik,<br />jadilah versi terbaik dirimu.&rdquo;
            </p>
            <Link href="/" className="btn-glass-gold-light" style={{ fontSize: "10px", padding: "10px 20px" }}>BELANJA SEKARANG</Link>
          </div>
        </div>
      </section>
    </>
  );
}
