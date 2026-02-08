"use client";

import { useState, useEffect, useRef } from "react";
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
  const [activeItem, setActiveItem] = useState("environment");

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (<>
    <TestingHero />

    {/* Main Content - 2 Column Layout */}
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
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
