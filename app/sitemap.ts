// app/sitemap.ts

import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { blogs } from "@/data/blogs";
import { siteUrl } from "@/data/site";
import { absoluteCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "services",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "gallery",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "blogs",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "contact",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route.path
      ? absoluteCanonicalUrl(`/${route.path}`)
      : siteUrl,

    lastModified,

    changeFrequency: route.changeFrequency,

    priority: route.priority,
  }));

  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteCanonicalUrl(`/services/${service.slug}`),

    lastModified,

    changeFrequency: "weekly",

    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: absoluteCanonicalUrl(`/blogs/${blog.slug}`),

    lastModified,

    changeFrequency: "weekly",

    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
    ...blogUrls,
  ];
}
