import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 lg:pt-24 bg-brand-beige">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown mb-6 leading-tight">
                Our Story
              </h1>
              <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                Founded with a passion for timeless menswear, Brutos ID was born
                from a belief that every gentleman deserves clothing that
                reflects his character and ambition. We craft each piece with
                meticulous attention to detail, using the finest materials
                sourced from around the world.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                Our journey began in a small atelier, driven by the desire to
                bridge classic tailoring with modern sensibility. Today, Brutos
                ID stands as a testament to the enduring power of well-made
                clothing — pieces that transcend trends and become trusted
                companions in a man&apos;s wardrobe.
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed">
                We believe in sustainability, ethical craftsmanship, and the
                quiet confidence that comes from wearing something truly
                exceptional.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
                  alt="Brutos ID brand story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-brand-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown text-center mb-14">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Craftsmanship",
                  desc: "Every stitch, every seam, every detail is executed with precision and pride by skilled artisans.",
                },
                {
                  title: "Timelessness",
                  desc: "We design beyond trends, creating pieces that remain elegant and relevant season after season.",
                },
                {
                  title: "Sustainability",
                  desc: "Responsibly sourced materials and ethical production practices guide everything we do.",
                },
              ].map((val) => (
                <div key={val.title} className="text-center">
                  <h3 className="font-serif text-xl font-semibold text-brand-brown mb-3">
                    {val.title}
                  </h3>
                  <p className="text-brand-charcoal/60 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
