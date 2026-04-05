import Image from "next/image";
import Link from "next/link";

export default function DiscoverQuote() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #EDE6DD 52%, #3C2A21 52%)" }}
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-[37%_1fr] gap-8 items-stretch" style={{ minHeight: "580px" }}>
          {/* LEFT — text + quote */}
          <div className="flex flex-col">
            {/* Cream area content (top 52%) */}
            <div className="flex-[52] flex flex-col justify-end pb-8">
              <h2 className="font-serif text-[36px] xl:text-[40px] font-bold text-[#3B2F2F] leading-[1.1] mb-3">
                Discover the<br />Collection
              </h2>
              <p className="text-[#8C7E74] text-[14.5px] leading-[1.6] mb-6 max-w-[310px]">
                Sophisticated pieces crafted for the modern gentleman.
              </p>
              <div className="flex gap-3">
                <Link href="/shop" className="btn-gold text-[11px] px-5 py-2">SHOP COLLECTION</Link>
                <Link href="/about" className="btn-gold text-[11px] px-5 py-2">ABOUT US</Link>
              </div>
            </div>
            {/* Dark area content (bottom 48%) */}
            <div className="flex-[48] flex flex-col justify-start pt-8">
              <p className="font-serif text-[24px] xl:text-[28px] italic text-[#F5F0EB] leading-[1.4] mb-6">
                &ldquo;Dress well,<br />live well, be a gentleman.&rdquo;
              </p>
              <div>
                <Link href="/shop" className="btn-gold text-[11px] px-5 py-2">SHOP NOW</Link>
              </div>
            </div>
          </div>

          {/* RIGHT — two portrait images + labels */}
          <div className="flex flex-col py-5">
            {/* Two tall portraits side by side */}
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
            {/* Labels below images (in dark area) */}
            <div className="flex gap-3 mt-3 mb-4">
              <Link href="/shop" className="flex-1 border border-[#F5F0EB]/25 py-3 text-center block hover:border-[#F5F0EB]/50 transition-colors">
                <span className="text-[#F5F0EB] text-[12.5px] tracking-[0.13em] uppercase font-medium">SHOP COLLECTION</span>
              </Link>
              <Link href="/about" className="flex-1 border border-[#F5F0EB]/25 py-3 text-center block hover:border-[#F5F0EB]/50 transition-colors">
                <span className="text-[#F5F0EB] text-[12.5px] tracking-[0.13em] uppercase font-medium">ABOUT US</span>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE — stacked layout */}
        <div className="lg:hidden py-10">
          {/* Discover text */}
          <h2 className="font-serif text-[28px] sm:text-[32px] font-bold text-[#3B2F2F] leading-[1.1] mb-3">
            Discover the Collection
          </h2>
          <p className="text-[#8C7E74] text-[14px] leading-[1.6] mb-5 max-w-[300px]">
            Sophisticated pieces crafted for the modern gentleman.
          </p>
          <div className="flex gap-3 mb-8">
            <Link href="/shop" className="btn-gold text-[11px] px-4 py-2">SHOP COLLECTION</Link>
            <Link href="/about" className="btn-gold text-[11px] px-4 py-2">ABOUT US</Link>
          </div>
          {/* Two images */}
          <div className="flex gap-3 mb-3">
            <div className="relative flex-1 aspect-[3/4] border border-[#C5B9A8]/50 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" alt="Shop" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative flex-1 aspect-[3/4] border border-[#C5B9A8]/50 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="About" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          {/* Labels */}
          <div className="flex gap-3 mb-8">
            <div className="flex-1 border border-[#F5F0EB]/25 py-2.5 text-center">
              <span className="text-[#F5F0EB] text-[11px] tracking-[0.12em] uppercase">SHOP COLLECTION</span>
            </div>
            <div className="flex-1 border border-[#F5F0EB]/25 py-2.5 text-center">
              <span className="text-[#F5F0EB] text-[11px] tracking-[0.12em] uppercase">ABOUT US</span>
            </div>
          </div>
          {/* Quote */}
          <p className="font-serif text-[22px] sm:text-[26px] italic text-[#F5F0EB] leading-[1.35] mb-5">
            &ldquo;Dress well, live well, be a gentleman.&rdquo;
          </p>
          <Link href="/shop" className="btn-gold text-[11px] px-5 py-2">SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
}
