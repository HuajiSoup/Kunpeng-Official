"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", label: "全部" },
  { id: "company", label: "公司新闻" },
  { id: "industry", label: "行业动态" },
  { id: "success", label: "成功案例" },
];

interface NewsCategoriesProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function NewsCategories({ activeCategory, onCategoryChange }: NewsCategoriesProps) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  // 检测滚动位置，控制导航栏显示/隐藏
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const heroSection = document.querySelector('section[class*="h-[450px]"], section[class*="h-[550px]"]');
      const footer = document.querySelector('footer');

      if (heroSection && footer) {
        const scrollY = window.scrollY;
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        // 计算 Hero Section 的底部位置（相对于文档顶部）
        const heroBottom = heroRect.top + heroRect.height + scrollY;
        // 计算 Footer 的顶部位置（相对于文档顶部）
        const footerTop = footerRect.top + scrollY;
        
        // 只有在 Hero Section 下方且 Footer 上方100px之前才显示导航栏
        const shouldShow = scrollY >= heroBottom && scrollY < footerTop - 100;
        setShowSidebar(shouldShow);
      } else {
        // 如果找不到元素，默认隐藏
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 初始检查
    handleScroll();
    // 延迟检查，确保 DOM 已渲染
    setTimeout(handleScroll, 100);
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    // 更新 URL
    if (categoryId === "all") {
      router.push("/news", { scroll: false });
    } else {
      router.push(`/news?category=${categoryId}`, { scroll: false });
    }
  };

  return (
    <aside 
      className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
        showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm w-[200px]">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">分类筛选</h3>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                  activeCategory === category.id
                    ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                    : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
