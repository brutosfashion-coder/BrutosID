"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const lux: [number, number, number, number] = [0.16, 1, 0.3, 1];

const appear = (delay: number) => ({
  initial: { opacity: 0, y: 70, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay: 4.5 + delay, duration: 1.6, ease: lux },
});

export default function Hero() {
  return (
    <section className="relative mt-[68px] lg:mt-[74px]">
      {/* ====== DESKTOP ====== */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        style={{ aspectRatio: "16/10", maxHeight: "48vh" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 4.2, duration: 3.5, ease: lux }}
        >
          <div className="absolute inset-0 hero-ken-burns" style={{ animationDelay: "7.7s" }}>
            <Image
              src="/hero.jpg"
              alt="Koleksi fashion pria premium Brutos ID — brand pakaian pria terbaik Indonesia"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "25% center" }}
              sizes="100vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 2 }}
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(59,47,47,0.12) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[48%] max-w-[540px] pr-[5%] xl:pr-[7%]">
            <motion.div
              className="h-[1px] mb-5"
              style={{
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ delay: 4.4, duration: 1.5, ease: lux }}
            />
            <motion.h1
              className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-4"
              {...appear(0)}
            >
              Wujudkan Gaya Terbaikmu
            </motion.h1>
            <motion.p
              className="text-[#6B5E54] text-[15px] lg:text-[16px] leading-[1.7] mb-7 max-w-[400px]"
              {...appear(0.3)}
            >
              Pakaian pria premium dengan sentuhan modern — dirancang khusus untuk pria Indonesia yang menghargai kualitas dan gaya berpakaian elegan.
            </motion.p>
            <motion.div {...appear(0.6)}>
              <Link
                href="/"
                className="btn-gold px-10 py-[13px] text-[13px]"
              >
                BELANJA SEKARANG
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ====== MOBILE ====== */}
      <div className="md:hidden">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/10" }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 4.2, duration: 2.5, ease: lux }}
        >
          <div className="absolute inset-0 hero-ken-burns" style={{ animationDelay: "6.7s" }}>
            <Image
              src="/hero.jpg"
              alt="Baju pria premium Brutos ID — fashion pria Indonesia berkualitas"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "30% center" }}
              sizes="100vw"
            />
          </div>
        </motion.div>
        <div className="bg-[#EDE6DD] px-6 py-8">
          <motion.div
            className="h-[1px] mb-4"
            style={{
              background: "linear-gradient(90deg, #C9A96E, transparent)",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 50, opacity: 1 }}
            transition={{ delay: 4.4, duration: 1.2, ease: lux }}
          />
          <motion.h1
            className="font-serif text-[30px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3"
            {...appear(0)}
          >
            Wujudkan Gaya Terbaikmu
          </motion.h1>
          <motion.p
            className="text-[#6B5E54] text-[14px] leading-[1.65] mb-6 max-w-[300px]"
            {...appear(0.25)}
          >
            Pakaian pria premium dengan sentuhan modern — dirancang untuk pria yang menghargai kualitas dan penampilan.
          </motion.p>
          <motion.div {...appear(0.5)}>
            <Link href="/" className="btn-gold text-[12px] px-8 py-3">
              BELANJA SEKARANG
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 6, duration: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-7 bg-[#3B2F2F]"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 6.5,
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
