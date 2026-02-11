"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { NewsCard, NewsCardItem } from "./NewsCard";

interface FeaturedNewsProps {
  featuredNews: NewsCardItem[];
}

export default function FeaturedNews({ featuredNews }: FeaturedNewsProps) {
  const { t } = useLanguage();
  if (featuredNews.length === 0) return null;

  const [heroArticle, ...sideArticles] = featuredNews;

  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
          {t("news.list.featuredTitle")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* 大文章 - 左侧 */}
        <div className="lg:col-span-2 group">
          <NewsCard item={heroArticle} className="h-full" featured />
        </div>

        {/* 右侧两个小文章 */}
        <div className="space-y-6 lg:col-span-1">
          {sideArticles.map((article, index) => (
            <NewsCard item={article} showArrow={false} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
