import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/faith-community",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
