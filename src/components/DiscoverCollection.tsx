import Image from "next/image";
import Link from "next/link";

export default function DiscoverCollection() {
  return (
    <section className="bg-brand-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-[40%]">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown leading-tight mb-6">
              Discover the
              <br />
              Collection
            </h2>
            <p className="text-brand-charcoal/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Sophisticated pieces crafted for the modern gentleman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-gold-filled inline-block">
                Shop Collection
              </Link>
              <Link href="/about" className="btn-gold-outline inline-block">
                About Us
              </Link>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80"
                  alt="Man wearing a blazer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gold text-center">
                Shop Collection
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                  alt="Flat lay outfit arrangement"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gold text-center">
                About Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
