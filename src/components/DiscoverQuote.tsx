import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════════════════════════════ DESKTOP (md+) ═══════════════════════════════ */}
      <section className="hidden md:block relative" style={{ minHeight: "620px" }}>
        {/* ── Full-width background split ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Top: cream paper texture */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "42%",
              backgroundImage: "url('/paper-texture.jpg')",
              backgroundSize: "600px 600px",
              backgroundRepeat: "repeat",
            }}
          />
          {/* Bottom: brown textured */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "58%",
              backgroundColor: "#4A3728",
              backgroundImage:
                "url('/texture.png'), linear-gradient(175deg, rgba(150,135,120,0.45) 0%, rgba(90,70,55,0.85) 35%, rgba(55,38,28,1) 100%)",
              backgroundSize: "150px 150px, cover",
              backgroundRepeat: "repeat, no-repeat",
              backgroundBlendMode: "overlay, normal",
            }}
          />
        </div>

        {/* ── Content grid ── */}
        <div
          className="relative grid mx-auto"
          style={{
            maxWidth: "1200px",
            padding: "0 32px",
            gridTemplateColumns: "37% 1fr",
            gap: "28px",
            minHeight: "620px",
          }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col">
            {/* Top: cream zone — title + subtitle + buttons */}
            <div
              className="flex flex-col justify-end"
              style={{ height: "42%", paddingBottom: "28px" }}
            >
              <h2
                className="font-serif italic text-[#3B2F2F] leading-[1.05]"
                style={{ fontSize: "clamp(34px, 3.2vw, 50px)", fontWeight: 700 }}
              >
                Discover the
                <br />
                Collection
              </h2>
              <p
                className="text-[#8C7E74] leading-[1.6] mt-3"
                style={{ fontSize: "clamp(13px, 1.05vw, 16px)", maxWidth: "340px" }}
              >
                Sophisticated pieces crafted for the modern gentleman.
              </p>
              <div className="flex gap-3 mt-6">
                <Link href="/shop" className="btn-gold text-[11.5px] tracking-[0.13em] px-5 py-2.5">
                  SHOP COLLECTION
                </Link>
                <Link href="/about" className="btn-gold text-[11.5px] tracking-[0.13em] px-5 py-2.5">
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Bottom: brown zone — quote + button */}
            <div
              className="flex flex-col justify-start"
              style={{ height: "58%", paddingTop: "32px" }}
            >
              <p
                className="font-serif italic text-[#F5F0EB] leading-[1.32]"
                style={{ fontSize: "clamp(22px, 2.2vw, 34px)" }}
              >
                &ldquo;Dress well,
                <br />
                live well, be a gentleman.&rdquo;
              </p>
              <div className="mt-6">
                <Link href="/shop" className="btn-gold text-[11.5px] tracking-[0.13em] px-5 py-2.5">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — portraits + labels ─── */}
          <div className="flex flex-col" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            {/* Two tall portrait images side-by-side */}
            <div className="flex gap-3 flex-1 min-h-0">
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src="/collection-model.jpg"
                  alt="Collection Model"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 30vw, 50vw"
                  priority
                />
              </div>
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src="/collection-flatlay.jpg"
                  alt="Collection Flatlay"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 30vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* White label bars below each image */}
            <div className="flex gap-3">
              <Link
                href="/shop"
                className="flex-1 bg-white border border-[#D5CFC7] text-center block hover:bg-[#F8F5F1] transition-colors"
                style={{ padding: "14px 0" }}
              >
                <span className="text-[#3B2F2F] text-[13px] tracking-[0.14em] uppercase font-medium">
                  SHOP COLLECTION
                </span>
              </Link>
              <Link
                href="/about"
                className="flex-1 bg-white border border-[#D5CFC7] text-center block hover:bg-[#F8F5F1] transition-colors"
                style={{ padding: "14px 0" }}
              >
                <span className="text-[#3B2F2F] text-[13px] tracking-[0.14em] uppercase font-medium">
                  ABOUT US
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MOBILE (<md) ═══════════════════════════════ */}
      <section className="md:hidden">
        {/* Cream zone */}
        <div
          className="px-5 pt-10 pb-8"
          style={{
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: "600px 600px",
            backgroundRepeat: "repeat",
          }}
        >
          <h2 className="font-serif text-[28px] font-bold italic text-[#3B2F2F] leading-[1.08] mb-3">
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

        {/* Two images + labels */}
        <div className="px-4 py-4 bg-[#EDE6DD]">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/collection-model.jpg"
                alt="Collection Model"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/collection-flatlay.jpg"
                alt="Collection Flatlay"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <Link href="/shop" className="bg-white border border-[#D5CFC7] py-3 text-center">
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                SHOP COLLECTION
              </span>
            </Link>
            <Link href="/about" className="bg-white border border-[#D5CFC7] py-3 text-center">
              <span className="text-[#3B2F2F] text-[11px] tracking-[0.12em] uppercase font-medium">
                ABOUT US
              </span>
            </Link>
          </div>
        </div>

        {/* Dark quote zone */}
        <div
          className="px-5 pt-8 pb-10"
          style={{
            backgroundColor: "#4A3728",
            backgroundImage:
              "url('/texture.png'), linear-gradient(175deg, rgba(150,135,120,0.45) 0%, rgba(90,70,55,0.85) 35%, rgba(55,38,28,1) 100%)",
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
