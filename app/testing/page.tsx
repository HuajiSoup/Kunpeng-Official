"use client";

import { useState, useEffect } from "react";
import TestingHero from "@/components/testing/TestingHero";
import EnvironmentTesting from "@/components/testing/EnvironmentTesting";
import EMCTesting from "@/components/testing/EMCTesting";
import SoftwareComponents from "@/components/testing/SoftwareComponents";
import CoreTestings from "@/components/testing/CoreTestings";
import TestingCTA from "@/components/testing/TestingCTA";
import { useLanguage } from "@/lib/LanguageContext";
import { NavSidebar } from "@/components/ui/NavSidebar";

const getCategories = (t: (key: string) => string) => [
  { id: "environment-reliability", label: t("testing.categories.environment") },
  { id: "emc-testing", label: t("testing.categories.emc") },
  { id: "software-components", label: t("testing.categories.components") },
  { id: "core-testings", label: t("testing.categories.core") },
];

export default function TestingPage() {
  const { t } = useLanguage();
  const categories = getCategories(t);
  const [activeItem, setActiveItem] = useState("environment-reliability");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const limit = window.innerHeight / 2;
      const currentSection = [...categories]
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

  const handleNavClick = (id: string) => {
    setActiveItem(id);

    const element = document.getElementById(id);
    if (element) {
      const scrollTop = element.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (<>
    <TestingHero />

    {/* Main Content - 2 Column Layout */}
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="w-full mx-auto px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-0">
          <aside className="mx-auto lg:col-span-1 w-full">
            <div className="sticky top-20 w-4/5 mx-auto lg:w-10/12 lg:ml-auto lg:mr-0">
              <NavSidebar
                title={t("testing.navTitle")}
                sections={categories}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-4">
            <EnvironmentTesting />
            <EMCTesting />
            <SoftwareComponents />
            <CoreTestings />
            <TestingCTA />
          </div>
        </div>
      </div>
    </section>
  </>);
}
