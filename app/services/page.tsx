"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ConsultingSection from "@/components/services/ConsultingSection";
import EngineeringSection from "@/components/services/EngineeringSection";
import TrainingSection from "@/components/services/TrainingSection";
import ProcessWorkflow from "@/components/services/ProcessWorkflow";
import SuccessStories from "@/components/services/SuccessStories";
import ServicesCTA from "@/components/services/ServicesCTA";
import { useLanguage } from "@/lib/LanguageContext";
import { DotBackground } from "@/components/ui/DotBackground";

const getSidebarItems = (t: (key: string) => string) => [
  { id: "consulting", label: t("services.sidebar.consulting"), sectionId: "consulting" },
  { id: "engineering", label: t("services.sidebar.engineering"), sectionId: "engineering" },
  { id: "training", label: t("services.sidebar.training"), sectionId: "training" },
  { id: "process", label: t("services.sidebar.process"), sectionId: "process-workflow" },
  { id: "cases", label: t("services.sidebar.cases"), sectionId: "success-stories" },
];


export default function ServicesPage() {
  const { t } = useLanguage();
  const sidebarItems = getSidebarItems(t);
  const [activeItem, setActiveItem] = useState("consulting");
  const [showSidebar, setShowSidebar] = useState(false);

  // 根据滚动位置自动高亮当前部分
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = sidebarItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.sectionId),
        }))
        .filter(({ element }) => element !== null);

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
        setActiveItem(currentSection.id);
      }

      // 检测是否在 Hero Section 和 Footer 之间
      const heroSection = document.querySelector('section[class*="h-[450px]"], section[class*="h-[550px]"]');
      const footer = document.querySelector('footer');

      if (heroSection && footer) {
        const scrollY = window.scrollY;
        const heroBottom = heroSection.getBoundingClientRect().top + heroSection.getBoundingClientRect().height + scrollY;
        const footerTop = footer.getBoundingClientRect().top + scrollY;

        // 在 Hero Section 和 Footer 之间显示导航栏
        setShowSidebar(scrollY > heroBottom && scrollY < footerTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检查
    // 延迟检查，确保 DOM 已渲染
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarItems]);

  const handleNavClick = (itemId: string, sectionId: string) => {
    setActiveItem(itemId);

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
        <ServicesHero />

      {/* Fixed Sidebar Navigation - 固定在左上角 */}
      <aside
        className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm w-[200px]">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">{t("services.navTitle")}</h3>
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id, item.sectionId)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                    activeItem === item.id
                      ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                      : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content - 5 Column Layout (1:4) */}
      <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div 
          className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]"
          ref={(el) => {
            if (el && typeof window !== 'undefined') {
              // #region agent log
              fetch('http://127.0.0.1:7242/ingest/d83501ac-32d8-41d1-947c-d06d63cbda90',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/services/page.tsx:129',message:'Layout calculation',data:{containerWidth:el.offsetWidth,windowWidth:window.innerWidth,rightPadding:window.getComputedStyle(el).paddingRight,leftPadding:window.getComputedStyle(el).paddingLeft,availableWidth:el.offsetWidth - parseFloat(window.getComputedStyle(el).paddingLeft) - parseFloat(window.getComputedStyle(el).paddingRight)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              // #endregion
            }
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* 占位空间 - 移动端显示导航栏 */}
            <aside className="lg:col-span-1 lg:hidden">
              <div className="sticky top-20">
                <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">{t("services.navTitle")}</h3>
                  <ul className="space-y-1">
                    {sidebarItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id, item.sectionId)}
                          className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                            activeItem === item.id
                              ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                              : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Right Content (4 columns) */}
            <div className="lg:col-span-4 space-y-24">
              <ConsultingSection />
              <EngineeringSection />
              <TrainingSection />
              <ProcessWorkflow />
              <SuccessStories />
              <ServicesCTA />
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  );
}
