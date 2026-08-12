// lib/seo.ts

import { siteData } from "@/data/site";


// =============================================
// ABSOLUTE URL
// =============================================

export function absoluteUrl(path: string) {
  if (!path) {
    return siteData.url;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${siteData.url}${cleanPath}`;
}


// =============================================
// ABSOLUTE CANONICAL URL
// Matches Next trailingSlash configuration
// =============================================

export function absoluteCanonicalUrl(path = "/") {
  if (!path || path === "/") {
    return siteData.url;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    const url = new URL(path);
    const normalizedPath = url.pathname.endsWith("/")
      ? url.pathname
      : `${url.pathname}/`;

    return `${url.origin}${normalizedPath}${url.search}${url.hash}`;
  }

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  const trailingPath = cleanPath.endsWith("/")
    ? cleanPath
    : `${cleanPath}/`;

  return `${siteData.url}${trailingPath}`;
}


// =============================================
// JSON-LD
// =============================================

export function jsonLd(data: unknown) {
  return JSON.stringify(data);
}


// =============================================
// KEYWORDS
// Remove duplicates and empty values
// =============================================

export function keywords(
  items: readonly (string | null | undefined)[]
) {
  return Array.from(
    new Set(
      items
        .filter(
          (item): item is string =>
            typeof item === "string" &&
            item.trim().length > 0
        )
        .map((item) => item.trim())
    )
  );
}


// =============================================
// CREATE CANONICAL URL
// =============================================

export function canonicalUrl(path = "/") {
  return absoluteCanonicalUrl(path);
}


// =============================================
// CLEAN TEXT
// Helpful for meta descriptions / schema
// =============================================

export function cleanText(text: string) {
  return text
    .replace(/\s+/g, " ")
    .trim();
}


// =============================================
// META DESCRIPTION LIMIT
// Keeps description around SEO-friendly length
// =============================================

export function metaDescription(
  text: string,
  maxLength = 160
) {
  const cleaned = cleanText(text);

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return `${cleaned
    .slice(0, maxLength - 3)
    .trimEnd()}...`;
}


// =============================================
// SERVICE URL
// =============================================

export function serviceUrl(slug: string) {
  return absoluteCanonicalUrl(`/services/${slug}`);
}


// =============================================
// BLOG URL
// =============================================

export function blogUrl(slug: string) {
  return absoluteCanonicalUrl(`/blogs/${slug}`);
}


// =============================================
// IMAGE URL
// =============================================

export function seoImageUrl(image: string) {
  return absoluteUrl(image);
}


// =============================================
// BREADCRUMB SCHEMA
// =============================================

export function createBreadcrumbSchema(
  items: {
    name: string;
    href: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: absoluteCanonicalUrl(item.href),
      })
    ),
  };
}


// =============================================
// SERVICE SCHEMA
// =============================================

export function createServiceSchema({
  name,
  description,
  slug,
  image,
}: {
  name: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    name,

    description: cleanText(description),

    url: serviceUrl(slug),

    image: seoImageUrl(image),

    provider: {
      "@type": "HealthAndBeautyBusiness",

      "@id": `${siteData.url}/#business`,

      name: siteData.name,

      url: siteData.url,

      telephone: siteData.contact.phone,

      address: {
        "@type": "PostalAddress",

        streetAddress:
          `${siteData.address.shop}, ${siteData.address.building}, ${siteData.address.landmark}`,

        addressLocality: siteData.address.city,

        addressRegion: siteData.address.state,

        postalCode: siteData.address.pincode,

        addressCountry: "IN",
      },
    },

    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
  };
}


// =============================================
// BLOG ARTICLE SCHEMA
// =============================================

export function createBlogSchema({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  const url = blogUrl(slug);

  return {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: title,

    description: cleanText(description),

    image: seoImageUrl(image),

    url,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    author: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },

    publisher: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },
  };
}
