import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <section className="relative">
      {/* Split background: top cream, bottom dark brown */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-[55] bg-brand-beige bg-textured" />
        <div className="flex-[45] bg-brand-brown" />
      </div>

      {/* Content grid */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-0 lg:gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between py-12 sm:py-16 lg:py-20">
            {/* Top: Discover text (cream area) */}
            <div className="mb-10 lg:mb-0">
              <h2 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-brand-charcoal leading-[1.1] mb-4">
                Discover the Collection
              </h2>
              <p className="text-brand-muted text-[15px] leading-relaxed mb-7 max-w-[360px]">
                Sophisticated pieces crafted for the modern gentleman.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
                  SHOP COLLECTION
                </Link>
                <Link href="/about" className="btn-gold text-[11px] px-5 py-2.5">
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Bottom: Quote text (dark brown area) */}
            <div className="mt-10 lg:mt-0">
              <p className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] italic text-brand-cream leading-[1.3] mb-6">
                &ldquo;Dress well,<br />
                live well, be a gentleman.&rdquo;
              </p>
              <Link href="/shop" className="btn-gold text-[11px] px-6 py-2.5">
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — Two portrait images spanning both areas + labels */}
          <div className="flex flex-col py-6 lg:py-10">
            {/* Images row */}
            <div className="flex gap-3 sm:gap-4 flex-1">
              {/* Left portrait — man in polo */}
              <div className="relative flex-1 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] border-[1.5px] border-stone-400/40 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Shop Collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 29vw"
                />
              </div>
              {/* Right portrait — flat lay */}
              <div className="relative flex-1 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] border-[1.5px] border-stone-400/40 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                  alt="About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 29vw"
                />
              </div>
            </div>

            {/* Labels below images — in dark area */}
            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="flex-1 border border-brand-cream/50 py-3 text-center">
                <span className="text-brand-cream text-[13px] sm:text-[14px] tracking-[0.12em] uppercase font-medium">
                  SHOP COLLECTION
                </span>
              </div>
              <div className="flex-1 border border-brand-cream/50 py-3 text-center">
                <span className="text-brand-cream text-[13px] sm:text-[14px] tracking-[0.12em] uppercase font-medium">
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
