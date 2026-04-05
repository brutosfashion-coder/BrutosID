import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Shop() {
  return (
    <main>
      <Navbar />
      <section className="mt-[68px] py-20 bg-brand-cream min-h-screen">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <h1 className="font-serif text-4xl font-bold text-brand-charcoal mb-4">Shop</h1>
          <p className="text-brand-muted mb-12">Browse our latest collection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Classic Linen Shirt", price: "Rp 450.000", img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&q=80" },
              { name: "Tailored Blazer", price: "Rp 1.250.000", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
              { name: "Leather Belt", price: "Rp 350.000", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
              { name: "Oxford Dress Shirt", price: "Rp 500.000", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
              { name: "Wool Overcoat", price: "Rp 1.850.000", img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80" },
              { name: "Gentleman Watch", price: "Rp 2.500.000", img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&q=80" },
            ].map((p) => (
              <div key={p.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-brand-gold/40 mb-4">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{p.name}</h3>
                <p className="text-brand-gold font-medium mt-1">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
