"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLoading } from "./LoadingContext";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* Stable image arrays — defined at module level to prevent re-creation on every render */
const card1Images: [string, string, string] = [
  "/collection-model.jpg",
  "/hero.jpg",
  "/collection-flatlay.jpg",
];
const card2Images: [string, string, string] = [
  "/collection-flatlay.jpg",
  "/collection-model.jpg",
  "/hero.jpg",
];

/* ══════════════════════════════════════════════════════════
   FLIP CARD — 3 images, auto-flip 5s, click resets timer
   ══════════════════════════════════════════════════════════ */
function FlipCard({
  images,
  alt,
  href,
  label,
  entranceDelay,
  isMobile,
}: {
  images: [string, string, string];
  alt: string;
  href: string;
  label: string;
  entranceDelay: number;
  isMobile?: boolean;
}) {
  const { isLoaded } = useLoading();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  /* ── Flip state ── */
  const [flipCount, setFlipCount] = useState(0);
  const [faceAImg, setFaceAImg] = useState(images[0]);
  const [faceBImg, setFaceBImg] = useState(images[1]);
  const nextImgIdx = useRef(2); // next image index to load into hidden face
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const imagesRef = useRef(images);  // stable ref to avoid re-render issues

  const doFlip = useCallback(() => {
    setFlipCount((c) => c + 1);
  }, []);

  /* After each flip, update the now-hidden face with the next image */
  useEffect(() => {
    if (flipCount === 0) return;
    const imgs = imagesRef.current;
    const timer = setTimeout(() => {
      const isANowHidden = flipCount % 2 === 1; // odd = A hidden, even = B hidden
      const img = imgs[nextImgIdx.current];
      nextImgIdx.current = (nextImgIdx.current + 1) % imgs.length;
      if (isANowHidden) {
        setFaceAImg(img);
      } else {
        setFaceBImg(img);
      }
    }, isMobile ? 500 : 900); // wait for flip animation to mostly complete
    return () => clearTimeout(timer);
  }, [flipCount, isMobile]);

  /* Start auto-flip interval */
  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(doFlip, 5000);
  }, [doFlip]);

  /* Entrance flip — fires once when loaded (or in view for desktop) */
  useEffect(() => {
    const shouldStart = isMobile ? isLoaded : isLoaded && isInView;
    if (!shouldStart) return;

    const t = setTimeout(() => {
      doFlip();
      startInterval();
    }, entranceDelay * 1000);

    return () => {
      clearTimeout(t);
      clearInterval(intervalRef.current);
    };
  }, [isLoaded, isInView, isMobile, entranceDelay, doFlip, startInterval]);

  /* Cleanup interval on unmount */
  useEffect(() => () => clearInterval(intervalRef.current), []);

  /* Click handler — flip + reset timer */
  const handleClick = () => {
    doFlip();
    startInterval();
  };

  const rotation = flipCount * 180;

  /* ── MOBILE ── */
  if (isMobile) {
    return (
      <div className="flex-1 flex flex-col">
        <div
          ref={ref}
          className="relative cursor-pointer gpu-layer"
          style={{ perspective: "1000px" }}
          onClick={handleClick}
        >
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: "3 / 5" }}
          >
            <div
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
                transition: "transform 0.6s ease",
                willChange: "transform",
              }}
            >
              {/* Face A */}
              <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src={faceAImg}
                  alt={alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top center" }}
                  sizes="46vw"
                  priority
                />
              </div>
              {/* Face B */}
              <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Image
                  src={faceBImg}
                  alt={`${alt} — tampilan lain`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top center" }}
                  sizes="46vw"
                />
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

  /* ── DESKTOP ── */
  return (
    <div className="flex-1 flex flex-col">
      <div
        ref={ref}
        className="relative cursor-pointer card-glow group"
        style={{ perspective: "1200px" }}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: "2 / 3" }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: entranceDelay, duration: 1.6, ease: lux }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {/* Face A */}
            <div
              className="absolute inset-0 overflow-hidden rounded-none"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src={faceAImg}
                alt={alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                style={{ objectPosition: "top center" }}
                sizes="28vw"
                priority
              />
              <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/[0.06] transition-colors duration-[1200ms] pointer-events-none" />
            </div>
            {/* Face B */}
            <div
              className="absolute inset-0 overflow-hidden rounded-none"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src={faceBImg}
                alt={`${alt} — tampilan lain`}
                fill
                className="object-cover"
                style={{ objectPosition: "top center" }}
                sizes="28vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollReveal
        direction="up"
        delay={entranceDelay + 1.4}
        distance={15}
        duration={0.6}
      >
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

/* ══════════════════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════════════════ */
export default function DiscoverQuote() {
  /* Images defined at module level above for stable references */

  return (
    <>
      {/* ═══════════════ DESKTOP (md+) ═══════════════ */}
      <section className="hidden md:block relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
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
            <div
              className="flex flex-col justify-end"
              style={{ flex: "0 0 55%", paddingBottom: "28px" }}
            >
              <motion.div
                className="h-[1px] mb-5 gold-line-pulse"
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
                  Fashion premium dengan sentuhan modern — dirancang untuk
                  mereka yang mengutamakan kualitas dan gaya berpakaian
                  maskulin.
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
                  jadilah versi terbaik dirimu.&rdquo;
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
              images={card1Images}
              alt="Koleksi fashion premium Brutos ID — gaya maskulin modern"
              href="/"
              label="LIHAT KOLEKSI"
              entranceDelay={0.8}
            />
            <FlipCard
              images={card2Images}
              alt="Flatlay koleksi premium Brutos ID — fashion modern berkelas"
              href="/"
              label="TENTANG KAMI"
              entranceDelay={1.2}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ MOBILE (<md) ═══════════════ */}
      <section className="md:hidden">
        {/* ── Discover Header ── */}
        <div
          className="relative px-6 pt-10 pb-7"
          style={{ background: "#F5F0EB" }}
        >
          <div className="relative">
            <div
              className="h-[1px] mb-4 gold-line-pulse gpu-layer"
              style={{
                width: 40,
                background:
                  "linear-gradient(90deg, #C9A96E, transparent)",
              }}
            />
            <h2
              className="font-serif italic gold-shimmer-text mb-3"
              style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}
            >
              Jelajahi
              <br />
              Koleksi Kami
            </h2>
            <p
              className="text-[#7D7168] mb-5"
              style={{
                fontSize: "12.5px",
                lineHeight: 1.65,
                maxWidth: "270px",
              }}
            >
              Fashion premium dengan sentuhan modern — dirancang untuk mereka
              yang mengutamakan kualitas dan gaya.
            </p>
            <div className="flex gap-2.5">
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "9.5px", padding: "9px 16px" }}
              >
                LIHAT KOLEKSI
              </Link>
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "9.5px", padding: "9px 16px" }}
              >
                TENTANG KAMI
              </Link>
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

        {/* ── Flip Cards ── */}
        <div
          className="relative px-4 py-5"
          style={{ background: "#3B2F2F" }}
        >
          <div className="relative flex gap-2.5">
            <FlipCard
              images={card1Images}
              alt="Koleksi fashion premium Brutos ID"
              href="/"
              label="LIHAT KOLEKSI"
              entranceDelay={0.5}
              isMobile
            />
            <FlipCard
              images={card2Images}
              alt="Koleksi premium Brutos ID — fashion modern"
              href="/"
              label="TENTANG KAMI"
              entranceDelay={0.8}
              isMobile
            />
          </div>
        </div>

        {/* ── Quote ── */}
        <div
          className="relative px-6 pt-8 pb-10"
          style={{ background: "#3B2F2F" }}
        >
          <div className="relative">
            <div
              className="h-[1px] mb-5 gold-line-pulse gpu-layer"
              style={{
                width: 35,
                background:
                  "linear-gradient(90deg, rgba(201,169,110,0.5), transparent)",
              }}
            />
            <p
              className="font-serif italic mb-5"
              style={{
                fontSize: "22px",
                lineHeight: 1.35,
                color: "#F0EBE4",
              }}
            >
              &ldquo;Berpakaian baik,
              <br />
              hidup lebih baik,
              <br />
              jadilah versi terbaik dirimu.&rdquo;
            </p>
            <Link
              href="/"
              className="btn-glass-gold-light"
              style={{ fontSize: "10px", padding: "10px 20px" }}
            >
              BELANJA SEKARANG
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
