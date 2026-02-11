import Link from "next/link";
import { Award, Calendar, ArrowRight } from "lucide-react";
import { ItemBox } from "../ui/ItemBox";
import { cn } from "@/lib/utils";

export interface NewsCardItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: "all" | "company" | "industry" | "success";
  image?: string;
  isSuccessStory?: boolean;
}

const categoryMap: Record<string, string> = {
  "company": "公司动态",
  "industry": "行业资讯",
  "success": "成功案例",
}

export function NewsCard({
  item,
  className = "",
  featured = false,
  showArrow = true
}: {
  item: NewsCardItem,
  className?: string,
  featured?: boolean,
  showArrow?: boolean,
}) {
  return (<>
    <Link href={`/news/${item.id}`} className={cn("block group", className)}>
      <ItemBox className="p-0 flex flex-col size-full">
        {/* 图片占位符 */}
        <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center relative">
          {item.isSuccessStory && (
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
        <div className="p-5 flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{item.date}</span>
            {item.category !== "all" && (
              <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                {categoryMap[item.category]}
              </span>
            )}
          </div>

          <h3 className={`text-${featured ? "3xl" : "lg"} font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2`}>
            {item.title}
          </h3>

          <p className={`text-${featured ? "base" : "sm"} text-gray-600 leading-relaxed flex-1 line-clamp-3`}>
            {item.summary}
          </p>

          {showArrow && <div className="inline-flex items-center text-sm font-medium text-blue-600 mt-auto">
            <span>阅读更多</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
          </div>}
        </div>
      </ItemBox>
    </Link>
  </>);
}