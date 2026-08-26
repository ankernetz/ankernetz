import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/glossar",
        destination: "/aktuelles#glossar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
