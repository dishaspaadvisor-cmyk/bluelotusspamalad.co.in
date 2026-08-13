import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",

  async headers() {
    const noStoreHeaders = [
      {
        key: "Cache-Control",
        value: "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
      {
        key: "Pragma",
        value: "no-cache",
      },
      {
        key: "Expires",
        value: "0",
      },
    ];

    return [
      {
        source: "/",
        headers: noStoreHeaders,
      },
      {
        source: "/about/",
        headers: noStoreHeaders,
      },
      {
        source: "/services/",
        headers: noStoreHeaders,
      },
      {
        source: "/services/:slug/",
        headers: noStoreHeaders,
      },
      {
        source: "/gallery/",
        headers: noStoreHeaders,
      },
      {
        source: "/blogs/",
        headers: noStoreHeaders,
      },
      {
        source: "/blogs/:slug/",
        headers: noStoreHeaders,
      },
      {
        source: "/contact/",
        headers: noStoreHeaders,
      },
    ];
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  reactStrictMode: true,

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
