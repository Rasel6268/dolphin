import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://dolphin-knitwear.com"),
  title: "Dolphin Generation Knitwear Limited | Export-Oriented Knit Garments Manufacturer in Bangladesh",
  description:
    "Dolphin Generation Knitwear Limited is a 100% export-oriented knit garments manufacturer and exporter in Bangladesh, producing quality knitwear for international buyers.",
  keywords: [
    "Bangladesh knitwear manufacturer",
    "garment manufacturer Bangladesh",
    "knit garments exporter Bangladesh",
    "T-shirt manufacturer Bangladesh",
    "polo shirt manufacturer Bangladesh",
    "RMG manufacturer Bangladesh",
    "knitwear exporter",
    "garment factory Narayanganj",
  ],
  authors: [{ name: "Dolphin Generation Knitwear Limited" }],
  creator: "Dolphin Generation Knitwear Limited",
  publisher: "Dolphin Generation Knitwear Limited",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dolphin Generation Knitwear Limited | Export-Oriented Knit Garments Manufacturer",
    description:
      "100% export-oriented knit garments manufacturer & exporter in Bangladesh. 30,000+ dozen monthly capacity, 8 modern sewing lines in Narayanganj.",
    url: "https://dolphin-knitwear.com",
    siteName: "Dolphin Generation Knitwear Limited",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Dolphin Generation Knitwear Limited Production Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Generation Knitwear Limited | Bangladesh Knitwear Manufacturer",
    description:
      "100% export-oriented knit garments manufacturer & exporter from Bangladesh serving premier European, UK & Asian markets.",
    images: ["https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dolphin Generation Knitwear Limited",
    legalName: "Dolphin Generation Knitwear Limited",
    url: "https://dolphin-knitwear.com",
    logo: "https://dolphin-knitwear.com/logo.png",
    description:
      "100% Export-Oriented Knit Garments Manufacturer & Exporter in Bangladesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Road No. 2, Lane No. 3, Plot No. 500 & 505 BSCIC Industrial Area, Fatullah",
      addressLocality: "Narayanganj",
      addressRegion: "Dhaka Division",
      postalCode: "1420",
      addressCountry: "BD",
    },
    founder: {
      "@type": "Person",
      name: "Md. Emdadul Haque",
      jobTitle: "Managing Director",
      alumniOf: "Textile Engineering",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-1711-015094",
      contactType: "Sales & Export Inquiries",
      email: "emdad@dolphin-bd.com",
      areaServed: ["DK", "NO", "DE", "JP", "GB", "EU", "US"],
      availableLanguage: ["English", "Bengali"],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 500,
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "T-Shirt Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Polo Shirt Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tank Top & Underwear Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infant Wear Manufacturing" } },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F9FA] text-[#0F172A] antialiased selection:bg-[#1B4332] selection:text-white">
        {children}
      </body>
    </html>
  );
}
