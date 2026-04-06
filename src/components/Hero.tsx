"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Stagger helper — entrance after loading screen (~3.5s) */
const appear = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay: 3.3 + delay, duration: 0.9, ease },
});

export default function Hero() {
  return (
    <section className="relative mt-[68px] lg:mt-[74px]">
      {/* DESKTOP */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        style={{ aspectRatio: "16/10", maxHeight: "48vh" }}
      >
        {/* Image with subtle zoom-in on load */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, duration: 1.8, ease }}
        >
          <Image
            src="/hero.jpg"
            alt="Gentleman in tan blazer"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "25% center" }}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[48%] max-w-[540px] pr-[5%] xl:pr-[7%]">
            <motion.h1
              className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-4"
              {...appear(0)}
            >
              Elevate Your Style
            </motion.h1>
            <motion.p
              className="text-[#6B5E54] text-[15px] lg:text-[16px] leading-[1.7] mb-7 max-w-[400px]"
              {...appear(0.18)}
            >
              Timeless attire for the modern man who values sophistication and class.
            </motion.p>
            <motion.div {...appear(0.35)}>
              <Link href="/shop" className="btn-gold px-10 py-[13px] text-[13px]">
                SHOP NOW
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/10" }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, duration: 1.5, ease }}
        >
          <Image
            src="/hero.jpg"
            alt="Gentleman in tan blazer"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "30% center" }}
            sizes="100vw"
          />
        </motion.div>
        <div className="bg-[#EDE6DD] px-6 py-8">
          <motion.h1
            className="font-serif text-[30px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3"
            {...appear(0)}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            className="text-[#6B5E54] text-[14px] leading-[1.65] mb-6 max-w-[300px]"
            {...appear(0.18)}
          >
            Timeless attire for the modern man who values sophistication and class.
          </motion.p>
          <motion.div {...appear(0.35)}>
            <Link href="/shop" className="btn-gold text-[12px] px-8 py-3">
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
