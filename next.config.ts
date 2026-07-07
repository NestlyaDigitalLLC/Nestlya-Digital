import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xocwycgjxoumhacazbft.supabase.co",
      },
    ],
  },
};

export default nextConfig;