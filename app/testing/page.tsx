"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestingHero from "@/components/testing/TestingHero";
import EnvironmentTesting from "@/components/testing/EnvironmentTesting";
import EMCTesting from "@/components/testing/EMCTesting";
import SoftwareComponents from "@/components/testing/SoftwareComponents";
import EquipmentTable from "@/components/testing/EquipmentTable";
import TestingCTA from "@/components/testing/TestingCTA";
import { useLanguage } from "@/lib/LanguageContext";
import { DotBackground } from "@/components/ui/DotBackground";

const getCategories = (t: (key: string) => string) => [
  { id: "all", label: t("testing.categories.all"), sectionId: "" },
  { id: "environment", label: t("testing.categories.environment"), sectionId: "environment-reliability" },
  { id: "emc", label: t("testing.categories.emc"), sectionId: "emc-testing" },
  { id: "software", label: t("testing.categories.software"), sectionId: "software-components" },
];

export default function TestingPage() {
  const { t } = useLanguage();
  const categories = getCategories(t);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showSidebar, setShowSidebar] = useState(false);

  // 检测滚动位置，控制导航栏显示/隐藏
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section[class*="h-[450px]"], section[class*="h-[550px]"]');
      const footer = document.querySelector('footer');

      if (!heroSection || !footer) return;

      const scrollY = window.scrollY;
      const heroBottom = heroSection.getBoundingClientRect().top + heroSection.getBoundingClientRect().height + scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;

      // 在 Hero Section 和 Footer 之间显示导航栏
      setShowSidebar(scrollY > heroBottom && scrollY < footerTop - 100);
    };

    window.addEventListener("scroll", handleScroll);
    // 延迟检查，确保 DOM 已渲染
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string, sectionId: string) => {
    setActiveCategory(categoryId);

    if (!sectionId) {
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 使用 CSS scroll-mt，浏览器会自动处理偏移
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* 浅色点状背景 */}
      <DotBackground variant="light" />
      
      {/* 内容层 */}
      <div className="relative z-10">
        <Header />
        <TestingHero />

      {/* Fixed Sidebar Navigation - 固定在左上角 */}
      <aside
        className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm w-[200px]">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 px-2">{t("testing.navTitle")}</h3>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id, category.sectionId)}
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

      {/* Main Content - 2 Column Layout */}
      <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div 
          className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]"
          ref={(el) => {
            if (el && typeof window !== 'undefined') {
              // #region agent log
              fetch('http://127.0.0.1:7242/ingest/d83501ac-32d8-41d1-947c-d06d63cbda90',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/testing/page.tsx:106',message:'Layout calculation',data:{containerWidth:el.offsetWidth,windowWidth:window.innerWidth,rightPadding:window.getComputedStyle(el).paddingRight,leftPadding:window.getComputedStyle(el).paddingLeft,availableWidth:el.offsetWidth - parseFloat(window.getComputedStyle(el).paddingLeft) - parseFloat(window.getComputedStyle(el).paddingRight)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
              // #endregion
            }
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* 占位空间 - 移动端显示导航栏 */}
            <aside className="lg:col-span-1 lg:hidden">
              <div className="sticky top-20">
                <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 px-2">{t("testing.navTitle")}</h3>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryClick(category.id, category.sectionId)}
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
              </div>
            </aside>

            {/* Right Content */}
            <div className="lg:col-span-4">
              {/* Show all sections or filtered section based on activeCategory */}
              {(activeCategory === "all" || activeCategory === "environment") && (
                <EnvironmentTesting />
              )}

              {(activeCategory === "all" || activeCategory === "emc") && (
                <EMCTesting />
              )}

              {(activeCategory === "all" || activeCategory === "software") && (
                <SoftwareComponents />
              )}

              {/* Equipment Table - Always shown */}
              {activeCategory === "all" && (
                <div className="border-t border-gray-200 pt-12 mt-12">
                  <EquipmentTable />
                </div>
              )}

              {/* CTA - Always shown */}
              <div className="border-t border-gray-200 pt-12 mt-12">
                <TestingCTA />
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  );
}
