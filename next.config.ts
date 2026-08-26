import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/glossar",
        destination: "/aktuelles#glossar",
        permanent: true,
      },
      {
        source: "/wegweiser",
        destination: "/kompass",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
