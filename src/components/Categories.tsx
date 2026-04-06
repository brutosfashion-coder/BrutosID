import Image from "next/image";
import Link from "next/link";

const CATS = [
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
    <section
      className="py-16 lg:py-20"
      style={{
        backgroundImage: "url('/paper-texture.jpg')",
        backgroundSize: "600px 600px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {CATS.map((c) => (
            <div key={c.title} className="text-center">
              {/* Image — 5:3 aspect ratio */}
              <div className="relative w-full aspect-[5/3] mb-6 rounded-xl overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </div>
              {/* Title — large serif italic */}
              <h3 className="font-serif text-[24px] lg:text-[28px] italic font-semibold text-[#3B2F2F] mb-2">
                {c.title}
              </h3>
              {/* Description */}
              <p className="text-[#9C8E82] text-[13.5px] lg:text-[14.5px] leading-[1.5] mb-6 px-2">
                {c.desc}
              </p>
              {/* Button — wide gold */}
              <Link
                href="/shop"
                className="inline-block w-full max-w-[280px] text-center bg-[#B49A6A] hover:bg-[#A38B5E] text-white text-[13px] tracking-[0.16em] font-medium py-[12px] transition-colors rounded-[4px]"
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
