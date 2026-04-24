"use client";

import { useEffect, useState } from "react";

import ConsultingSection from "@/components/services/ConsultingSection";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesHero from "@/components/services/ServicesHero";
import { NavSidebar } from "@/components/ui/NavSidebar";
import { useLanguage } from "@/lib/LanguageContext";

const getSidebarItems = (t: (key: string) => string) => [
  { id: "consulting", label: t("services.sidebar.consulting") },
  // { id: "process-workflow", label: t("services.sidebar.process") },
  // { id: "success-stories", label: t("services.sidebar.cases") },
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
      const limit = window.innerHeight / 2;
      const currentSection = [...sidebarItems]
        .find(({id}) => {
          const element = document.getElementById(id);
          if (element) {
            return element.getBoundingClientRect().bottom >= limit;
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
  }, []);

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);

    const element = document.getElementById(itemId);
    if (element) {
      const scrollTop = element.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (<>
    <ServicesHero />

    {/* Main Content - 2 Column Layout */}
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="w-full mx-auto px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-0">
          <aside className="mx-auto lg:col-span-1 w-full">
            <div className="sticky top-20 w-4/5 mx-auto lg:w-10/12 lg:ml-auto lg:mr-0">
              <NavSidebar
                title={t("services.navTitle")}
                sections={sidebarItems}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-4">
            <ConsultingSection />
            {/* <EngineeringSection /> */}
            {/* <TrainingSection /> */}
            {/* <ProcessWorkflow /> */}
            {/* <SuccessStories /> */}
            <ServicesCTA />
          </div>
        </div>
      </div>
    </section>
  </>);
}
