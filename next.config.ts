import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.moitruonghtc.com" },
      { protocol: "https", hostname: "moitruonghtc.com" },
      { protocol: "https", hostname: "www.moitruonghtc.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      // Media WP có thể host subdomain AZDIGI
      { protocol: "https", hostname: "**.azdigihost.com" },
    ],
  },
};

export default nextConfig;
