import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecaptchaProvider from "./components/RecaptchaProvider";
import "./globals.css";

const newsreader = Newsreader({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://whitegatepartners.sg"
  ),
  title: {
    default: "White Gate Partners | Regional Executive Search & Specialist Recruitment",
    template: "%s | White Gate Partners",
  },
  description:
    "White Gate Partners is a Singapore-based executive search, specialist recruitment and talent solutions firm supporting regional and cross-border hiring across Southeast Asia and selected international markets.",
  keywords: [
    "executive search Singapore",
    "executive search firm Singapore",
    "specialist recruitment Singapore",
    "recruitment agency Singapore",
    "recruitment firm Singapore",
    "headhunter Singapore",
    "talent solutions Singapore",
    "Southeast Asia recruitment firm",
    "regional recruitment firm Singapore",
    "Malaysia recruitment support",
  ],
  authors: [{ name: "White Gate Partners" }],
  creator: "White Gate Partners",
  publisher: "White Gate Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "White Gate Partners",
    title: "White Gate Partners | Regional Executive Search & Specialist Recruitment",
    description:
      "Singapore-based executive search, specialist recruitment and talent solutions for regional and cross-border hiring across Southeast Asia and selected international markets.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "White Gate Partners — Regional Executive Search & Specialist Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Gate Partners | Regional Executive Search & Specialist Recruitment",
    description:
      "Singapore-based executive search, specialist recruitment and talent solutions firm supporting regional and cross-border hiring across Southeast Asia.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EmploymentAgency"],
  "@id": "https://whitegatepartners.sg/#organization",
  name: "White Gate Partners",
  legalName: "White Gate Partners Pte. Ltd.",
  url: "https://whitegatepartners.sg",
  logo: {
    "@type": "ImageObject",
    url: "https://whitegatepartners.co/logo.png",
  },
  image: "https://whitegatepartners.sg/opengraph-image",
  description:
    "White Gate Partners is a Singapore-based executive search, specialist recruitment and talent solutions firm supporting regional and cross-border hiring across Southeast Asia and selected international markets.",
  foundingDate: "2026-01-01",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Kim Yam Road",
    addressLocality: "Singapore",
    postalCode: "239366",
    addressCountry: "SG",
  },
  telephone: "+65 9168 2181",
  email: "asher@whitegatepartners.co",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+65 9168 2181",
    contactType: "customer service",
    email: "asher@whitegatepartners.co",
    areaServed: ["SG", "MY", "TH", "PH", "AU", "GB"],
    availableLanguage: ["English", "Mandarin Chinese"],
  },
  areaServed: [
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Thailand" },
    { "@type": "Country", name: "Philippines" },
    { "@type": "Country", name: "Australia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Talent Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive Search",
          description:
            "Retained and exclusive searches for senior leaders and C-suite appointments in Singapore and across Southeast Asia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Specialist Recruitment",
          description:
            "Qualified professionals placed across Accounting & Finance, Compliance, Sales, HR and Technology.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Talent Solutions",
          description:
            "Hiring strategy, org design, salary benchmarking, employer brand and HR operating model advisory.",
        },
      },
    ],
  },
  identifier: [
    { "@type": "PropertyValue", name: "UEN", value: "202600064K" },
    {
      "@type": "PropertyValue",
      name: "Employment Agency License",
      value: "26C3291",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RecaptchaProvider>
          <Navbar />
          {children}
          <Footer />
        </RecaptchaProvider>
        <Analytics />
      </body>
    </html>
  );
}
