import { NewsCard, NewsItem } from "./NewsCard";

interface FeaturedNewsProps {
  featuredNews: NewsItem[];
}

export default function FeaturedNews({ featuredNews }: FeaturedNewsProps) {
  if (featuredNews.length === 0) return null;

  const [heroArticle, ...sideArticles] = featuredNews;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            精选新闻
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
      </div>
    </section>
  );
}
