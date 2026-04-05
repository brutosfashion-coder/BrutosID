import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row mt-16 lg:mt-[72px]">
      {/* Image Side - Left 55% */}
      <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-auto min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80"
          alt="Gentleman in tan blazer seated in leather chair"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>

      {/* Text Side - Right 45% with warm textured background */}
      <div className="relative w-full lg:w-[45%] bg-brand-beige bg-textured flex items-center">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] font-bold text-brand-brown mb-6">
            Elevate Your
            <br />
            Style
          </h1>
          <p className="text-brand-charcoal/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md font-light">
            Timeless attire for the modern man who values sophistication and
            class.
          </p>
          <Link
            href="/shop"
            className="btn-gold rounded-[4px] px-10 py-3.5 tracking-[0.2em]"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
