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
    <section className="bg-[#F2EDE7] py-14 lg:py-18">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 lg:gap-9">
          {CATS.map((c) => (
            <div key={c.title} className="text-center">
              <div className="relative w-full aspect-[5/3] mb-5 rounded-lg overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-[20px] lg:text-[22px] italic font-semibold text-[#3B2F2F] mb-2">
                {c.title}
              </h3>
              <p className="text-[#8C7E74] text-[13px] lg:text-[14px] leading-[1.6] mb-5 px-1">
                {c.desc}
              </p>
              <Link href="/shop" className="btn-gold">SHOP NOW</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
