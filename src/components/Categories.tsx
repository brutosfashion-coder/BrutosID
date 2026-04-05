import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Signature Shirts",
    description:
      "Finest quality shirts crafted with precision and elegant flair.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
  },
  {
    name: "Refined Outerwear",
    description:
      "Premium layering pieces designed for timeless sophistication.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
  },
  {
    name: "Elegant Accessories",
    description:
      "Curated accessories to complete your distinguished look.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand-beige bg-textured py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* No section header - goes straight to items as per reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((cat) => (
            <div key={cat.name} className="group text-center">
              {/* Landscape image with warm frame - NO white card */}
              <div className="relative aspect-[4/3] overflow-hidden img-frame mb-6">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Category name in bold serif */}
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-brand-brown mb-2">
                {cat.name}
              </h3>
              {/* Description */}
              <p className="text-brand-charcoal/55 text-sm leading-relaxed mb-5 max-w-xs mx-auto">
                {cat.description}
              </p>
              {/* Gold filled button */}
              <Link
                href="/shop"
                className="btn-gold text-xs px-8 py-2.5 rounded-[3px]"
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
