import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <>
      {/* ═══════════════════════ DESKTOP (md+) ═══════════════════════ */}
      <section className="hidden md:block relative overflow-hidden">
        {/* ── Full-width split background ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Top: cream paper texture */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: "48%",
              backgroundImage: "url('/paper-texture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Bottom: brown stone texture */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "52%",
              backgroundImage: "url('/brown-texture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* ── Content grid ── */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "1280px",
            padding: "40px 48px 32px",
            display: "grid",
            gridTemplateColumns: "38% 1fr",
            gap: "36px",
          }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col self-stretch">
            {/* Top cream zone: heading + buttons */}
            <div
              className="flex flex-col justify-end"
              style={{ flex: "0 0 48%", paddingBottom: "28px" }}
            >
              <h2
                className="font-serif italic text-[#3B2F2F]"
                style={{
                  fontSize: "clamp(32px, 3vw, 48px)",
                  lineHeight: 1.08,
                  fontWeight: 400,
                }}
              >
                Discover the
                <br />
                Collection
              </h2>
              <p
                className="text-[#7D7168] mt-3"
                style={{
                  fontSize: "clamp(13px, 1vw, 15px)",
                  lineHeight: 1.6,
                  maxWidth: "340px",
                }}
              >
                Sophisticated pieces crafted for the modern gentleman.
              </p>
              <div className="flex gap-3 mt-6">
                <Link
                  href="/shop"
                  className="btn-gold"
                  style={{
                    fontSize: "11.5px",
                    letterSpacing: "0.12em",
                    padding: "10px 22px",
                  }}
                >
                  SHOP COLLECTION
                </Link>
                <Link
                  href="/about"
                  className="btn-gold"
                  style={{
                    fontSize: "11.5px",
                    letterSpacing: "0.12em",
                    padding: "10px 22px",
                  }}
                >
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Bottom brown zone: quote + button */}
            <div
              className="flex flex-col justify-start"
              style={{ flex: "0 0 52%", paddingTop: "36px" }}
            >
              <p
                className="font-serif italic text-[#F0EBE4]"
                style={{
                  fontSize: "clamp(20px, 2vw, 32px)",
                  lineHeight: 1.35,
                }}
              >
                &ldquo;Dress well,
                <br />
                live well, be a gentleman.&rdquo;
              </p>
              <div className="mt-6">
                <Link
                  href="/shop"
                  className="btn-gold"
                  style={{
                    fontSize: "11.5px",
                    letterSpacing: "0.12em",
                    padding: "10px 22px",
                  }}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — image cards + labels ─── */}
          <div className="flex flex-col">
            {/* Two 3:5 portrait image cards */}
            <div className="flex gap-4">
              <div
                className="relative flex-1 overflow-hidden"
                style={{ aspectRatio: "2 / 3" }}
              >
                <Image
                  src="/collection-model.jpg"
                  alt="Shop Collection"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 28vw, 50vw"
                  priority
                />
              </div>
              <div
                className="relative flex-1 overflow-hidden"
                style={{ aspectRatio: "2 / 3" }}
              >
                <Image
                  src="/collection-flatlay.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 28vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* White label strips — flush below images */}
            <div className="flex gap-4 mt-0">
              <Link
                href="/shop"
                className="flex-1 bg-white text-center block hover:bg-[#F8F5F1] transition-colors"
                style={{
                  padding: "14px 0",
                  borderTop: "none",
                }}
              >
                <span
                  className="text-[#3B2F2F] uppercase font-medium"
                  style={{ fontSize: "13px", letterSpacing: "0.14em" }}
                >
                  SHOP COLLECTION
                </span>
              </Link>
              <Link
                href="/about"
                className="flex-1 bg-white text-center block hover:bg-[#F8F5F1] transition-colors"
                style={{
                  padding: "14px 0",
                  borderTop: "none",
                }}
              >
                <span
                  className="text-[#3B2F2F] uppercase font-medium"
                  style={{ fontSize: "13px", letterSpacing: "0.14em" }}
                >
                  ABOUT US
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MOBILE (<md) ═══════════════════════ */}
      <section className="md:hidden">
        {/* Cream zone */}
        <div
          className="px-5 pt-10 pb-8"
          style={{
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="font-serif italic text-[#3B2F2F] mb-3"
            style={{ fontSize: "28px", lineHeight: 1.08, fontWeight: 400 }}
          >
            Discover the Collection
          </h2>
          <p
            className="text-[#7D7168] mb-5"
            style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "300px" }}
          >
            Sophisticated pieces crafted for the modern gentleman.
          </p>
          <div className="flex gap-3">
            <Link
              href="/shop"
              className="btn-gold"
              style={{ fontSize: "11px", padding: "9px 16px" }}
            >
              SHOP COLLECTION
            </Link>
            <Link
              href="/about"
              className="btn-gold"
              style={{ fontSize: "11px", padding: "9px 16px" }}
            >
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Two 3:5 image cards + labels */}
        <div
          className="px-4 py-4"
          style={{
            backgroundImage: "url('/brown-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden" style={{ aspectRatio: "2 / 3" }}>
              <Image
                src="/collection-model.jpg"
                alt="Shop Collection"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "2 / 3" }}>
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
              className="bg-white py-3 text-center hover:bg-[#F8F5F1] transition-colors"
            >
              <span
                className="text-[#3B2F2F] uppercase font-medium"
                style={{ fontSize: "11px", letterSpacing: "0.12em" }}
              >
                SHOP COLLECTION
              </span>
            </Link>
            <Link
              href="/about"
              className="bg-white py-3 text-center hover:bg-[#F8F5F1] transition-colors"
            >
              <span
                className="text-[#3B2F2F] uppercase font-medium"
                style={{ fontSize: "11px", letterSpacing: "0.12em" }}
              >
                ABOUT US
              </span>
            </Link>
          </div>
        </div>

        {/* Dark quote zone */}
        <div
          className="px-5 pt-8 pb-10"
          style={{
            backgroundImage: "url('/brown-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <p
            className="font-serif italic text-[#F0EBE4] mb-5"
            style={{ fontSize: "22px", lineHeight: 1.35 }}
          >
            &ldquo;Dress well, live well, be a gentleman.&rdquo;
          </p>
          <Link
            href="/shop"
            className="btn-gold"
            style={{ fontSize: "11px", padding: "9px 20px" }}
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </>
  );
}
