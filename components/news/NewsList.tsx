import Link from "next/link";
import { Calendar, ArrowRight, Award } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  isSuccessStory?: boolean;
}

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  if (news.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center py-12">
            <p className="text-gray-500">暂无新闻</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {news.map((article) => (
            <Link key={article.id} href={`/news/${article.id}`} className="block group">
              <div className={`bg-white/80 backdrop-blur-sm border-[0.5px] rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle h-full flex flex-col ${
                article.isSuccessStory ? "border-blue-500/30" : "border-blue-500/20"
              }`}>
                {/* 图片占位符 */}
                <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center relative">
                  {article.isSuccessStory && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>成功案例</span>
                      </div>
                    </div>
                  )}
                  <span className="text-gray-400 text-xs font-medium">News Image</span>
                </div>

                {/* 卡片内容 */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                    {!article.isSuccessStory && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                        {article.category === "company" ? "公司新闻" : "行业动态"}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all mt-auto">
                    <span>阅读更多</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
