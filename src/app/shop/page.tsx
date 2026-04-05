import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Camel Wool Blazer",
    price: "$395",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
  },
  {
    name: "Oxford White Shirt",
    price: "$125",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
  },
  {
    name: "Charcoal Overcoat",
    price: "$485",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    name: "Leather Weekender Bag",
    price: "$295",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    name: "Silk Pocket Square Set",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73b4177fead?w=600&q=80",
  },
  {
    name: "Tan Chino Trousers",
    price: "$155",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
  },
];

export default function ShopPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 lg:pt-24 pb-20 bg-brand-beige min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
              The Shop
            </h1>
            <p className="text-brand-charcoal/60 max-w-xl mx-auto">
              Explore our curated selection of premium menswear essentials.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-brand-brown mb-1">
                    {product.name}
                  </h3>
                  <p className="text-brand-gold font-medium mb-4">
                    {product.price}
                  </p>
                  <Link
                    href="#"
                    className="btn-gold-outline inline-block text-xs px-5 py-2"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
