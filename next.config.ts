import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images:{
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'apistore.cybersoft.edu.vn',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
