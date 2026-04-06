import Image from "next/image";
import Link from "next/link";

const CATS = [
  {
    title: "Kemeja Signature",
    desc: "Koleksi kemeja pria premium dari bahan katun terbaik dengan potongan presisi dan tampilan timeless.",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80",
  },
  {
    title: "Outerwear Premium",
    desc: "Jaket dan outerwear pria bergaya maskulin modern untuk pria yang menghargai penampilan berkelas.",
    img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
  },
  {
    title: "Aksesoris Elegan",
    desc: "Lengkapi gaya berpakaian Anda dengan koleksi aksesoris pria pilihan yang menunjang penampilan.",
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
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">
          {CATS.map((c) => (
            <div key={c.title} className="text-center">
              <div className="relative w-full aspect-[5/3] mb-5 rounded-xl overflow-hidden">
                <Image
                  src={c.img}
                  alt={`${c.title} — koleksi fashion pria premium Brutos ID Indonesia`}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 28vw"
                />
              </div>

              <h3 className="font-serif text-[24px] lg:text-[28px] italic font-semibold text-[#3B2F2F] mb-2">
                {c.title}
              </h3>

              <p className="text-[#9C8E82] text-[13px] lg:text-[14px] leading-[1.55] mb-5 px-1">
                {c.desc}
              </p>

              <Link
                href="/"
                className="inline-block w-full max-w-[280px] text-center bg-[#B49A6A] hover:bg-[#A38B5E] text-white text-[12.5px] tracking-[0.18em] font-medium py-[11px] transition-colors border border-[#A08A5A] rounded-[3px]"
              >
                BELANJA SEKARANG
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
