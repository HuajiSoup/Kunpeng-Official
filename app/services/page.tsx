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
import { NavSidebar } from "@/components/ui/NavSidebar";

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

  // sidebar navigator
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const currentSection = [...sidebarItems]
        .reverse()
        .find(({sectionId}) => {
          const element = document.getElementById(sectionId);
          if (element) {
            return element.getBoundingClientRect().top <= 100;
          }
          return false;
        });

      if (currentSection) {
        setActiveItem(currentSection.id);
      }

      // Between .hero-section and Footer -> Show sidebar
      const heroSection = document.querySelector('section.hero-section');
      const footer = document.querySelector('footer');

      if (heroSection && footer) {
        const scrollY = window.scrollY;
        const heroBottom = heroSection.getBoundingClientRect().top + heroSection.getBoundingClientRect().height + scrollY;
        const footerTop = footer.getBoundingClientRect().top + scrollY;

        setShowSidebar(scrollY >= heroBottom && scrollY <= footerTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarItems]);

  const handleNavClick = (itemId: string, sectionId: string) => {
    setActiveItem(itemId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10">
        <Header />
        <ServicesHero />

        {/* Fixed Sidebar Navigation - 固定在左上角 */}
        <aside
          className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
            showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <NavSidebar
            title={t("services.navTitle")}
            sections={sidebarItems}
            activeId={activeItem}
            handleClick={handleNavClick}
          />
        </aside>

        {/* Main Content - 5 Column Layout (1:4) */}
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
          <div className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* 占位空间 - 移动端显示导航栏 */}
              <aside className="lg:col-span-1 lg:hidden">
                <NavSidebar
                  title={t("services.navTitle")}
                  sections={sidebarItems}
                  activeId={activeItem}
                  handleClick={handleNavClick}
                />
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
