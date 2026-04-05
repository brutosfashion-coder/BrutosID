import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[60px] lg:mt-[64px] bg-brand-beige bg-textured overflow-hidden">
      <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[85vh]">
        {/* Background image — covers entire section, man on left */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[68%]">
          <Image
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=90"
            alt="Gentleman in tan blazer"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 68vw"
          />
          {/* Gradient fade: image blends smoothly into cream bg */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 15%, rgba(237,230,221,0.15) 35%, rgba(237,230,221,0.5) 55%, rgba(237,230,221,0.85) 70%, #EDE6DD 85%)",
            }}
          />
        </div>

        {/* Paper texture overlay on right area (blends with bg) */}
        <div className="absolute inset-y-0 right-0 w-[50%] bg-textured hidden lg:block pointer-events-none" />

        {/* Text content — right side */}
        <div className="relative z-10 h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[85vh] flex items-center">
          {/* Mobile: overlay on image */}
          <div className="lg:hidden w-full px-6 sm:px-10 py-16 bg-brand-beige/80 bg-textured">
            <h1 className="font-serif text-[34px] sm:text-[42px] font-bold text-brand-charcoal leading-[1.06] italic mb-4">
              Elevate Your Style
            </h1>
            <p className="text-brand-muted text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-[320px]">
              Timeless attire for the modern man who values sophistication and class.
            </p>
            <Link href="/shop" className="btn-dark">
              SHOP NOW
            </Link>
          </div>

          {/* Desktop: positioned right */}
          <div className="hidden lg:block ml-auto mr-[6%] xl:mr-[8%] w-full max-w-[400px] xl:max-w-[420px]">
            <h1 className="font-serif text-[48px] xl:text-[54px] font-bold text-brand-charcoal leading-[1.06] italic mb-5">
              Elevate Your{"\u00A0"}Style
            </h1>
            <p className="text-brand-muted text-[15px] xl:text-[16px] leading-relaxed mb-9 max-w-[340px]">
              Timeless attire for the modern man who values sophistication and class.
            </p>
            <Link href="/shop" className="btn-dark">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
