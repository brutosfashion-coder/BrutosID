import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "The Art of Dressing Well",
    excerpt:
      "Discover the fundamental principles that separate a well-dressed gentleman from the rest.",
    date: "March 15, 2024",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
  },
  {
    title: "Building a Capsule Wardrobe",
    excerpt:
      "A curated guide to the essential pieces every man needs for a versatile, refined wardrobe.",
    date: "March 8, 2024",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
  },
  {
    title: "The Perfect Blazer",
    excerpt:
      "How to choose, style, and maintain the quintessential menswear staple.",
    date: "February 28, 2024",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80",
  },
];

export default function JournalPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 lg:pt-24 pb-20 bg-brand-beige min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center py-16">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown mb-4">
              The Journal
            </h1>
            <p className="text-brand-charcoal/60 max-w-xl mx-auto">
              Insights, guides, and stories for the modern gentleman.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-brand-gold font-medium uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-brand-brown mb-3">
                    {post.title}
                  </h3>
                  <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-brand-gold text-sm font-medium uppercase tracking-wider hover:underline"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
