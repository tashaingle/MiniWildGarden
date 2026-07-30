import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer sharper defaults for photographic heroes; callers can still override.
    qualities: [75, 85, 90, 92, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
