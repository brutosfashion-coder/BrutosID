import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DiscoverCollection from "@/components/DiscoverCollection";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <DiscoverCollection />
      <QuoteBanner />
      <Footer />
    </main>
  );
}
