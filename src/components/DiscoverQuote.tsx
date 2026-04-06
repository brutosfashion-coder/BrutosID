"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Luxury Card Back Face ── */
function CardBack() {
  return (
    <div
      className="absolute inset-0 luxury-card-back"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <div className="card-corner tl" />
      <div className="card-corner tr" />
      <div className="card-corner bl" />
      <div className="card-corner br" />
      <div className="card-pattern" />
      <div className="card-center-glow" />
      <div className="diamond-ring" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
            <div className="w-1.5 h-1.5 bg-[#C9A96E]/70 rotate-45" />
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
          </div>

          <div
            className="relative w-20 h-20 flex items-center justify-center"
            style={{
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: "50%",
            }}
          >
            <div
              className="absolute inset-[4px] flex items-center justify-center"
              style={{
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "50%",
              }}
            >
              <span
                className="font-serif text-[#C9A96E] font-light"
                style={{ fontSize: "34px", letterSpacing: "0.05em" }}
              >
                B
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
            <div className="w-1.5 h-1.5 bg-[#C9A96E]/70 rotate-45" />
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 12px)",
          backgroundSize: "17px 17px",
        }}
      />
    </div>
  );
}

/* ── Continuous Flip Card ── */
function FlipCard({
  src,
  alt,
  href,
  label,
  delay,
}: {
  src: string;
  alt: string;
  href: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [flipActive, setFlipActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(
        () => setFlipActive(true),
        (delay + 1.8) * 1000
      );
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div className="flex-1 flex flex-col">
      <div
        ref={ref}
        className="relative group cursor-pointer card-glow"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: "2 / 3" }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay, duration: 1.6, ease: lux }}
        >
          <div
            className={`absolute inset-0 ${flipActive ? "card-flip" : ""}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                sizes="(min-width:768px) 28vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-colors duration-[1200ms] pointer-events-none" />
            </div>
            <CardBack />
          </div>
        </motion.div>
      </div>

      <ScrollReveal direction="up" delay={delay + 1.4} distance={20} duration={0.8}>
        <Link
          href={href}
          className="block bg-white text-center hover:bg-[#F8F5F1] transition-colors"
          style={{ padding: "14px 0" }}
        >
          <span
            className="text-[#3B2F2F] uppercase font-bold"
            style={{ fontSize: "13px", letterSpacing: "0.14em" }}
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
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "55%",
              backgroundImage: "url('/paper-texture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 texture-drift"
            style={{
              height: "45%",
              backgroundImage: "url('/brown-texture.jpg')",
              backgroundSize: "120% 120%",
            }}
          />
        </div>

        <div
          className="relative mx-auto"
          style={{
            maxWidth: "1280px",
            padding: "40px 48px 32px",
            display: "grid",
            gridTemplateColumns: "38% 1fr",
            gap: "36px",
          }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col self-stretch">
            {/* Top half — cream */}
            <div
              className="flex flex-col justify-end"
              style={{ flex: "0 0 55%", paddingBottom: "28px" }}
            >
              <motion.div
                className="h-[1px] mb-5 gold-line-pulse"
                style={{
                  background: "linear-gradient(90deg, #C9A96E, transparent)",
                }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 70, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: lux }}
              />
              <ScrollReveal direction="left" delay={0.1} distance={70} blur>
                <h2
                  className="font-serif italic gold-shimmer-text"
                  style={{
                    fontSize: "clamp(32px, 3vw, 48px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                  }}
                >
                  Jelajahi
                  <br />
                  Koleksi Kami
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3} distance={50} blur>
                <p
                  className="text-[#7D7168] mt-3"
                  style={{
                    fontSize: "clamp(13px, 1vw, 15px)",
                    lineHeight: 1.6,
                    maxWidth: "340px",
                  }}
                >
                  Fashion pria premium dengan sentuhan modern — dirancang untuk pria Indonesia yang mengutamakan kualitas dan gaya berpakaian maskulin.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.55} distance={30}>
                <div className="flex gap-3 mt-6">
                  <Link
                    href="/"
                    className="btn-glass-gold"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    LIHAT KOLEKSI
                  </Link>
                  <Link
                    href="/"
                    className="btn-glass-gold"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    TENTANG KAMI
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom half — brown */}
            <div
              className="flex flex-col justify-start"
              style={{ flex: "0 0 45%", paddingTop: "36px" }}
            >
              <motion.div
                className="h-[1px] mb-5 gold-line-pulse"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(201,169,110,0.6), transparent)",
                }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.5, ease: lux }}
              />
              <ScrollReveal direction="left" delay={0.2} distance={60} blur>
                <p
                  className="font-serif italic quote-glow"
                  style={{
                    fontSize: "clamp(20px, 2vw, 32px)",
                    lineHeight: 1.35,
                    color: "#F0EBE4",
                  }}
                >
                  &ldquo;Berpakaian baik, hidup lebih baik,
                  <br />
                  jadilah pria sejati.&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.45} distance={25}>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="btn-glass-gold-light"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    BELANJA SEKARANG
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Flip Cards ─── */}
          <div className="flex gap-4">
            <FlipCard
              src="/collection-model.jpg"
              alt="Koleksi baju pria premium Brutos ID — outfit pria keren brand lokal Indonesia"
              href="/"
              label="LIHAT KOLEKSI"
              delay={0.4}
            />
            <FlipCard
              src="/collection-flatlay.jpg"
              alt="Flatlay pakaian pria Brutos ID — fashion pria modern Indonesia"
              href="/"
              label="TENTANG KAMI"
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ MOBILE (<md) ═══════════════ */}
      <section className="md:hidden">
        <div
          className="px-5 pt-10 pb-8"
          style={{
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="h-[1px] mb-4 gold-line-pulse"
            style={{
              background: "linear-gradient(90deg, #C9A96E, transparent)",
            }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 50, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: lux }}
          />
          <ScrollReveal direction="up" delay={0} blur>
            <h2
              className="font-serif italic gold-shimmer-text mb-3"
              style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}
            >
              Jelajahi Koleksi Kami
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} blur>
            <p
              className="text-[#7D7168] mb-5"
              style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "300px" }}
            >
              Fashion pria premium dengan sentuhan modern — dirancang untuk pria yang mengutamakan kualitas dan gaya.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex gap-3">
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "11px", padding: "9px 16px" }}
              >
                LIHAT KOLEKSI
              </Link>
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "11px", padding: "9px 16px" }}
              >
                TENTANG KAMI
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="px-4 py-4 texture-drift"
          style={{
            backgroundImage: "url('/brown-texture.jpg')",
            backgroundSize: "120% 120%",
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <FlipCard
              src="/collection-model.jpg"
              alt="Koleksi baju pria premium Brutos ID — brand fashion pria Indonesia"
              href="/"
              label="LIHAT KOLEKSI"
              delay={0.2}
            />
            <FlipCard
              src="/collection-flatlay.jpg"
              alt="Outfit pria modern Brutos ID — pakaian pria berkualitas"
              href="/"
              label="TENTANG KAMI"
              delay={0.5}
            />
          </div>
        </div>

        <div
          className="px-5 pt-8 pb-10 texture-drift"
          style={{
            backgroundImage: "url('/brown-texture.jpg')",
            backgroundSize: "120% 120%",
          }}
        >
          <motion.div
            className="h-[1px] mb-5 gold-line-pulse"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,169,110,0.5), transparent)",
            }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: lux }}
          />
          <ScrollReveal direction="up" delay={0} blur>
            <p
              className="font-serif italic quote-glow mb-5"
              style={{ fontSize: "22px", lineHeight: 1.35, color: "#F0EBE4" }}
            >
              &ldquo;Berpakaian baik, hidup lebih baik, jadilah pria sejati.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <Link
              href="/"
              className="btn-glass-gold-light"
              style={{ fontSize: "11px", padding: "9px 20px" }}
            >
              BELANJA SEKARANG
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
