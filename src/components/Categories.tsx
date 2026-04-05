import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Signature Shirts",
    desc: "Finest you choose silk wear and signature style.",
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80",
  },
  {
    name: "Refined Outerwear",
    desc: "Premium layering crafted for timeless sophistication.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
  },
  {
    name: "Elegant Accessories",
    desc: "Curated accessories to elevate your distinguished look.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

export default function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((c) => (
            <div key={c.name} className="text-center group">
              {/* Image with gold frame border */}
              <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-brand-gold/70 mb-5">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-xl lg:text-[22px] font-bold text-brand-charcoal mb-1.5">
                {c.name}
              </h3>
              <p className="text-brand-muted text-[13px] leading-relaxed mb-4 max-w-[240px] mx-auto">
                {c.desc}
              </p>
              <Link href="/shop" className="btn-gold text-xs px-7 py-2.5 rounded-sm">
                SHOP NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
