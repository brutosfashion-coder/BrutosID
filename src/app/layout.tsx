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
const TITLE = "Brutos ID — Premium Menswear & Clothing Brand Indonesia";
const DESCRIPTION =
  "Brutos ID is an Indonesian premium menswear brand offering timeless shirts, outerwear, and accessories. Elevate your style with refined, modern clothing crafted for the sophisticated gentleman.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Brutos ID",
    "brand pakaian pria Indonesia",
    "premium menswear Indonesia",
    "clothing brand Indonesia",
    "pakaian pria premium",
    "fashion pria lokal",
    "kemeja pria premium",
    "outerwear pria",
    "brand lokal Indonesia",
    "Indonesian fashion brand",
    "men clothing Indonesia",
    "local brand fashion pria",
    "gentleman style Indonesia",
    "baju pria berkualitas",
    "brand fashion lokal premium",
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
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Brutos ID — Premium Menswear Brand Indonesia",
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
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["id", "en"],
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["Organization", "ClothingStore", "Brand"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Brutos Indonesia", "BRUTOS ID"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Indonesian premium menswear brand crafting timeless shirts, outerwear, and accessories for the modern gentleman.",
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
      paymentAccepted: "Credit Card, Bank Transfer, E-Wallet",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Brutos ID Menswear Collection",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Shirts",
            description: "Premium men's shirts with refined tailoring",
          },
          {
            "@type": "OfferCatalog",
            name: "Outerwear",
            description: "Sophisticated jackets and coats for the modern man",
          },
          {
            "@type": "OfferCatalog",
            name: "Accessories",
            description: "Curated accessories to elevate every outfit",
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
      inLanguage: ["id", "en"],
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3C2A21" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
