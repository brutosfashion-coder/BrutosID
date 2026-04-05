import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="mt-[68px] py-20 bg-brand-cream min-h-screen">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">About Brutos ID</h1>
          <p className="text-brand-muted leading-relaxed mb-6">
            Born from a passion for timeless menswear, Brutos ID represents the modern gentleman who values quality, sophistication, and understated elegance. We believe that how you dress reflects who you are.
          </p>
          <p className="text-brand-muted leading-relaxed mb-6">
            Every piece in our collection is carefully curated to offer exceptional craftsmanship and enduring style. From signature shirts to refined outerwear and elegant accessories, we provide the essentials for the discerning man.
          </p>
          <p className="text-brand-muted leading-relaxed">
            Dress well, live well, be a gentleman.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
