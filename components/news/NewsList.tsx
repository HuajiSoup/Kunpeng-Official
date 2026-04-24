"use client";

import type { NewsItem } from "@/lib/api/http/getNews";
import { useLanguage } from "@/lib/LanguageContext";

import { NewsCard } from "./NewsCard";

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  const { t } = useLanguage();

  if (news.length === 0) {
    return (
      <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
        <div className="text-center py-12">
          <p className="text-gray-500">{t("news.list.empty")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
          {t("news.list.allTitle")}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {news.map((article, index) => (
          <NewsCard item={article} key={index} />
        ))}
      </div>
    </section>
  );
}
