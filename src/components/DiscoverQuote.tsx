"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLoading } from "./LoadingContext";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Stable image arrays at module level ── */
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
   FLIP CARD
   - 3 images cycling through face A and B
   - Entrance flip: triggered by shouldStart + entranceDelay
   - Auto-flip: starts at autoStartDelay, repeats every 7s
   - Click: instant flip + resets auto-flip timer
   ══════════════════════════════════════════════════════════ */
function FlipCard({
  images,
  alt,
  href,
  label,
  entranceDelay,
  autoStartDelay,
  shouldStart,
  isMobile,
}: {
  images: [string, string, string];
  alt: string;
  href: string;
  label: string;
  entranceDelay: number;
  autoStartDelay: number;
  shouldStart: boolean;
  isMobile?: boolean;
}) {
  const [flipCount, setFlipCount] = useState(0);
  const [faceAImg, setFaceAImg] = useState(images[0]);
  const [faceBImg, setFaceBImg] = useState(images[1]);
  const nextImgIdx = useRef(2);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const autoTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const entranceTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const imagesRef = useRef(images);
  const startedRef = useRef(false);

  const doFlip = useCallback(() => {
    setFlipCount((c) => c + 1);
  }, []);

  /* After each flip, swap the hidden face with the next image */
  useEffect(() => {
    if (flipCount === 0) return;
    const imgs = imagesRef.current;
    const timer = setTimeout(() => {
      const isAHidden = flipCount % 2 === 1;
      const img = imgs[nextImgIdx.current];
      nextImgIdx.current = (nextImgIdx.current + 1) % imgs.length;
      if (isAHidden) setFaceAImg(img);
      else setFaceBImg(img);
    }, isMobile ? 500 : 900);
    return () => clearTimeout(timer);
  }, [flipCount, isMobile]);

  /* Entrance flip + auto-flip setup */
  useEffect(() => {
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    /* Entrance flip */
    entranceTimerRef.current = setTimeout(doFlip, entranceDelay * 1000);

    /* Auto-flip: first tick at autoStartDelay, then every 7s */
    autoTimerRef.current = setTimeout(() => {
      doFlip();
      intervalRef.current = setInterval(doFlip, 7000);
    }, autoStartDelay * 1000);

    return () => {
      clearTimeout(entranceTimerRef.current);
      clearTimeout(autoTimerRef.current);
      clearInterval(intervalRef.current);
    };
  }, [shouldStart, entranceDelay, autoStartDelay, doFlip]);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      clearTimeout(entranceTimerRef.current);
      clearTimeout(autoTimerRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  /* Click: flip immediately + reset auto-flip timer to 7s from now */
  const handleClick = () => {
    doFlip();
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(doFlip, 7000);
  };

  const rotation = flipCount * 180;

  /* ── MOBILE RENDER ── */
  if (isMobile) {
    return (
      <div className="flex-1 flex flex-col">
        <div
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

  /* ── DESKTOP RENDER ── */
  return (
    <div className="flex-1 flex flex-col">
      <div
        className="relative cursor-pointer card-glow group"
        style={{ perspective: "1200px" }}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: "2 / 3" }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={
            shouldStart
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.92 }
          }
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
   MOBILE SECTION — premium entrance animations
   
   Uses TWO conditions before animating:
   1. isFullyLoaded — loading screen has FULLY exited
   2. isInView — section is visible in viewport
   
   Both must be true → shouldAnimate (once-only, stays true forever)
   ══════════════════════════════════════════════════════════ */
function MobileSection({
  card1Images,
  card2Images,
}: {
  card1Images: [string, string, string];
  card2Images: [string, string, string];
}) {
  const { isFullyLoaded } = useLoading();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  /* Once both conditions are met, lock shouldAnimate = true forever */
  useEffect(() => {
    if (isFullyLoaded && isInView && !shouldAnimate) {
      setShouldAnimate(true);
    }
  }, [isFullyLoaded, isInView, shouldAnimate]);

  return (
    <section ref={sectionRef} className="md:hidden">
      {/* ── Discover Header ── */}
      <div
        className="relative px-6 pt-10 pb-7 overflow-hidden"
        style={{ background: "#F5F0EB" }}
      >
        <div className="relative">
          {/* Gold line — draws in from left */}
          <motion.div
            className="h-[1px] mb-4 gold-line-pulse gpu-layer"
            style={{
              background: "linear-gradient(90deg, #C9A96E, transparent)",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={
              shouldAnimate
                ? { width: 40, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ delay: 0, duration: 1.2, ease: lux }}
          />

          {/* Title — slides from left with blur dissolve */}
          <motion.h2
            className="font-serif italic gold-shimmer-text mb-3"
            style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={
              shouldAnimate
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 0, x: -40, filter: "blur(8px)" }
            }
            transition={{ delay: 0.15, duration: 1.0, ease: lux }}
          >
            Jelajahi
            <br />
            Koleksi Kami
          </motion.h2>

          {/* Description — fades up */}
          <motion.p
            className="text-[#7D7168] mb-5"
            style={{
              fontSize: "12.5px",
              lineHeight: 1.65,
              maxWidth: "270px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.4, duration: 0.9, ease: lux }}
          >
            Fashion premium dengan sentuhan modern — dirancang untuk mereka
            yang mengutamakan kualitas dan gaya.
          </motion.p>

          {/* Buttons — staggered fade up */}
          <div className="flex gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                shouldAnimate
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{ delay: 0.6, duration: 0.7, ease: lux }}
            >
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "9.5px", padding: "9px 16px" }}
              >
                LIHAT KOLEKSI
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                shouldAnimate
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{ delay: 0.75, duration: 0.7, ease: lux }}
            >
              <Link
                href="/"
                className="btn-glass-gold"
                style={{ fontSize: "9.5px", padding: "9px 16px" }}
              >
                TENTANG KAMI
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient transition — cream to dark */}
      <motion.div
        style={{
          height: "48px",
          background: "linear-gradient(to bottom, #F5F0EB, #3B2F2F)",
        }}
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: lux }}
      />

      {/* ── Flip Cards ── */}
      <div
        className="relative px-4 py-5"
        style={{ background: "#3B2F2F" }}
      >
        <motion.div
          className="relative flex gap-2.5"
          initial={{ opacity: 0, y: 30 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ delay: 0.5, duration: 1.0, ease: lux }}
        >
          {/* Both cards flip simultaneously on entrance (1.0s delay).
              Then card 1 auto-flips at 8.0s, card 2 at 10.0s (2s stagger).
              After that, both repeat every 7s maintaining the 2s offset. */}
          <FlipCard
            images={card1Images}
            alt="Koleksi fashion premium Brutos ID"
            href="/"
            label="LIHAT KOLEKSI"
            entranceDelay={1.0}
            autoStartDelay={8.0}
            shouldStart={shouldAnimate}
            isMobile
          />
          <FlipCard
            images={card2Images}
            alt="Koleksi premium Brutos ID — fashion modern"
            href="/"
            label="TENTANG KAMI"
            entranceDelay={1.0}
            autoStartDelay={10.0}
            shouldStart={shouldAnimate}
            isMobile
          />
        </motion.div>
      </div>

      {/* ── Quote — dramatic entrance ── */}
      <div
        className="relative px-6 pt-8 pb-10"
        style={{ background: "#3B2F2F" }}
      >
        <div className="relative">
          {/* Gold line draws in */}
          <motion.div
            className="h-[1px] mb-5 gold-line-pulse gpu-layer"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,169,110,0.5), transparent)",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={
              shouldAnimate
                ? { width: 35, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ delay: 1.6, duration: 1.2, ease: lux }}
          />

          {/* Quote text — fades in from left with blur */}
          <motion.p
            className="font-serif italic mb-5"
            style={{
              fontSize: "22px",
              lineHeight: 1.35,
              color: "#F0EBE4",
            }}
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            animate={
              shouldAnimate
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 0, x: -30, filter: "blur(6px)" }
            }
            transition={{ delay: 1.8, duration: 1.0, ease: lux }}
          >
            &ldquo;Berpakaian baik,
            <br />
            hidup lebih baik,
            <br />
            jadilah versi terbaik dirimu.&rdquo;
          </motion.p>

          {/* Button — fades up */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              shouldAnimate
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 15 }
            }
            transition={{ delay: 2.1, duration: 0.7, ease: lux }}
          >
            <Link
              href="/"
              className="btn-glass-gold-light"
              style={{ fontSize: "10px", padding: "10px 20px" }}
            >
              BELANJA SEKARANG
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN — DESKTOP + MOBILE
   ══════════════════════════════════════════════════════════ */
export default function DiscoverQuote() {
  const { isLoaded } = useLoading();
  const desktopCardsRef = useRef<HTMLDivElement>(null);
  const desktopInView = useInView(desktopCardsRef, {
    once: true,
    amount: 0.15,
  });
  const [desktopReady, setDesktopReady] = useState(false);

  useEffect(() => {
    if (isLoaded && desktopInView && !desktopReady) {
      setDesktopReady(true);
    }
  }, [isLoaded, desktopInView, desktopReady]);

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
          <div ref={desktopCardsRef} className="flex gap-4">
            <FlipCard
              images={card1Images}
              alt="Koleksi fashion premium Brutos ID — gaya maskulin modern"
              href="/"
              label="LIHAT KOLEKSI"
              entranceDelay={0.6}
              autoStartDelay={7.6}
              shouldStart={desktopReady}
            />
            <FlipCard
              images={card2Images}
              alt="Flatlay koleksi premium Brutos ID — fashion modern berkelas"
              href="/"
              label="TENTANG KAMI"
              entranceDelay={2.0}
              autoStartDelay={9.6}
              shouldStart={desktopReady}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ MOBILE (<md) ═══════════════ */}
      <MobileSection card1Images={card1Images} card2Images={card2Images} />
    </>
  );
}
