import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════ DESKTOP (md+) ═══════ */}
      <section className="hidden md:block relative overflow-hidden">
        {/* Background split layers */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top: cream / paper texture */}
          <div
            className="h-[45%]"
            style={{
              backgroundImage: "url('/paper-texture.jpg')",
              backgroundSize: "600px 600px",
              backgroundRepeat: "repeat",
            }}
          />
          {/* Bottom: dark brown textured */}
          <div
            className="h-[55%]"
            style={{
              backgroundColor: "#4A3728",
              backgroundImage:
                "url('/texture.png'), linear-gradient(170deg, rgba(139,123,107,0.35) 0%, rgba(74,55,40,0.9) 40%, rgba(60,42,33,1) 100%)",
              backgroundSize: "150px 150px, cover",
              backgroundRepeat: "repeat, no-repeat",
              backgroundBlendMode: "overlay, normal",
            }}
          />
        </div>

        <div className="relative max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "38% 1fr",
              gap: "24px",
              minHeight: "640px",
            }}
          >
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col">
              {/* Cream area — heading + subtitle + buttons */}
              <div style={{ flex: "0 0 45%" }} className="flex flex-col justify-end pb-7">
                <h2 className="font-serif text-[34px] lg:text-[38px] xl:text-[42px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3">
                  Discover the
                  <br />
                  Collection
                </h2>
                <p className="text-[#8C7E74] text-[14px] lg:text-[15px] leading-[1.65] mb-7 max-w-[320px]">
                  Sophisticated pieces crafted for the modern gentleman.
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/shop"
                    className="btn-gold text-[11px] px-4 lg:px-5 py-2.5"
                  >
                    SHOP COLLECTION
                  </Link>
                  <Link
                    href="/about"
                    className="btn-gold text-[11px] px-4 lg:px-5 py-2.5"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>

              {/* Dark area — Quote + SHOP NOW */}
              <div
                style={{ flex: "1 1 55%" }}
                className="flex flex-col justify-start pt-9"
              >
                <p className="font-serif text-[22px] lg:text-[26px] xl:text-[30px] italic text-[#F5F0EB] leading-[1.35] mb-7">
                  &ldquo;Dress well,
                  <br />
                  live well, be a gentleman.&rdquo;
                </p>
                <div>
                  <Link
                    href="/shop"
                    className="btn-gold text-[11px] px-5 py-2.5"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Two portrait images + white labels ── */}
            <div className="flex flex-col py-5">
              {/* Two tall portrait images side-by-side */}
              <div className="flex gap-4 flex-1 min-h-0">
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src="/collection-model.jpg"
                    alt="Shop Collection"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    src="/collection-flatlay.jpg"
                    alt="About Us"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
              </div>

              {/* White label bars directly below each image */}
              <div className="flex gap-4 mt-0">
                <Link
                  href="/shop"
                  className="flex-1 bg-white border border-[#D5CFC7] py-3.5 text-center block hover:bg-[#F8F5F1] transition-colors"
                >
                  <span className="text-[#3B2F2F] text-[12px] lg:text-[13px] tracking-[0.12em] uppercase font-medium">
                    SHOP COLLECTION
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex-1 bg-white border border-[#D5CFC7] py-3.5 text-center block hover:bg-[#F8F5F1] transition-colors"
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
        {/* Cream area with paper texture */}
        <div
          className="px-5 pt-10 pb-8"
          style={{
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: "600px 600px",
            backgroundRepeat: "repeat",
          }}
        >
          <h2 className="font-serif text-[28px] font-bold italic text-[#3B2F2F] leading-[1.1] mb-3">
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

        {/* Two images side by side + labels */}
        <div className="px-5 py-4 bg-[#EDE6DD]">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/collection-model.jpg"
                alt="Shop Collection"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/collection-flatlay.jpg"
                alt="About Us"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <Link
              href="/shop"
              className="bg-white border border-[#D5CFC7] py-3 text-center"
            >
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                SHOP COLLECTION
              </span>
            </Link>
            <Link
              href="/about"
              className="bg-white border border-[#D5CFC7] py-3 text-center"
            >
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                ABOUT US
              </span>
            </Link>
          </div>
        </div>

        {/* Quote on dark textured bg */}
        <div
          className="px-5 pt-8 pb-10"
          style={{
            backgroundColor: "#4A3728",
            backgroundImage:
              "url('/texture.png'), linear-gradient(170deg, rgba(139,123,107,0.35) 0%, rgba(74,55,40,0.9) 40%, rgba(60,42,33,1) 100%)",
            backgroundSize: "150px 150px, cover",
            backgroundRepeat: "repeat, no-repeat",
            backgroundBlendMode: "overlay, normal",
          }}
        >
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
