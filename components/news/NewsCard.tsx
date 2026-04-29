import Link from "next/link";

import { Award, Calendar, ArrowRight } from "lucide-react";

import { type NewsItem } from "@/lib/api/http/getNews";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

import { ItemBox } from "../ui/ItemBox";

const getCategoryMap = (t: (key: string) => string): Record<string, string> => ({
  company_news: t("news.categories.company"),
  industry_trends: t("news.categories.industry"),
  success_stories: t("news.categories.success"),
});

export function NewsCard({
  item,
  className = "",
  featured = false,
  showArrow = true
}: {
  item: NewsItem,
  className?: string,
  featured?: boolean,
  showArrow?: boolean,
}) {
  const { t } = useLanguage();
  const categoryMap = getCategoryMap(t);

  return (<>
    <Link href={`/news/${item.id}`} className={cn("block group", className)}>
      <ItemBox className="p-0 flex flex-col size-full">
        {/* 图片占位符 */}
        <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center relative">
          {item.category === "success_stories" && (
            <div className="absolute top-3 right-3">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>{t("news.badges.success")}</span>
              </div>
            </div>
          )}
          <div className="object-fill rounded-t-xl" style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${item.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        </div>

        {/* 卡片内容 */}
        <div className="p-5 flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{item.publishTime}</span>
            <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
              {categoryMap[item.category]}
            </span>
          </div>

          <h3 className={`text-${featured ? "3xl" : "lg"} font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2`}>
            {item.title}
          </h3>

          <p className={`text-${featured ? "base" : "sm"} text-gray-600 leading-relaxed flex-1 line-clamp-3`}>
            {item.summary ?? ""}
          </p>

          {showArrow && <div className="inline-flex items-center text-sm font-medium text-blue-600 mt-auto">
            <span>{t("news.actions.readMore")}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
          </div>}
        </div>
      </ItemBox>
    </Link>
  </>);
}