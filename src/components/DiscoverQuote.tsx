import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════ DESKTOP (md+) ═══════ */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #EDE6DD 38%, #4A3728 38%)",
        }}
      >
        <div className="relative max-w-[1060px] mx-auto px-5 sm:px-8">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "36% 1fr",
              minHeight: "580px",
            }}
          >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col">
              {/* Cream area — Discover heading + subtitle + buttons */}
              <div style={{ flex: "0 0 38%" }} className="flex flex-col justify-end pb-8">
                <h2 className="font-serif text-[34px] lg:text-[38px] xl:text-[42px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3">
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

              {/* Dark area — Quote + SHOP NOW */}
              <div style={{ flex: "1 1 62%" }} className="flex flex-col justify-start pt-10">
                <p className="font-serif text-[22px] lg:text-[26px] xl:text-[30px] italic text-[#F5F0EB] leading-[1.35] mb-6">
                  &ldquo;Dress well,<br />live well, be a gentleman.&rdquo;
                </p>
                <div>
                  <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Two portrait images + white labels ── */}
            <div className="flex flex-col py-4">
              {/* Two tall portrait images side-by-side */}
              <div className="flex gap-4 flex-1 min-h-0">
                <div className="relative flex-1 rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                    alt="Shop Collection"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
                <div className="relative flex-1 rounded-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                    alt="About Us"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
              </div>

              {/* White label bars below each image */}
              <div className="flex gap-4 mt-3">
                <Link
                  href="/shop"
                  className="flex-1 bg-white border border-[#D5CFC7] py-3 text-center block hover:bg-[#F8F5F1] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12px] lg:text-[13px] tracking-[0.12em] uppercase font-medium">
                    SHOP COLLECTION
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex-1 bg-white border border-[#D5CFC7] py-3 text-center block hover:bg-[#F8F5F1] transition-colors"
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

      {/* ═══════ MOBILE (<md) ═══════ */}
      <section className="md:hidden">
        <div className="bg-[#EDE6DD] px-5 pt-10 pb-8">
          <h2 className="font-serif text-[28px] font-bold italic text-[#3B2F2F] leading-[1.1] mb-3">
            Discover the Collection
          </h2>
          <p className="text-[#8C7E74] text-[14px] leading-[1.6] mb-5 max-w-[300px]">
            Sophisticated pieces crafted for the modern gentleman.
          </p>
          <div className="flex gap-3">
            <Link href="/shop" className="btn-gold text-[11px] px-4 py-2.5">SHOP COLLECTION</Link>
            <Link href="/about" className="btn-gold text-[11px] px-4 py-2.5">ABOUT US</Link>
          </div>
        </div>
        <div className="bg-[#3C2A21] px-5 pt-8 pb-10">
          <p className="font-serif text-[22px] italic text-[#F5F0EB] leading-[1.35] mb-5">
            &ldquo;Dress well, live well, be a gentleman.&rdquo;
          </p>
          <Link href="/shop" className="btn-gold text-[11px] px-5 py-2.5">SHOP NOW</Link>
        </div>
      </section>
    </>
  );
}
