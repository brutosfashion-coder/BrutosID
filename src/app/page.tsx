import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscoverQuote from "@/components/DiscoverQuote";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <DiscoverQuote />
      </main>
      <Footer />
    </>
  );
}
