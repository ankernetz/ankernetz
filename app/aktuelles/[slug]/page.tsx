import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../articles";
import { SeoBreadcrumb } from "../../components/SeoBreadcrumb";
import { ArticlePageClient } from "./ArticlePageClient";

const BASE = "https://www.ankernetz.com";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title.de} | Ankernetz`,
    description: article.excerpt.de,
    keywords: article.keywords.de,
    alternates: { canonical: `${BASE}/aktuelles/${article.slug}` },
    openGraph: {
      title: article.title.de,
      description: article.excerpt.de,
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
