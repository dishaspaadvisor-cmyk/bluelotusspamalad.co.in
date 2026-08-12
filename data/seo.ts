// data/seo.ts

import { siteUrl } from "@/data/site";
import { absoluteCanonicalUrl, absoluteUrl } from "@/lib/seo";

export const defaultSEO = {
  title: "Blue Lotus Spa Malad | Spa & Massage in Malad West",

  description:
    "Blue Lotus Spa Malad offers premium full body massage, Swedish massage, Thai massage, deep tissue massage, aromatherapy, oil massage and relaxing spa therapies in Malad West, Mumbai.",

  keywords: [
    "Blue Lotus Spa Malad",
    "Spa in Malad",
    "Spa in Malad West",
    "Massage in Malad",
    "Massage in Malad West",
    "Body Massage in Malad",
    "Full Body Massage in Malad",
    "Massage Center in Malad",
    "Massage Spa in Malad West",
    "Spa near Infinity Mall",
    "Massage near Infinity Mall",
    "Spa on Link Road Malad",
    "Swedish Massage in Malad",
    "Thai Massage in Malad",
    "Deep Tissue Massage in Malad",
    "Aromatherapy Massage in Malad",
    "Oil Massage in Malad",
    "Four Hand Massage in Malad",
    "Lomi Lomi Massage in Malad",
    "Jacuzzi Spa in Malad",
    "Ayurvedic Massage in Malad",
    "Foot Massage in Malad",
  ],

  openGraph: {
    title: "Blue Lotus Spa Malad | Premium Spa in Malad West",

    description:
      "Relax and rejuvenate at Blue Lotus Spa Malad with premium massage and wellness therapies in Malad West, Mumbai.",

    url: siteUrl,

    siteName: "Blue Lotus Spa Malad",

    image: "/images/hero-1.png",
  },
};

// --------------------------------------------------
// BLOGS PAGE
// --------------------------------------------------

export const blogsSEO = {
  title: "Spa & Massage Blogs in Malad | Blue Lotus Spa Malad",

  description:
    "Read helpful spa and massage blogs from Blue Lotus Spa Malad. Learn about Full Body Massage, Swedish Massage, Thai Massage, Deep Tissue Massage, Aromatherapy, Oil Massage and more.",

  keywords: [
    "Spa blogs in Malad",
    "Massage blogs in Malad",
    "Massage tips Malad",
    "Spa guide Malad",
    "Full body massage benefits",
    "Swedish massage benefits",
    "Thai massage benefits",
    "Deep tissue massage benefits",
    "Aromatherapy massage benefits",
    "Blue Lotus Spa Malad blogs",
  ],

  canonical: absoluteCanonicalUrl("/blogs"),

  alternates: {
    canonical: absoluteCanonicalUrl("/blogs"),
  },

  openGraph: {
    title: "Spa & Massage Blogs in Malad | Blue Lotus Spa Malad",
    description:
      "Read helpful spa and massage blogs from Blue Lotus Spa Malad. Learn about Full Body Massage, Swedish Massage, Thai Massage, Deep Tissue Massage, Aromatherapy, Oil Massage and more.",
    url: absoluteCanonicalUrl("/blogs"),
    siteName: "Blue Lotus Spa Malad",
    images: [
      {
        url: absoluteUrl("/images/hero-1.png"),
        alt: "Blue Lotus Spa Malad wellness blogs",
      },
    ],
    type: "website",
  },
};

// --------------------------------------------------
// HOME PAGE
// --------------------------------------------------

export const homeSEO = {
  title: "Blue Lotus Spa Malad | Best Spa & Massage in Malad West",

  description:
    "Visit Blue Lotus Spa Malad in Malad West, Mumbai for full body massage, Swedish, Thai, Deep Tissue, Aromatherapy, Oil Massage, Four Hand Massage and premium spa therapies.",

  keywords: [
    "Blue Lotus Spa Malad",
    "Best spa in Malad",
    "Spa in Malad West",
    "Massage in Malad",
    "Massage in Malad West",
    "Body massage in Malad",
    "Full body massage in Malad",
    "Spa near Infinity Mall",
    "Massage near Infinity Mall",
    "Spa on Link Road Malad",
    "Massage center in Malad West",
  ],

  canonical: absoluteCanonicalUrl("/"),

  alternates: {
    canonical: absoluteCanonicalUrl("/"),
  },

  openGraph: {
    title: "Blue Lotus Spa Malad | Best Spa & Massage in Malad West",
    description:
      "Visit Blue Lotus Spa Malad in Malad West, Mumbai for full body massage, Swedish, Thai, Deep Tissue, Aromatherapy, Oil Massage, Four Hand Massage and premium spa therapies.",
    url: absoluteCanonicalUrl("/"),
    siteName: "Blue Lotus Spa Malad",
    images: [
      {
        url: absoluteUrl("/images/hero-1.png"),
        alt: "Blue Lotus Spa Malad premium spa in Malad West",
      },
    ],
    type: "website",
  },
};

// --------------------------------------------------
// ABOUT PAGE
// --------------------------------------------------

export const aboutSEO = {
  title: "About Blue Lotus Spa | Premium Spa in Malad West",

  description:
    "Learn about Blue Lotus Spa Malad, a premium wellness spa in Malad West, Mumbai offering professional massage therapies in a peaceful and comfortable environment.",

  keywords: [
    "About Blue Lotus Spa Malad",
    "Blue Lotus Spa Malad West",
    "Premium spa in Malad",
    "Spa near Infinity Mall",
    "Wellness spa in Malad",
    "Professional spa in Malad West",
  ],

  canonical: absoluteCanonicalUrl("/about"),
};

// --------------------------------------------------
// SERVICES PAGE
// --------------------------------------------------

export const servicesSEO = {
  title: "Spa & Massage Services in Malad | Blue Lotus Spa",

  description:
    "Explore massage services at Blue Lotus Spa Malad including Full Body, Swedish, Thai, Deep Tissue, Aromatherapy, Ayurvedic, Oil, Four Hand, Lomi Lomi and Jacuzzi spa experiences.",

  keywords: [
    "Massage services in Malad",
    "Spa services in Malad",
    "Full body massage in Malad",
    "Body massage in Malad West",
    "Swedish massage in Malad",
    "Thai massage in Malad",
    "Deep tissue massage in Malad",
    "Aromatherapy massage in Malad",
    "Ayurvedic massage in Malad",
    "Oil massage in Malad",
    "Four hand massage in Malad",
    "Lomi Lomi massage in Malad",
    "Jacuzzi spa in Malad",
  ],

  canonical: absoluteCanonicalUrl("/services"),
};

// --------------------------------------------------
// GALLERY PAGE
// --------------------------------------------------

export const gallerySEO = {
  title: "Blue Lotus Spa Malad Gallery | Spa in Malad West",

  description:
    "Explore the Blue Lotus Spa Malad gallery and discover our relaxing spa ambience, treatment rooms and premium wellness environment in Malad West, Mumbai.",

  keywords: [
    "Blue Lotus Spa gallery",
    "Spa gallery Malad",
    "Spa images Malad",
    "Blue Lotus Spa Malad photos",
    "Luxury spa Malad West",
    "Spa near Infinity Mall",
  ],

  canonical: absoluteCanonicalUrl("/gallery"),
};

// --------------------------------------------------
// CONTACT PAGE
// --------------------------------------------------

export const contactSEO = {
  title: "Contact Blue Lotus Spa Malad | Book Spa Appointment",

  description:
    "Contact Blue Lotus Spa Malad in Malad West, Mumbai to book your spa and massage appointment. Located at Solitaire II opposite Infinity Mall on Link Road.",

  keywords: [
    "Blue Lotus Spa Malad contact",
    "Blue Lotus Spa Malad phone number",
    "Blue Lotus Spa Malad address",
    "Book spa in Malad",
    "Spa appointment Malad",
    "Massage booking Malad",
    "Spa near Infinity Mall",
    "Spa Malad West contact",
  ],

  canonical: absoluteCanonicalUrl("/contact"),
};

// --------------------------------------------------
// SERVICE PAGE SEO GENERATOR
// --------------------------------------------------

type ServiceSEOProps = {
  title: string;
  slug: string;
  description: string;
  localKeywords?: readonly string[];
  image?: string;
};

export const generateServiceSEO = ({
  title,
  slug,
  description,
  localKeywords = [],
  image,
}: ServiceSEOProps) => {
  const serviceTitle = title.toLowerCase().includes("malad")
    ? title
    : `${title} in Malad`;

  const pageUrl = absoluteCanonicalUrl(`/services/${slug}`);

  return {
    title: `${serviceTitle} | Blue Lotus Spa Malad`,

    description,

    keywords: [
      ...localKeywords,
      `${title} in Malad`,
      `${title} in Malad West`,
      `${title} near Infinity Mall`,
      `${title} on Link Road Malad`,
      `Best ${title} in Malad`,
      "Blue Lotus Spa Malad",
    ],

    canonical: pageUrl,

    openGraph: {
      title: `${serviceTitle} | Blue Lotus Spa`,

      description,

      url: pageUrl,

      siteName: "Blue Lotus Spa Malad",

      image: absoluteUrl(image || "/images/hero-1.png"),
    },
  };
};

// --------------------------------------------------
// LOCAL BUSINESS DETAILS FOR SCHEMA
// --------------------------------------------------

export const localBusinessSEO = {
  "@context": "https://schema.org",

  "@type": "HealthAndBeautyBusiness",

  "@id": `${siteUrl}/#business`,

  name: "Blue Lotus Spa Malad",

  url: siteUrl,

  telephone: "+91 9152363523",

  email: "bluelotusspa.malad@gmail.com",

  image: `${siteUrl}/images/hero-1.png`,

  description:
    "Blue Lotus Spa Malad is a premium spa and massage center in Malad West, Mumbai offering relaxing body massage and wellness therapies.",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Unit 1, A Wing Solitaire II, CTS No. 269/A-3, Opposite Infinity Mall, Link Road",

    addressLocality: "Malad West",

    addressRegion: "Maharashtra",

    postalCode: "400064",

    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "Place",
      name: "Malad",
    },
    {
      "@type": "Place",
      name: "Malad West",
    },
    {
      "@type": "Place",
      name: "Link Road",
    },
  ],

  priceRange: "₹₹",

  sameAs: [],
};

// --------------------------------------------------
// WEBSITE SCHEMA
// --------------------------------------------------

export const websiteSEO = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: "Blue Lotus Spa Malad",

  description:
    "Official website of Blue Lotus Spa Malad, a premium spa and massage center in Malad West, Mumbai.",

  publisher: {
    "@id": `${siteUrl}/#business`,
  },
};

// --------------------------------------------------
// BREADCRUMB GENERATOR
// --------------------------------------------------

export const generateBreadcrumbSEO = (
  items: {
    name: string;
    url: string;
  }[]
) => ({
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: item.name,

    item: absoluteCanonicalUrl(item.url),
  })),
});

// --------------------------------------------------
// SITE URL
// --------------------------------------------------

export { siteUrl };
