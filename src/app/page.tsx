import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DiscoverQuote from "@/components/DiscoverQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <DiscoverQuote />
      </main>
      <Footer />
    </>
  );
}
