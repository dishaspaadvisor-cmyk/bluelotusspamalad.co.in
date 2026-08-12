// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import BottomCTA from "@/components/BottomCTA";
import FloatingButton from "@/components/FloatingButton";

import {
  defaultSEO,
  localBusinessSEO,
  websiteSEO,
} from "@/data/seo";

import { siteData } from "@/data/site";

/* =========================================
   LUXURY FONTS
========================================= */

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* =========================================
   METADATA
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),

  title: defaultSEO.title,

  description: defaultSEO.description,

  keywords: [...defaultSEO.keywords],

  applicationName: "Blue Lotus Spa Malad",

  authors: [
    {
      name: "Blue Lotus Spa Malad",
    },
  ],

  creator: "Blue Lotus Spa Malad",
  publisher: "Blue Lotus Spa Malad",

  alternates: {
    canonical: siteData.url,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: siteData.url,

    siteName: defaultSEO.openGraph.siteName,

    title: defaultSEO.openGraph.title,

    description: defaultSEO.openGraph.description,

    images: [
      {
        url: defaultSEO.openGraph.image,
        width: 1200,
        height: 630,
        alt: "Blue Lotus Spa Malad - Spa and Massage in Malad West",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: defaultSEO.openGraph.title,

    description: defaultSEO.openGraph.description,

    images: [defaultSEO.openGraph.image],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  category: "Spa & Wellness",
};

/* =========================================
   VIEWPORT
========================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,

  themeColor: "#18352c",

  colorScheme: "light",
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`${bodyFont.className} antialiased`}
      >
        {/* =========================================
            STRUCTURED DATA
        ========================================== */}

        <Script
          id="blue-lotus-local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSEO),
          }}
        />

        <Script
          id="blue-lotus-website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSEO),
          }}
        />

        {/* =========================================
            WEBSITE
        ========================================== */}

        <Header />

        <Popup />

        <main>
          {children}
        </main>

        <BottomCTA />

        <Footer />

        <FloatingButton />
      </body>
    </html>
  );
}