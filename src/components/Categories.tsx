import Image from "next/image";
import Link from "next/link";

const cats = [
  {
    title: "Signature Shirts",
    desc: "Firesh you chippols oilt wher and segnislt ntee.",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
  },
  {
    title: "Refined Outerwear",
    desc: "Planellt your hailiter MCle te and ti ibaus hurttons.",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    title: "Elegant Accessories",
    desc: "Frash ad alizap elle wnitm a bou dancessories.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
  },
];

export default function Categories() {
  return (
    <section className="bg-brand-beige bg-textured py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {cats.map((c) => (
            <div key={c.title} className="text-center">
              {/* Image — landscape ~5:3, thin subtle border */}
              <div className="relative w-full aspect-[5/3] mb-5 border-[1.5px] border-stone-400/40 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              {/* Title */}
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-brand-charcoal mb-1.5">
                {c.title}
              </h3>
              {/* Desc */}
              <p className="text-brand-muted text-[13px] leading-relaxed mb-4 px-2">
                {c.desc}
              </p>
              {/* Button */}
              <Link href="/shop" className="btn-gold text-[11px] px-6 py-2">
                SHOP NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
