import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-[64px] lg:mt-[68px] flex flex-col lg:flex-row min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-68px)]">
      {/* Left: Image */}
      <div className="relative w-full lg:w-[55%] h-[50vh] sm:h-[60vh] lg:h-auto min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=85"
          alt="Gentleman in tan blazer"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-[45%] bg-brand-beige bg-textured flex items-center justify-center">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0 max-w-md">
          <h1 className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-brand-charcoal leading-[1.08] mb-6">
            Elevate Your
            <br />
            Style
          </h1>
          <p className="text-brand-muted text-[15px] sm:text-base leading-relaxed mb-10 max-w-[340px]">
            Timeless attire for the modern man who values sophistication and class.
          </p>
          <Link href="/shop" className="btn-gold px-10 py-3.5">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
