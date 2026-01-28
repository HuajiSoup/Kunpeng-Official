import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  isSuccessStory?: boolean;
}

interface FeaturedNewsProps {
  featuredNews: NewsItem[];
}

export default function FeaturedNews({ featuredNews }: FeaturedNewsProps) {
  if (featuredNews.length === 0) return null;

  const heroArticle = featuredNews[0];
  const sideArticles = featuredNews.slice(1, 3);

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
            <Link href={`/news/${heroArticle.id}`} className="block h-full">
              <div className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle h-full flex flex-col">
                {/* 图片占位符 */}
                <div className="aspect-[16/9] bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Featured Image</span>
                </div>

                {/* 内容 */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{heroArticle.date}</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                      {heroArticle.category === "success" ? "成功案例" : heroArticle.category === "company" ? "公司新闻" : "行业动态"}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {heroArticle.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5 flex-1">
                    {heroArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 右侧两个小文章 */}
          <div className="space-y-6 lg:col-span-1">
            {sideArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.id}`} className="block group">
                <div className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle">
                  {/* 图片占位符 */}
                  <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-medium">News Image</span>
                  </div>

                  {/* 内容 */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>

                    <h4 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
