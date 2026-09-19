import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../articles";
import { SeoBreadcrumb } from "../../components/SeoBreadcrumb";
import { ArticlePageClient } from "./ArticlePageClient";

const BASE = "https://www.ankernetz.com";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// Google zeigt in der Trefferliste nur ca. 155-160 Zeichen der Beschreibung an -
// laengere Texte werden mitten im Satz abgeschnitten. Deshalb an einer Wortgrenze
// kuerzen statt den vollen, fuer Leser gedachten Teaser-Text zu verwenden.
function kuerzeBeschreibung(text: string, max = 155): string {
  if (text.length <= max) return text;
  const geschnitten = text.slice(0, max);
  const letzteLeerstelle = geschnitten.lastIndexOf(" ");
  return `${geschnitten.slice(0, letzteLeerstelle > 80 ? letzteLeerstelle : max)}...`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const metaDescription = kuerzeBeschreibung(article.excerpt.de);

  return {
    title: `${article.title.de} | Ankernetz Berlin`,
    description: metaDescription,
    keywords: article.keywords.de,
    alternates: { canonical: `${BASE}/aktuelles/${article.slug}` },
    openGraph: {
      title: article.title.de,
      description: metaDescription,
      url: `${BASE}/aktuelles/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title.de,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Ankernetz", url: BASE },
    publisher: { "@type": "Organization", name: "Ankernetz", url: BASE },
    description: article.excerpt.de,
    keywords: article.keywords.de.join(", "),
    url: `${BASE}/aktuelles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoBreadcrumb
        crumbs={[
          { name: "Aktuelles", slug: "aktuelles" },
          { name: article.title.de, slug: `aktuelles/${article.slug}` },
        ]}
      />
      <ArticlePageClient article={article} />
    </>
  );
}
