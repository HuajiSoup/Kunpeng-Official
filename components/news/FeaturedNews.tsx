"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { NewsCard } from "./NewsCard";
import type { NewsItem } from "@/lib/api/http/getNews";

interface FeaturedNewsProps {
  headline: NewsItem;
  latest: NewsItem[];
}

export default function FeaturedNews({ headline, latest }: FeaturedNewsProps) {
  const { t } = useLanguage();

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
          <NewsCard item={headline} className="h-full" featured />
        </div>

        {/* 右侧两个小文章，这并不好*/}
        <div className="space-y-6 lg:col-span-1">
          {latest.map((article, index) => (
            <NewsCard item={article} showArrow={false} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
