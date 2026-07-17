import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/careers", destination: "/partnerships", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/blog", destination: "/talent-perspectives", permanent: true },
      { source: "/blog/:slug", destination: "/talent-perspectives/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
