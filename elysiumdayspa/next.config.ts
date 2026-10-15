import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photography is served from Unsplash's CDN.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
};

export default nextConfig;
