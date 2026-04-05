import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ───────── DESKTOP (lg+) ───────── */}
      <section
        className="relative hidden lg:block overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #EDE6DD 55%, #3C2A21 55%)" }}
      >
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div
            className="grid grid-cols-[37%_1fr] gap-8 items-stretch"
            style={{ minHeight: "600px" }}
          >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col">
              {/* Cream area – "Discover the Collection" */}
              <div className="flex-[55] flex flex-col justify-end pb-8">
                <h2 className="font-serif text-[36px] xl:text-[40px] font-bold text-[#3B2F2F] leading-[1.1] mb-3">
                  Discover the<br />Collection
                </h2>
                <p className="text-[#8C7E74] text-[14.5px] leading-[1.6] mb-6 max-w-[310px]">
                  Sophisticated pieces crafted for the modern gentleman.
                </p>
                <div className="flex gap-3">
                  <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
                    SHOP COLLECTION
                  </Link>
                  <Link href="/about" className="btn-gold text-[11px] px-5 py-2.5">
                    ABOUT US
                  </Link>
                </div>
              </div>

              {/* Dark area – quote */}
              <div className="flex-[45] flex flex-col justify-start pt-8">
                <p className="font-serif text-[24px] xl:text-[28px] italic text-[#F5F0EB] leading-[1.4] mb-6">
                  &ldquo;Dress well,<br />live well, be a gentleman.&rdquo;
                </p>
                <div>
                  <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN – two portrait images + labels ── */}
            <div className="flex flex-col py-4">
              {/* Two tall portraits */}
              <div className="flex gap-3 flex-1 min-h-0">
                <div className="relative flex-1 border border-[#C5B9A8]/50 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                    alt="Shop Collection"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
                <div className="relative flex-1 border border-[#C5B9A8]/50 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                    alt="About Us"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
              </div>

              {/* Labels below images – cream bg, dark text (in dark area) */}
              <div className="flex gap-3 mt-3 pb-4">
                <Link
                  href="/shop"
                  className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-3 text-center block hover:bg-[#E8E0D5] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12.5px] tracking-[0.13em] uppercase font-medium">
                    SHOP COLLECTION
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-3 text-center block hover:bg-[#E8E0D5] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12.5px] tracking-[0.13em] uppercase font-medium">
                    ABOUT US
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MOBILE / TABLET (<lg) ───────── */}
      <section className="lg:hidden">
        {/* Cream area */}
        <div className="bg-[#EDE6DD] px-5 sm:px-8 pt-10 pb-6">
          <h2 className="font-serif text-[28px] sm:text-[32px] font-bold text-[#3B2F2F] leading-[1.1] mb-3">
            Discover the Collection
          </h2>
          <p className="text-[#8C7E74] text-[14px] leading-[1.6] mb-5 max-w-[300px]">
            Sophisticated pieces crafted for the modern gentleman.
          </p>
          <div className="flex gap-3">
            <Link href="/shop" className="btn-gold text-[11px] px-4 py-2">
              SHOP COLLECTION
            </Link>
            <Link href="/about" className="btn-gold text-[11px] px-4 py-2">
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Dark area */}
        <div className="bg-[#3C2A21] px-5 sm:px-8 pt-0 pb-10">
          {/* Two images – pulled up into cream area with negative margin */}
          <div className="flex gap-3 -mt-0 mb-3">
            <div className="relative flex-1 aspect-[3/4] border border-[#C5B9A8]/50 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                alt="Shop Collection"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 aspect-[3/4] border border-[#C5B9A8]/50 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                alt="About Us"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Labels – cream bg, dark text */}
          <div className="flex gap-3 mb-8">
            <Link
              href="/shop"
              className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-2.5 text-center block"
            >
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                SHOP COLLECTION
              </span>
            </Link>
            <Link
              href="/about"
              className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-2.5 text-center block"
            >
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                ABOUT US
              </span>
            </Link>
          </div>

          {/* Quote */}
          <p className="font-serif text-[22px] sm:text-[26px] italic text-[#F5F0EB] leading-[1.35] mb-5">
            &ldquo;Dress well, live well, be a gentleman.&rdquo;
          </p>
          <Link href="/shop" className="btn-gold text-[11px] px-5 py-2">
            SHOP NOW
          </Link>
        </div>
      </section>
    </>
  );
}
