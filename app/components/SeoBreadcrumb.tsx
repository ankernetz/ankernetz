const BASE = "https://www.ankernetz.com";

interface Crumb { name: string; slug?: string; }

export function SeoBreadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const items = [{ name: "Ankernetz", slug: "" }, ...crumbs];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE}${c.slug ? `/${c.slug}` : ""}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
