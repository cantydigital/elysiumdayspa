import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photography is served from Unsplash's CDN; blog images from Sanity's.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
