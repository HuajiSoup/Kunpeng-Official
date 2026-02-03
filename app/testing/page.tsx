"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const currentSection = [...categories]
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
  }, []);

  const handleNavClick = (id: string) => {
    setActiveItem(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10">
        <Header />
        <TestingHero />

        {/* Fixed NavBar for desktop */}
        <aside
          className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
            showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <NavSidebar 
            title={t("testing.navTitle")}
            sections={categories}
            activeId={activeItem}
            handleClick={handleNavClick}
          />
        </aside>

        {/* Main Content - 2 Column Layout */}
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
          <div className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Page top NavBar for phone */}
              <aside className="lg:col-span-1 lg:hidden">
                <NavSidebar
                  title={t("testing.navTitle")}
                  sections={categories}
                  activeId={activeItem}
                  handleClick={handleNavClick}
                />
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

        <Footer />
      </div>
    </main>
  );
}
