"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const getCategories = (t: (key: string) => string) => [
  { id: "all", label: t("testing.stickyCategories.all"), sectionId: "" },
  { id: "environment", label: t("testing.stickyCategories.environment"), sectionId: "environment-reliability" },
  { id: "emc", label: t("testing.stickyCategories.emc"), sectionId: "emc-testing" },
  { id: "software", label: t("testing.stickyCategories.software"), sectionId: "software-components" },
];

export default function StickyCategoryNav() {
  const { t } = useLanguage();
  const categories = getCategories(t);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const heroHeight = 500; // Hero section height
      setIsSticky(window.scrollY > heroHeight);

      // 根据滚动位置自动高亮当前部分
      const sections = categories
        .filter((cat) => cat.sectionId)
        .map((cat) => ({
          id: cat.id,
          element: document.getElementById(cat.sectionId),
        }));

      const currentSection = sections
        .reverse()
        .find(({ element }) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100;
          }
          return false;
        });

      if (currentSection) {
        setActiveCategory(currentSection.id);
      } else if (window.scrollY < heroHeight) {
        setActiveCategory("all");
      }
    };

    // 初始检查
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string, sectionId: string) => {
    setActiveCategory(categoryId);

    if (!sectionId) {
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const navHeight = 56;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`${
          isSticky ? "fixed top-20 shadow-lg" : "relative"
        } z-40 w-full bg-white/80 backdrop-blur-sm border-b border-blue-500/20 transition-all duration-300 shadow-sm`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.sectionId)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-blue-600 border-blue-600 bg-blue-50/60"
                    : "text-slate-600 border-transparent hover:text-blue-600 hover:bg-blue-50/40"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* 占位元素 - 防止 sticky 时页面跳动 */}
      {isSticky && <div className="h-14"></div>}
    </>
  );
}
