import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageSectionTitle } from "../ui/PageSectionTitle";
import { NewsCard, NewsCardItem } from "../news/NewsCard";
import { useLanguage } from "@/lib/LanguageContext";

const getSuccessStories = (t: (key: string) => string): NewsCardItem[] => [
  {
    id: "2",
    title: t("services.successStories.items.case1.title"),
    summary: t("services.successStories.items.case1.summary"),
    category: "success",
    date: "2024-01-10",
    isSuccessStory: true,
  },
  {
    id: "5",
    title: t("services.successStories.items.case2.title"),
    summary: t("services.successStories.items.case2.summary"),
    category: "success",
    date: "2023-12-28",
    isSuccessStory: true,
  },
  {
    id: "8",
    title: t("services.successStories.items.case3.title"),
    summary: t("services.successStories.items.case3.summary"),
    category: "success",
    date: "2023-12-15",
    isSuccessStory: true,
  },
];

export default function SuccessStories() {
  const { t } = useLanguage();
  const successStories = getSuccessStories(t);

  return (
    <section id="success-stories" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10">
      <PageSectionTitle 
        title={t("services.successStories.section.title")}
        subtitle={t("services.successStories.section.subtitle")}
        description={t("services.successStories.section.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <NewsCard key={story.id} item={story} showArrow />
        ))}
      </div>

      {/* more */}
      <div className="mt-8 text-center">
        <Link
          href="/news?category=success"
          className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>{t("services.successStories.section.viewMore")}</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
