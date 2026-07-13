"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  fullURL: string | null;
  date: string;
  categoryID: number;
  categoryName: string;
}

interface NewsGridProps {
  initialArticles: NewsArticle[];
  locale: string;
}

export function NewsGrid({initialArticles, locale}: NewsGridProps) {
  const t = useTranslations("News");
  const [activeFilter, setActiveFilter] = useState<"all" | 8 | 15>("all");

  const filteredArticles = initialArticles.filter((article) => {
    if (activeFilter === "all") return true;
    return article.categoryID === activeFilter;
  });

  function formatDate(dateStr: string) {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(locale === "en" ? "en-US" : "nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  }

  return (
    <div className="news-container">
      <div className="news-filter-bar">
        <button
          type="button"
          className={`filter-pill ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          {t("filter_all")}
        </button>
        <button
          type="button"
          className={`filter-pill ${activeFilter === 8 ? "active" : ""}`}
          onClick={() => setActiveFilter(8)}
        >
          {t("filter_ithulp")}
        </button>
        <button
          type="button"
          className={`filter-pill ${activeFilter === 15 ? "active" : ""}`}
          onClick={() => setActiveFilter(15)}
        >
          {t("filter_studio")}
        </button>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="news-empty-state">
          <p>{t("empty")}</p>
        </div>
      ) : (
        <div className="news-grid">
          {filteredArticles.map((article) => {
            const isItHulp = article.categoryID === 8;
            const cardContent = <>
              <div className="news-card-image-wrapper">
                <Image
                  src={article.imageURL}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="news-card-image"
                />
                <span className={`news-card-badge ${isItHulp ? "badge-ithulp" : "badge-studio"}`}>
                  {article.categoryName}
                </span>
              </div>
              <div className="news-card-content">
                <span className="news-card-date">{formatDate(article.date)}</span>
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-description">{article.description}</p>
                {article.fullURL && <span className="news-card-cta">{t("read_more")} <span aria-hidden="true">↗</span></span>}
              </div>
            </>;

            return (
              <article key={article.id} className="news-card">
                {article.fullURL ? <a href={article.fullURL} target="_blank" rel="noopener noreferrer" className="news-card-link">{cardContent}</a> : <div className="news-card-static">{cardContent}</div>}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
