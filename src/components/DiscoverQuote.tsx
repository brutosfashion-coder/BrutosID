import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <section className="relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-[52] bg-brand-beige bg-textured" />
        <div className="flex-[48] bg-brand-brown" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1060px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-0 lg:gap-10">
          {/* LEFT COLUMN — text */}
          <div className="flex flex-col py-12 sm:py-16 lg:py-16">
            {/* Cream area: discover text + buttons */}
            <div className="flex-1 flex flex-col justify-end pb-10 lg:pb-14">
              <h2 className="font-serif text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-brand-charcoal leading-[1.1] mb-3">
                Discover the<br />Collection
              </h2>
              <p className="text-brand-muted text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[340px]">
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

            {/* Dark area: quote + button */}
            <div className="flex-1 flex flex-col justify-start pt-10 lg:pt-14">
              <p className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] italic text-brand-cream leading-[1.35] mb-6">
                &ldquo;Dress well,<br />
                live well, be a gentleman.&rdquo;
              </p>
              <div>
                <Link href="/shop" className="btn-gold text-[11px] px-6 py-2.5">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — two portrait images + labels */}
          <div className="flex flex-col py-6 lg:py-8">
            {/* Images row — tall portraits spanning both bg areas */}
            <div className="flex gap-3 sm:gap-4 flex-1">
              {/* Left portrait: Man in dark polo */}
              <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] border border-stone-300/50 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Shop Collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              {/* Right portrait: Flat lay accessories */}
              <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] border border-stone-300/50 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80"
                  alt="About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>

            {/* Labels below images — in the dark brown area */}
            <div className="flex gap-3 sm:gap-4 mt-3">
              <div className="flex-1 border border-brand-cream/40 py-3 text-center">
                <span className="text-brand-cream text-[13px] tracking-[0.12em] uppercase font-medium">
                  SHOP COLLECTION
                </span>
              </div>
              <div className="flex-1 border border-brand-cream/40 py-3 text-center">
                <span className="text-brand-cream text-[13px] tracking-[0.12em] uppercase font-medium">
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
