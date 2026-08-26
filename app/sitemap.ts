import type { MetadataRoute } from "next";
import { articles } from "./aktuelles/articles";

const BASE = "https://www.ankernetz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const artikelUrls: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/aktuelles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: BASE,                                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/krisenintervention`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/psychotherapie`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fruehe-hilfen`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/therapie-wohnen`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/jugendhilfe`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diagnostik-clearing`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/beratung-praevention`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kita-beratung`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/uebergang-arbeit`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ankerkleidung`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/versorgung`,                  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/platzanfrage`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ueber-uns`,                   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/karriere`,                    lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/kontakt`,                     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/impressum`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/datenschutz`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    // Blog / Aktuelles
    { url: `${BASE}/aktuelles`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    ...artikelUrls,
  ];
}
