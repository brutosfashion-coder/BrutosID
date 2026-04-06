import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscoverQuote from "@/components/DiscoverQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DiscoverQuote />
      </main>
      <Footer />
    </>
  );
}
