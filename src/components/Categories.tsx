import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Signature Shirts",
    description:
      "Expertly tailored shirts crafted from the finest fabrics for impeccable style.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
  },
  {
    name: "Refined Outerwear",
    description:
      "Sophisticated coats and jackets designed to make a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    name: "Elegant Accessories",
    description:
      "Curated accessories that add the perfect finishing touch to any ensemble.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand-beige py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown mb-4">
            Shop by Category
          </h2>
          <p className="text-brand-charcoal/60 max-w-xl mx-auto">
            Explore our curated collections designed for the modern gentleman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-brand-brown mb-2">
                  {cat.name}
                </h3>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-5">
                  {cat.description}
                </p>
                <Link
                  href="/shop"
                  className="btn-gold-outline inline-block text-xs px-6 py-2.5"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
