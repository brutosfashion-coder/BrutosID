import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
    label: "SHOP COLLECTION",
  },
  {
    src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
    label: "ABOUT US",
  },
];

export default function DiscoverQuote() {
  return (
    <section className="relative overflow-hidden">
      {/* Split background: cream top, dark brown bottom */}
      <div
        className="absolute inset-0 flex flex-col pointer-events-none"
        aria-hidden="true"
      >
        <div className="flex-[50] lg:flex-[42] bg-brand-beige bg-textured" />
        <div className="flex-[50] lg:flex-[58] bg-brand-brown" />
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto px-6 lg:px-10">
        {/* CSS Grid: mobile stacks, desktop 2-column with images spanning rows */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] lg:gap-12">
          {/* Discover Text - col 1, row 1 on desktop */}
          <div className="pt-14 lg:pt-20 lg:pr-4 order-1 lg:col-start-1 lg:row-start-1">
            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-brand-charcoal leading-[1.08] mb-4">
              Discover the
              <br />
              Collection
            </h2>
            <p className="text-brand-muted text-[15px] leading-relaxed mb-8 max-w-sm">
              Sophisticated pieces crafted for the modern gentleman.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="btn-gold text-[12px] px-6 py-2.5"
              >
                SHOP COLLECTION
              </Link>
              <Link
                href="/about"
                className="btn-gold text-[12px] px-6 py-2.5"
              >
                ABOUT US
              </Link>
            </div>
          </div>

          {/* Portrait Images - col 2, spans rows 1-2 on desktop */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 grid grid-cols-2 gap-4 lg:gap-5 py-8 lg:py-16 order-2">
            {images.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-brand-gold/50">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 46vw, 28vw"
                  />
                </div>
                <div className="border border-brand-cream/30 py-3 text-center">
                  <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.15em] text-brand-cream">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote - col 1, row 2 on desktop */}
          <div className="lg:col-start-1 lg:row-start-2 pb-14 lg:pb-20 pt-4 lg:pt-0 lg:pr-4 order-3 flex items-end">
            <div>
              <p className="font-serif italic text-[24px] sm:text-[28px] lg:text-[34px] text-brand-cream leading-snug mb-8">
                &ldquo;Dress well,
                <br />
                live well, be a gentleman.&rdquo;
              </p>
              <Link
                href="/shop"
                className="btn-gold text-[12px] px-7 py-2.5"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
