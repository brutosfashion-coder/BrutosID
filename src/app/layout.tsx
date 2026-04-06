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
const TITLE = "Brutos ID — Brand Fashion Premium | Pakaian & Gaya Berpakaian Berkelas";
const DESCRIPTION =
  "Brutos ID menghadirkan koleksi fashion premium — kemeja, outerwear, dan aksesoris berkualitas tinggi dengan desain maskulin modern. Temukan gaya terbaik Anda bersama Brutos ID.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Brutos ID",
    "fashion premium",
    "brand fashion",
    "pakaian berkualitas",
    "kemeja premium",
    "outerwear",
    "outfit keren",
    "style modern",
    "gaya berpakaian",
    "baju berkualitas",
    "brand fashion lokal",
    "clothing brand",
    "premium menswear",
    "fashion maskulin",
    "jaket premium",
    "aksesoris",
    "busana modern",
    "koleksi fashion",
    "luxury streetwear",
    "modern elegance",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false },
  alternates: {
    canonical: SITE_URL,
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
        alt: "Brutos ID — Brand Fashion Premium | Gaya Berkelas",
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
  category: "fashion",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Brand fashion premium — kemeja, outerwear, dan aksesoris berkualitas tinggi dengan desain maskulin modern.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "id",
    },
    {
      "@type": ["Organization", "ClothingStore", "Brand"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["BRUTOS ID", "Brutos Fashion"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Brand fashion premium yang menghadirkan kemeja, outerwear, dan aksesoris berkualitas tinggi dengan desain maskulin modern.",
      foundingDate: "2024",
      sameAs: [
        "https://instagram.com/brutos.id",
        "https://facebook.com/brutosid",
        "https://twitter.com/brutosid",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Koleksi Fashion Premium Brutos ID",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Kemeja Premium",
            description: "Koleksi kemeja premium dengan potongan presisi dan bahan berkualitas tinggi",
          },
          {
            "@type": "OfferCatalog",
            name: "Outerwear & Jaket",
            description: "Jaket dan outerwear bergaya maskulin modern untuk tampilan elegan",
          },
          {
            "@type": "OfferCatalog",
            name: "Aksesoris",
            description: "Koleksi aksesoris pilihan untuk melengkapi gaya berpakaian Anda",
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
