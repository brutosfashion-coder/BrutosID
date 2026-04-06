import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[54px] lg:mt-[58px]">
      {/* DESKTOP */}
      <div className="hidden md:block relative w-full" style={{ height: "clamp(400px, 52vh, 580px)" }}>
        <Image
          src="/hero.jpg"
          alt="Gentleman in tan blazer"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "25% center" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[42%] max-w-[460px] pr-[4%] xl:pr-[6%]">
            <h1 className="font-serif text-[40px] lg:text-[46px] xl:text-[52px] font-bold italic text-[#3B2F2F] leading-[1.06] mb-4">
              Elevate Your Style
            </h1>
            <p className="text-[#8C7E74] text-[14.5px] lg:text-[15.5px] leading-[1.65] mb-7 max-w-[340px]">
              Timeless attire for the modern man who values sophistication and class.
            </p>
            <Link href="/shop" className="btn-gold text-[13px] px-8 py-[11px]">SHOP NOW</Link>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="relative w-full" style={{ height: "55vw", maxHeight: "320px" }}>
          <Image
            src="/hero.jpg"
            alt="Gentleman in tan blazer"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "30% center" }}
            sizes="100vw"
          />
        </div>
        <div className="bg-[#EDE6DD] px-6 py-8">
          <h1 className="font-serif text-[30px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3">
            Elevate Your Style
          </h1>
          <p className="text-[#8C7E74] text-[14px] leading-[1.65] mb-6 max-w-[280px]">
            Timeless attire for the modern man who values sophistication and class.
          </p>
          <Link href="/shop" className="btn-gold text-[12px] px-6 py-2.5">SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
}
