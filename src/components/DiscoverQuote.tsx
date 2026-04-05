import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <section
      className="relative"
      style={{ background: "linear-gradient(to bottom, #F5F0EB 50%, #3C2A21 50%)" }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN: stacked text blocks */}
          <div className="w-full lg:w-[42%] flex flex-col justify-between py-16 lg:py-20">
            {/* Top: Discover (cream area) */}
            <div className="pb-12 lg:pb-16">
              <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[44px] font-bold text-brand-charcoal leading-[1.1] mb-4">
                Discover the<br/>Collection
              </h2>
              <p className="text-brand-muted text-[15px] leading-relaxed mb-8 max-w-sm">
                Sophisticated pieces crafted for the modern gentleman.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/shop" className="btn-gold px-7 py-3 rounded-sm text-[13px]">
                  SHOP COLLECTION
                </Link>
                <Link href="/about" className="btn-gold px-7 py-3 rounded-sm text-[13px]">
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Bottom: Quote (dark area) */}
            <div className="pt-8 lg:pt-12">
              <p className="font-serif italic text-[26px] sm:text-[30px] lg:text-[34px] text-brand-cream leading-snug mb-8">
                &ldquo;Dress well,<br/>live well, be a gentleman.&rdquo;
              </p>
              <Link href="/shop" className="btn-gold px-8 py-3 rounded-sm text-[13px]">
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Two portrait images spanning both areas */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 gap-4 sm:gap-5 py-10 lg:py-16">
            {/* Image 1 */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-brand-gold/50 flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80"
                  alt="Man in blazer"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 28vw"
                />
              </div>
              <div className="border border-brand-cream/40 py-3 text-center mt-0">
                <span className="text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.15em] text-brand-cream">
                  SHOP COLLECTION
                </span>
              </div>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-brand-gold/50 flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                  alt="Outfit flat lay"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 28vw"
                />
              </div>
              <div className="border border-brand-cream/40 py-3 text-center mt-0">
                <span className="text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.15em] text-brand-cream">
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
