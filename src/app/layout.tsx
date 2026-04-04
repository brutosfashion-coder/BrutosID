import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/home/SmoothScroll";

export const metadata: Metadata = {
  title: "BRUTOS ID | Premium Men's Clothing",
  description: "Elegant menswear for the quietly confident. Premium fabrics, tailored fit, timeless style.",
  keywords: ["men's clothing", "premium fashion", "Indonesian menswear", "old money style"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
