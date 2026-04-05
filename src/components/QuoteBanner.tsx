import Image from "next/image";
import Link from "next/link";

export default function QuoteBanner() {
  return (
    <section className="bg-brand-brown">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-24">
          <div>
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-brand-cream leading-snug mb-10">
              &ldquo;Dress well, live well,
              <br />
              be a gentleman.&rdquo;
            </p>
            <Link
              href="/shop"
              className="border border-brand-gold text-brand-cream uppercase tracking-wider px-8 py-3 text-sm font-medium transition-all duration-300 hover:bg-brand-gold hover:text-white inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-80 lg:h-auto min-h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73b4177fead?w=600&q=80"
            alt="Clothing and accessories flat lay"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
