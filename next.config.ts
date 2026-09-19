import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Verhindert, dass die Seite in ein fremdes iframe eingebettet wird (Clickjacking-Schutz).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Erzwingt HTTPS bei jedem folgenden Besuch, auch wenn jemand versucht auf http:// umzuleiten.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Verhindert, dass der Browser Dateitypen errät und z.B. eine Textdatei als Skript ausführt.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Schickt bei Klicks auf externe Links nur die Domain mit, nicht den vollen (ggf. sensiblen) Pfad.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Erlaubt Standortabfrage nur der eigenen Seite (Lena-Chat nutzt das), alles andere gesperrt.
          { key: "Permissions-Policy", value: "geolocation=(self), camera=(), microphone=()" },
        ],
      },
    ];
  },
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
