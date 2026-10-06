import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Only load the HeroUI components actually used, which speeds up dev compiles.
    optimizePackageImports: ["@heroui/react"],
  },
};

export default nextConfig;
