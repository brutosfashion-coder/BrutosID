import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Journal() {
  return (
    <main>
      <Navbar />
      <section className="mt-[68px] py-20 bg-brand-cream min-h-screen">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal mb-4">Journal</h1>
          <p className="text-brand-muted mb-12">Style guides, tips, and stories for the modern gentleman.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Art of Layering", date: "March 2024", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80" },
              { title: "Building a Capsule Wardrobe", date: "February 2024", img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80" },
              { title: "Accessories That Define", date: "January 2024", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
            ].map((a) => (
              <div key={a.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-brand-gold/40 mb-4">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <p className="text-xs text-brand-muted mb-1">{a.date}</p>
                <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
