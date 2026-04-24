import Link from "next/link";

import { motion, Variants } from "framer-motion";
import { FileText, Calendar, ArrowRight } from "lucide-react";

import { SearchResult } from "@/app/search/page";
import { useLanguage } from "@/lib/LanguageContext";

interface SearchResultCardProps {
  item: SearchResult;
  query: string;
}

// highlight query
const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === query.toLowerCase()) {
      return (
        <span key={index} className="text-blue-600 font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
};

// get category color
const getCategoryBadge = (category: string, t: (key: string) => string) => {
  const badgeClass = {
    all: "bg-gray-100 text-gray-700",
    testing: "bg-blue-100 text-blue-700",
    services: "bg-purple-100 text-purple-700",
    company: "bg-gray-100 text-gray-700",
    industry: "bg-green-100 text-green-700",
    success: "bg-yellow-100 text-yellow-700",
  }[category] || "bg-gray-100 text-gray-700";

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded ${badgeClass}`}>
      {t(`search.categories.${category}`)}
    </span>
  );
};

export function SearchResultCard({ item, query }: SearchResultCardProps) {
  const { t } = useLanguage();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (<>
    <motion.div
      key={item.id}
      variants={itemVariants}
      className="w-full"
    >
      <Link
        href={item.href}
        className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle h-full flex flex-col"
      >
        {/* 图片占位符 */}
        <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center relative">
          {item.type === "news" && item.category === "success" && (
            <div className="absolute top-3 right-3">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span>{t("news.badges.success")}</span>
              </div>
            </div>
          )}
          <span className="text-gray-400 text-xs font-medium">
            News Image
          </span>
        </div>

        {/* 卡片内容 */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            {item.date && (
              <>
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </>
            )}
            {getCategoryBadge(item.category, t)}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {highlightText(item.title, query)}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1 line-clamp-3">
            {highlightText(item.excerpt, query)}
          </p>

          <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all mt-auto">
            <span>{t("search.actions.viewDetails")}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  </>);
}