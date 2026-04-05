import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[54px] lg:mt-[58px]">
      {/* DESKTOP — photo is full-width, man on left, beige wall on right, text on wall */}
      <div className="hidden md:block relative w-full" style={{ height: "clamp(480px, 68vh, 720px)" }}>
        <Image
          src="/hero.jpg"
          alt="Gentleman in tan blazer"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "25% center" }}
          sizes="100vw"
        />
        {/* Text positioned on the right side (sits on the beige wall of the photo) */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto w-[40%] max-w-[440px] pr-[4%] xl:pr-[6%]">
            <h1 className="font-serif text-[42px] lg:text-[48px] xl:text-[54px] font-bold italic text-[#3B2F2F] leading-[1.06] mb-4">
              Elevate Your Style
            </h1>
            <p className="text-[#8C7E74] text-[14.5px] lg:text-[15.5px] leading-[1.65] mb-7 max-w-[340px]">
              Timeless attire for the modern man who values sophistication and class.
            </p>
            <Link href="/shop" className="btn-dark">SHOP NOW</Link>
          </div>
        </div>
      </div>

      {/* MOBILE — stacked: photo on top, text below */}
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
          <Link href="/shop" className="btn-dark text-[12px] px-6 py-2.5">SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
}
