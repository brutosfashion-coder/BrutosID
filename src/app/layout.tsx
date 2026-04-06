import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://brutos-id.vercel.app";
const SITE_NAME = "Brutos ID";
const TITLE = "Brutos ID — Brand Fashion Pria Premium Indonesia | Baju & Pakaian Pria Berkualitas";
const DESCRIPTION =
  "Brutos ID adalah brand fashion pria premium Indonesia yang menghadirkan kemeja pria, outerwear, dan aksesoris berkualitas tinggi. Temukan koleksi pakaian pria terbaru dengan gaya maskulin modern untuk pria Indonesia yang menghargai kualitas dan penampilan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Brutos ID",
    "fashion pria",
    "baju pria",
    "pakaian pria",
    "brand fashion pria Indonesia",
    "baju pria premium",
    "pakaian pria terbaru",
    "kemeja pria premium",
    "outerwear pria",
    "outfit pria keren",
    "style pria modern",
    "brand lokal Indonesia",
    "clothing brand Indonesia",
    "brand pakaian pria lokal",
    "toko baju pria online",
    "fashion pria Indonesia",
    "gaya berpakaian pria",
    "baju cowok keren",
    "fashion cowok",
    "jaket pria premium",
    "aksesoris pria",
    "baju pria berkualitas",
    "brand fashion lokal premium",
    "pakaian pria Indonesia",
    "kemeja pria Indonesia",
    "outfit pria Indonesia",
    "gaya pria maskulin",
    "pakaian pria elegan",
    "busana pria modern",
    "koleksi baju pria",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Brutos ID — Brand Fashion Pria Premium Indonesia | Baju Pria Berkualitas",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@brutosid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  category: "fashion",
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Brand fashion pria premium Indonesia — kemeja, outerwear, dan aksesoris berkualitas tinggi untuk pria modern.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "id",
    },
    {
      "@type": ["Organization", "ClothingStore", "Brand"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Brutos Indonesia", "BRUTOS ID", "Brutos Fashion Pria"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Brand fashion pria premium Indonesia yang menghadirkan kemeja, outerwear, dan aksesoris berkualitas tinggi dengan desain maskulin modern.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
        addressRegion: "Indonesia",
      },
      sameAs: [
        "https://instagram.com/brutos.id",
        "https://facebook.com/brutosid",
        "https://twitter.com/brutosid",
      ],
      priceRange: "$$",
      currenciesAccepted: "IDR",
      paymentAccepted: "Kartu Kredit, Transfer Bank, E-Wallet",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Koleksi Fashion Pria Brutos ID",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Kemeja Pria Premium",
            description: "Koleksi kemeja pria premium dengan potongan presisi dan bahan berkualitas tinggi",
          },
          {
            "@type": "OfferCatalog",
            name: "Outerwear & Jaket Pria",
            description: "Jaket dan outerwear pria bergaya maskulin modern untuk tampilan elegan",
          },
          {
            "@type": "OfferCatalog",
            name: "Aksesoris Pria",
            description: "Koleksi aksesoris pria pilihan untuk melengkapi gaya berpakaian Anda",
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description: DESCRIPTION,
      inLanguage: "id",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3C2A21" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="content-language" content="id" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
