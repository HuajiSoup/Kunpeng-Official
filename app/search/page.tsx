"use client";

import { useState, Suspense, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResultList } from "@/components/search/SearchResultList";
import { getNewsList, NewsCategory, NewsItem, normalizeNewsItem } from "@/lib/api/http/getNews";

export type searchResultCategory = "all" | "company" | "industry" | "success";

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: searchResultCategory;
  href: string;
  date?: string;
  type: "news";
}

const categoryMap: Record<string, NewsCategory> = {
  company: "company_news",
  industry: "industry_trends",
  success: "success_stories",
};

const getSearchCategories = (t: (key: string) => string) => [
  { id: "all", label: t("search.categories.all") },
  { id: "company", label: t("search.categories.company") },
  { id: "industry", label: t("search.categories.industry") },
  { id: "success", label: t("search.categories.success") },
];

function SearchContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const [activeCategory, setActiveCategory] = useState<searchResultCategory>("all");
  const [results, setResults] = useState<NewsItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setTotalCount(0);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const [newsList, total] = await getNewsList({
          page: 1,
          limit: 50,
          category: activeCategory === "all" ? undefined : categoryMap[activeCategory],
          status: "published",
          search: query.trim(),
        });
        setResults(newsList.map(normalizeNewsItem));
        setTotalCount(total);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    void fetchSearchResults();
  }, [query, activeCategory]);

  const searchCategories = getSearchCategories(t);

  // Convert NewsItem[] to SearchResult[]
  const newsCategoryToSearchCategory: Record<string, searchResultCategory> = {
    company_news: "company",
    industry_trends: "industry",
    success_stories: "success",
  };

  const searchResults: SearchResult[] = results.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.summary || item.content.substring(0, 150),
    category: newsCategoryToSearchCategory[item.category] || "company",
    href: `/news/${item.id}`,
    date: item.publishTime,
    type: "news",
  }));

  return (<>
    <div className="container mx-auto my-8 px-6 sm:px-8 lg:px-12">
      {query ? (
        <>
          {/* 结果统计和分类筛选 */}
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              {t("search.results.prefix")}
              <span className="text-blue-600 font-semibold">{totalCount}</span>
              {t("search.results.middle")}
              "<span className="text-gray-900 font-semibold">{query}</span>"
              {t("search.results.suffix")}
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {searchCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as searchResultCategory)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 结果列表 */}
          {loading ? (
            <div className="text-center py-20">
              <div className="text-gray-500">{t("search.loading")}</div>
            </div>
          ) : searchResults.length > 0 ? (
            <SearchResultList results={searchResults} query={query} category={activeCategory} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg mb-2">{t("search.noResults.title")}</p>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 text-lg">{t("search.empty.title")}</p>
        </motion.div>
      )}
    </div>
  </>);
}

export default function SearchPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = inputRef.current?.value;
    if (searchInput && searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (<>
    <section className="relative py-12 lg:py-16 bg-gray-50 min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-500">{t("search.loading")}</div>
          </div>
        }
      >
        <SearchBar inputRef={inputRef} handleSearch={handleSearch} />
        <SearchContent />
      </Suspense>
    </section>
  </>);
}
