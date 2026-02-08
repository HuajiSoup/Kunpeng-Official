"use client";

import { useEffect, useState } from "react";
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
  { id: "consulting", label: t("services.sidebar.consulting") },
  { id: "engineering", label: t("services.sidebar.engineering") },
  { id: "training", label: t("services.sidebar.training") },
  { id: "process-workflow", label: t("services.sidebar.process") },
  { id: "success-stories", label: t("services.sidebar.cases") },
];


export default function ServicesPage() {
  const { t } = useLanguage();
  const sidebarItems = getSidebarItems(t);
  
  const [activeItem, setActiveItem] = useState<string>("consulting");

  // sidebar navigator
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const currentSection = [...sidebarItems]
        .reverse()
        .find(({id}) => {
          const element = document.getElementById(id);
          if (element) {
            return element.getBoundingClientRect().top <= 100;
          }
          return false;
        });

      if (currentSection) {
        setActiveItem(currentSection.id);
      }

    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarItems]);

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);

    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (<>
    <ServicesHero />

    {/* Main Content - 2 Column Layout */}
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <NavSidebar
                title={t("services.navTitle")}
                sections={sidebarItems}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-4 py-16">
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
  </>);
}
