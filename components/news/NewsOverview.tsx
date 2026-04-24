"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { getNewsList, getHeadlineNews, NewsCategory, NewsItem, normalizeNewsItem } from "@/lib/api/http/getNews";
import { useLanguage } from "@/lib/LanguageContext";

import FeaturedNews from "./FeaturedNews";
import NewsList from "./NewsList";
import NewsPagination from "./NewsPagination";

const ITEMS_PER_PAGE = 6;

const categoryMap: Record<string, NewsCategory> = {
  company: "company_news",
  industry: "industry_trends",
  success: "success_stories",
};

export default function NewsOverview() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category") || "all";
  
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [headlineNews, setHeadlineNews] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsCount, setNewsCount] = useState<number>(0);

  const showFeatured = (activeCategory === "all" && currentPage === 1 && headlineNews);

  useEffect(() => {
    setMounted(false);

    let cancelled = false;

    const fetchNewsData = async () => {
      const headline = await getHeadlineNews();
      const [newsList, totalCount] = await getNewsList({
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        category: categoryMap[activeCategory] || undefined,
        status: "published",
      });

      if (!cancelled) {
        setHeadlineNews(headline ? normalizeNewsItem(headline) : null);
        setNews(newsList.map(normalizeNewsItem));
        setNewsCount(totalCount);
        setMounted(true);
      }
    };

    void fetchNewsData();

    return () => {
      cancelled = true;
    };
  }, [activeCategory, currentPage]);

  const latestNews = news.length >= 2 ? news.slice(0, 2) : [];
  const totalPages = Math.ceil(newsCount / ITEMS_PER_PAGE);

  // 当 URL 参数改变时，更新 activeCategory 并重置为第一页
  useEffect(() => {
    const urlCategory = searchParams?.get("category") || "all";
    if (urlCategory !== activeCategory) {
      setActiveCategory(urlCategory);
      setCurrentPage(1);
    }
  }, [searchParams, activeCategory]);

  // 确保页码有效
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    }
  };

  if (!mounted) {
    return (
      <main className="flex-1 min-w-0 py-8">
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-gray-500">{t("news.loading")}</div>
        </div>
      </main>
    );
  }

  return (<>
    <main className="flex-1 min-w-0 py-8">
      {showFeatured && <FeaturedNews headline={headlineNews} latest={latestNews} />}
      <NewsList news={news} />
      {totalPages > 1 && (
        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  </>);
}