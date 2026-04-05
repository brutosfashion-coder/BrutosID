import Image from "next/image";
import Link from "next/link";

export default function DiscoverCollection() {
  return (
    <section className="bg-brand-cream bg-textured py-20 lg:py-28">
      {/* Top divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-gold/20 mb-16 lg:mb-20" />

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Text - 40% */}
          <div className="w-full lg:w-[40%] lg:pt-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-brown leading-tight mb-6">
              Discover the
              <br />
              Collection
            </h2>
            <p className="text-brand-charcoal/55 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Sophisticated pieces crafted for the modern gentleman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-gold rounded-[3px]">
                SHOP COLLECTION
              </Link>
              <Link href="/about" className="btn-gold rounded-[3px]">
                ABOUT US
              </Link>
            </div>
          </div>

          {/* Right Images - 60% */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 gap-5 sm:gap-6">
            {/* Image 1 */}
            <div className="space-y-0">
              <div className="relative aspect-[3/4] overflow-hidden img-frame">
                <Image
                  src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80"
                  alt="Man wearing a blazer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="border border-[#C9A96E]/50 px-6 py-3 text-center mt-0">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-brand-brown">
                  SHOP COLLECTION
                </span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="space-y-0">
              <div className="relative aspect-[3/4] overflow-hidden img-frame">
                <Image
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                  alt="Flat lay outfit arrangement"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="border border-[#C9A96E]/50 px-6 py-3 text-center mt-0">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-brand-brown">
                  ABOUT US
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
