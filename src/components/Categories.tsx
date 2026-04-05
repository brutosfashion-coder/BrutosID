import Image from "next/image";
import Link from "next/link";

const cats = [
  {
    title: "Signature Shirts",
    desc: "Finest cotton shirts crafted with precision and timeless appeal.",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80",
  },
  {
    title: "Refined Outerwear",
    desc: "Premium jackets and coats for the sophisticated gentleman.",
    img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
  },
  {
    title: "Elegant Accessories",
    desc: "Complete your look with our curated accessories collection.",
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand-beige bg-textured py-14 sm:py-18 lg:py-20">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          {cats.map((c) => (
            <div key={c.title} className="text-center">
              {/* Image — landscape, thin border */}
              <div className="relative w-full aspect-[4/3] mb-5 border border-stone-300/50 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              {/* Title */}
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-brand-charcoal mb-2">
                {c.title}
              </h3>
              {/* Desc */}
              <p className="text-brand-muted text-[13px] sm:text-[14px] leading-relaxed mb-5 px-2">
                {c.desc}
              </p>
              {/* Button */}
              <Link href="/shop" className="btn-gold text-[11px] px-7 py-2.5">
                SHOP NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
