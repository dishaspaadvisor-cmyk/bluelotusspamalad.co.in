import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",

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
