import Image from "next/image";
import {notFound} from "next/navigation";
import {getTranslations} from "next-intl/server";
import {Navbar} from "@/components/Navbar";
import {FinalSection} from "@/components/FinalSection";
import {Link} from "@/i18n/navigation";
import {pageMetadata} from "@/lib/seo";
import type {NewsArticle} from "@/components/NewsGrid";

async function getArticle(locale: string, id: string) {
  const responses = await Promise.all([
    fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=8`, {next: {revalidate: 60}}),
    fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=15`, {next: {revalidate: 60}}),
    fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=16`, {next: {revalidate: 60}}),
  ]);
  const articles = (await Promise.all(responses.map(async (response) => response.ok ? await response.json() : [])))
    .flat()
    .filter((article): article is NewsArticle => article && typeof article.id === "number");
  return articles.find((article) => String(article.id) === id);
}

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale === "en" ? "en-US" : "nl-BE", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export async function generateMetadata({params}: {params: Promise<{locale: string; id: string}>}) {
  const {locale, id} = await params;
  const article = await getArticle(locale, id);
  if (!article) return {};
  return pageMetadata({locale, path: `/news/${id}`, title: article.title, description: article.description.slice(0, 155)});
}

export default async function NewsArticlePage({params}: {params: Promise<{locale: string; id: string}>}) {
  const {locale, id} = await params;
  const [t, article] = await Promise.all([getTranslations("News"), getArticle(locale, id)]);
  if (!article) notFound();

  return <div className="news-page-root">
    <Navbar />
    <main className="news-article-main">
      <Link className="section-text-link news-back-link" href="/news">← {t("back")}</Link>
      <article className="news-article">
        <header className="news-article-header">
          <p className="section-kicker">{article.categoryName}</p>
          <p className="news-card-date">{formatDate(article.date, locale)}</p>
          <h1>{article.title}</h1>
        </header>
        <div className="news-article-image"><Image src={article.imageURL} alt={article.title} fill priority sizes="(max-width: 900px) 100vw, 900px" /></div>
        <div className="news-article-body">
          {article.description.split(/\r?\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {article.fullURL && <a href={article.fullURL} target="_blank" rel="noreferrer" className="button-dark">{t("visit_link")} <span aria-hidden="true">↗</span></a>}
        </div>
      </article>
    </main>
    <FinalSection />
  </div>;
}
