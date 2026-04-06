import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[70px] lg:mt-[76px]">
      {/* DESKTOP — 16:10 aspect ratio, capped so categories are visible */}
      <div
        className="hidden md:block relative w-full"
        style={{ aspectRatio: "16/10", maxHeight: "58vh" }}
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
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[46%] max-w-[520px] pr-[5%] xl:pr-[7%]">
            <h1 className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-4">
              Elevate Your Style
            </h1>
            <p className="text-[#6B5E54] text-[15px] lg:text-[16px] leading-[1.7] mb-7 max-w-[380px]">
              Timeless attire for the modern man who values sophistication and class.
            </p>
            <Link href="/shop" className="btn-gold text-[13px] px-9 py-[12px]">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE — 16:10 hero image + text below */}
      <div className="md:hidden">
        <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
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
          <p className="text-[#6B5E54] text-[14px] leading-[1.65] mb-6 max-w-[300px]">
            Timeless attire for the modern man who values sophistication and class.
          </p>
          <Link href="/shop" className="btn-gold text-[12px] px-7 py-2.5">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
