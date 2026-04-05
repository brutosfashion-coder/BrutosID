import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Signature Shirts",
    desc: "Curated from the finest fabrics for the distinguished gentleman.",
    image:
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80",
  },
  {
    name: "Refined Outerwear",
    desc: "Premium tailored outerwear crafted for timeless sophistication.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
  },
  {
    name: "Elegant Accessories",
    desc: "Statement accessories that define your distinguished character.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand-cream bg-textured py-20 lg:py-28">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat) => (
            <div key={cat.name} className="text-center group">
              {/* Image with gold border */}
              <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-brand-gold/60 mb-6">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-[20px] lg:text-[22px] font-bold text-brand-charcoal mb-2">
                {cat.name}
              </h3>
              <p className="text-brand-muted text-[13px] leading-relaxed mb-5 max-w-[240px] mx-auto">
                {cat.desc}
              </p>
              <Link
                href="/shop"
                className="btn-gold text-[12px] px-7 py-2.5"
              >
                SHOP NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
