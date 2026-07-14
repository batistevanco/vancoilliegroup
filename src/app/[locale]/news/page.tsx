import {getTranslations} from "next-intl/server";
import {Navbar} from "@/components/Navbar";
import {FinalSection} from "@/components/FinalSection";
import {NewsGrid, type NewsArticle} from "@/components/NewsGrid";
import {routing} from "@/i18n/routing";
import {pageMetadata} from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return pageMetadata({
    locale,
    path: "/news",
    title: locale === "en" ? "Articles & News" : "Artikelen & Nieuws",
    description: locale === "en"
      ? "Stay up to date with the latest digital, technology and business updates from Vancoillie Group."
      : "Blijf op de hoogte van digitale, technologische en zakelijke updates van Vancoillie Group.",
  });
}

export default async function NewsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations("News");

  let articles: NewsArticle[] = [];

  try {
    const [res8, res15, res16] = await Promise.all([
      fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=8`, {
        next: {revalidate: 60},
      }),
      fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=15`, {
        next: {revalidate: 60},
      }),
      fetch(`https://vancoillieithulp.be/news/api.php?action=articles&lang=${locale}&category_id=16`, {
        next: {revalidate: 60},
      }),
    ]);

    if (res8.ok && res15.ok && res16.ok) {
      const data8: unknown = await res8.json();
      const data15: unknown = await res15.json();
      const data16: unknown = await res16.json();
      
      const arr8 = Array.isArray(data8) ? data8 as NewsArticle[] : [];
      const arr15 = Array.isArray(data15) ? data15 as NewsArticle[] : [];
      const arr16 = Array.isArray(data16) ? data16 as NewsArticle[] : [];

      articles = [...arr8, ...arr15, ...arr16].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
  } catch (error) {
    console.error("Failed to fetch articles from backend API:", error);
  }

  return (
    <div className="news-page-root">
      <Navbar />
      <main className="news-main-content">
        <header className="news-header-section">
          <p className="section-kicker">{t("kicker")}</p>
          <h1 id="news-title">{t("title")}</h1>
          <p className="news-intro-text">{t("intro")}</p>
        </header>
        <NewsGrid initialArticles={articles} locale={locale} />
      </main>
      <FinalSection />
    </div>
  );
}
