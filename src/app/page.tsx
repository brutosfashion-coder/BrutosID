"use client";
import { LoadingProvider } from "@/components/LoadingContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscoverQuote from "@/components/DiscoverQuote";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <LoadingProvider>
      <LoadingScreen />
      {/* Content wrapper sits above the sticky footer — scroll reveals footer seamlessly */}
      <div className="relative z-[1]">
        <Navbar />
        <main>
          <Hero />
          <DiscoverQuote />
        </main>
      </div>
      <Footer />
    </LoadingProvider>
  );
}
