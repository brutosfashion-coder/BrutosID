"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Continuous Flip Card ── */
function FlipCard({
  src,
  alt,
  href,
  label,
  flipFrom,
  delay,
}: {
  src: string;
  alt: string;
  href: string;
  label: string;
  flipFrom: number;
  delay: number;
}) {
  /* Direction of first entrance flip */
  const direction = flipFrom < 0 ? -1 : 1;

  return (
    <div className="flex-1 flex flex-col">
      {/* Perspective wrapper */}
      <div
        className="relative group cursor-pointer card-glow"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="relative w-full"
          style={{ transformStyle: "preserve-3d", aspectRatio: "2 / 3" }}
          /* 
            Keyframe loop:
            0°    → show front (hold 4s)
            180°  → flip to back 
            180°  → hold back (2s)
            360°  → flip back to front
            Total cycle ≈ 8s per full rotation
          */
          initial={{ rotateY: direction * 180, opacity: 0 }}
          whileInView={{
            rotateY: [direction * 180, 0, 0, direction * 180, direction * 180, direction * 360],
            opacity: [0, 1, 1, 1, 1, 1],
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            rotateY: {
              delay,
              duration: 12,
              times: [0, 0.18, 0.52, 0.7, 0.82, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            },
            opacity: { delay, duration: 0.01 },
          }}
        >
          {/* ▸ FRONT FACE — Image */}
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
            {/* Warm hover overlay */}
            <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-colors duration-[1200ms] pointer-events-none" />
          </div>

          {/* ▸ BACK FACE — Luxury brand pattern */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background:
                "linear-gradient(160deg, #2C1E16 0%, #4A3728 40%, #3B2F2F 100%)",
            }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="flex flex-col items-center relative z-10">
              <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C9A96E]/60 to-transparent" />
              <div className="my-4 w-2.5 h-2.5 bg-[#C9A96E]/80 rotate-45" />
              <span
                className="font-serif text-[#C9A96E] tracking-[0.35em] font-medium"
                style={{ fontSize: "16px" }}
              >
                BRUTOS
              </span>
              <span
                className="font-serif text-[#C9A96E]/60 tracking-[0.25em] mt-1.5"
                style={{ fontSize: "11px" }}
              >
                INDONESIA
              </span>
              <div className="my-4 w-2.5 h-2.5 bg-[#C9A96E]/80 rotate-45" />
              <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#C9A96E]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Label strip */}
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
        {/* Full-width split background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {/* Paper texture — top */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "48%",
              backgroundImage: "url('/paper-texture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Brown texture — bottom — with slow drift animation */}
          <div
            className="absolute inset-x-0 bottom-0 texture-drift"
            style={{
              height: "52%",
              backgroundImage: "url('/brown-texture.jpg')",
              backgroundSize: "120% 120%",
            }}
          />
        </div>

        {/* Content grid */}
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
            {/* Top cream zone */}
            <div
              className="flex flex-col justify-end"
              style={{ flex: "0 0 48%", paddingBottom: "28px" }}
            >
              {/* Gold accent line */}
              <motion.div
                className="h-[1px] mb-5"
                style={{
                  background:
                    "linear-gradient(90deg, #C9A96E, transparent)",
                }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 70, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: lux }}
              />

              <ScrollReveal direction="left" delay={0.1} distance={70} blur>
                <h2
                  className="font-serif italic text-[#3B2F2F]"
                  style={{
                    fontSize: "clamp(32px, 3vw, 48px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                  }}
                >
                  Discover the
                  <br />
                  Collection
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
                  Premium menswear with a modern touch — 
                  crafted for the gentleman who values quality and style.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.55} distance={30}>
                <div className="flex gap-3 mt-6">
                  <Link
                    href="/shop"
                    className="btn-gold"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    SHOP COLLECTION
                  </Link>
                  <Link
                    href="/about"
                    className="btn-gold"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    ABOUT US
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom brown zone */}
            <div
              className="flex flex-col justify-start"
              style={{ flex: "0 0 52%", paddingTop: "36px" }}
            >
              {/* Decorative gold line */}
              <motion.div
                className="h-[1px] mb-5"
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
                  className="font-serif italic text-[#F0EBE4]"
                  style={{
                    fontSize: "clamp(20px, 2vw, 32px)",
                    lineHeight: 1.35,
                  }}
                >
                  &ldquo;Dress well, live well,
                  <br />
                  be a gentleman.&rdquo;
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.45} distance={25}>
                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="btn-gold"
                    style={{
                      fontSize: "11.5px",
                      letterSpacing: "0.12em",
                      padding: "10px 22px",
                    }}
                  >
                    SHOP NOW
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Flip Cards ─── */}
          <div className="flex gap-4">
            <FlipCard
              src="/collection-model.jpg"
              alt="Brutos ID premium menswear collection - Indonesian local clothing brand"
              href="/shop"
              label="SHOP COLLECTION"
              flipFrom={-180}
              delay={0.4}
            />
            <FlipCard
              src="/collection-flatlay.jpg"
              alt="Brutos ID outfit flatlay - modern menswear styling"
              href="/about"
              label="ABOUT US"
              flipFrom={180}
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ MOBILE (<md) ═══════════════ */}
      <section className="md:hidden">
        {/* Paper texture — heading */}
        <div
          className="px-5 pt-10 pb-8"
          style={{
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="h-[1px] mb-4"
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
              className="font-serif italic text-[#3B2F2F] mb-3"
              style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}
            >
              Discover the Collection
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} blur>
            <p
              className="text-[#7D7168] mb-5"
              style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "300px" }}
            >
              Premium menswear with a modern touch —
              crafted for the gentleman who values quality and style.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex gap-3">
              <Link
                href="/shop"
                className="btn-gold"
                style={{ fontSize: "11px", padding: "9px 16px" }}
              >
                SHOP COLLECTION
              </Link>
              <Link
                href="/about"
                className="btn-gold"
                style={{ fontSize: "11px", padding: "9px 16px" }}
              >
                ABOUT US
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Brown texture — Flip cards with drift */}
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
              alt="Brutos ID premium menswear collection"
              href="/shop"
              label="SHOP COLLECTION"
              flipFrom={180}
              delay={0.2}
            />
            <FlipCard
              src="/collection-flatlay.jpg"
              alt="Brutos ID outfit flatlay"
              href="/about"
              label="ABOUT US"
              flipFrom={180}
              delay={0.5}
            />
          </div>
        </div>

        {/* Brown texture — Quote */}
        <div
          className="px-5 pt-8 pb-10 texture-drift"
          style={{
            backgroundImage: "url('/brown-texture.jpg')",
            backgroundSize: "120% 120%",
          }}
        >
          <motion.div
            className="h-[1px] mb-5"
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
              className="font-serif italic text-[#F0EBE4] mb-5"
              style={{ fontSize: "22px", lineHeight: 1.35 }}
            >
              &ldquo;Dress well, live well, be a gentleman.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <Link
              href="/shop"
              className="btn-gold"
              style={{ fontSize: "11px", padding: "9px 20px" }}
            >
              SHOP NOW
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
