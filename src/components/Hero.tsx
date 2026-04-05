import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-[68px] flex flex-col lg:flex-row min-h-[calc(100vh-68px)]">
      {/* Left: Image */}
      <div className="relative w-full lg:w-[55%] h-[55vh] sm:h-[60vh] lg:h-auto">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80"
          alt="Man in tan blazer"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full lg:w-[45%] bg-brand-beige flex items-center justify-center">
        <div className="px-8 sm:px-12 lg:px-14 xl:px-20 py-14 lg:py-0 max-w-lg">
          <h1 className="font-serif text-[40px] sm:text-[48px] lg:text-[54px] font-bold text-brand-charcoal leading-[1.1] mb-5">
            Elevate Your<br/>Style
          </h1>
          <p className="text-brand-muted text-[15px] sm:text-base leading-relaxed mb-9 max-w-sm">
            Timeless attire for the modern man who values sophistication and class.
          </p>
          <Link href="/shop" className="btn-gold px-10 py-3.5 rounded-sm">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
