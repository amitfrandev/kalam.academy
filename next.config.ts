// next.config.ts or next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kalamacademy.org",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
