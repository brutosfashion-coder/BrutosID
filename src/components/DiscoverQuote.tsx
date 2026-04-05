import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════ DESKTOP (md+) ═══════ */}
      <section
        className="hidden md:block"
        style={{ background: "linear-gradient(to bottom, #EDE6DD 43%, #3C2A21 43%)" }}
      >
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div
            className="grid grid-cols-[37%_1fr] gap-7"
            style={{ minHeight: "580px" }}
          >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col">
              {/* Cream area — Discover */}
              <div className="flex-[43] flex flex-col justify-end pb-6">
                <h2 className="font-serif text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-[#3B2F2F] leading-[1.08] mb-3">
                  Discover the<br />Collection
                </h2>
                <p className="text-[#8C7E74] text-[14px] lg:text-[15px] leading-[1.6] mb-6 max-w-[300px]">
                  Sophisticated pieces crafted for the modern gentleman.
                </p>
                <div className="flex gap-3">
                  <Link href="/shop" className="btn-gold text-[11px] px-4 lg:px-5 py-2.5">
                    SHOP COLLECTION
                  </Link>
                  <Link href="/about" className="btn-gold text-[11px] px-4 lg:px-5 py-2.5">
                    ABOUT US
                  </Link>
                </div>
              </div>

              {/* Dark area — Quote */}
              <div className="flex-[57] flex flex-col justify-start pt-8">
                <p className="font-serif text-[22px] lg:text-[26px] xl:text-[28px] italic text-[#F5F0EB] leading-[1.35] mb-6">
                  &ldquo;Dress well,<br />live well, be a gentleman.&rdquo;
                </p>
                <div>
                  <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Two portrait images + labels ── */}
            <div className="flex flex-col py-3">
              {/* Two tall portrait images */}
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

              {/* Labels below images — cream bg, dark text */}
              <div className="flex gap-3 mt-3 pb-3">
                <Link
                  href="/shop"
                  className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-3 text-center block hover:bg-[#E8E0D5] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12px] lg:text-[13px] tracking-[0.12em] uppercase font-medium">
                    SHOP COLLECTION
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex-1 bg-[#F5F0EB] border border-[#C5B9A8]/60 py-3 text-center block hover:bg-[#E8E0D5] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12px] lg:text-[13px] tracking-[0.12em] uppercase font-medium">
                    ABOUT US
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MOBILE (<md) — NO images, clean layout ═══════ */}
      <section className="md:hidden">
        {/* Cream area */}
        <div className="bg-[#EDE6DD] px-5 pt-10 pb-8">
          <h2 className="font-serif text-[28px] font-bold text-[#3B2F2F] leading-[1.1] mb-3">
            Discover the Collection
          </h2>
          <p className="text-[#8C7E74] text-[14px] leading-[1.6] mb-5 max-w-[300px]">
            Sophisticated pieces crafted for the modern gentleman.
          </p>
          <div className="flex gap-3">
            <Link href="/shop" className="btn-gold text-[11px] px-4 py-2.5">
              SHOP COLLECTION
            </Link>
            <Link href="/about" className="btn-gold text-[11px] px-4 py-2.5">
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Dark area */}
        <div className="bg-[#3C2A21] px-5 pt-8 pb-10">
          <p className="font-serif text-[22px] italic text-[#F5F0EB] leading-[1.35] mb-5">
            &ldquo;Dress well, live well, be a gentleman.&rdquo;
          </p>
          <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
            SHOP NOW
          </Link>
        </div>
      </section>
    </>
  );
}
