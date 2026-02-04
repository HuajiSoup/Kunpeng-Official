"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { NavSidebar } from "@/components/ui/NavSidebar";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Downloads } from "@/components/contact/Downloads";
import { FAQ } from "@/components/contact/FAQ";

const getSections = (t: (key: string) => string) => [
  { id: "contact", label: t("contact.nav.contact") },
  { id: "downloads", label: t("contact.nav.downloads") },
  { id: "faq", label: t("contact.nav.faq") },
]

export default function ContactPage() {
  const { t } = useLanguage();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState("contact");

  const sections = getSections(t);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const currentSection = [...sections]
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

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (<>
    <ContactHero />

    <aside
      className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
        showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <NavSidebar 
        title={t("contact.navTitle")}
        sections={sections}
        activeId={activeItem}
        handleClick={handleNavClick}
      />
    </aside>

    {/* Main Content - 2 Column Layout */}
    <section className="py-10 lg:py-12">
      <div 
        className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 占位空间 - 移动端显示导航栏 */}
          <aside className="lg:col-span-1 lg:hidden">
            <div className="sticky top-20">
              <NavSidebar 
                title={t("contact.navTitle")}
                sections={sections}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-3 space-y-10">
            <ContactInfo />
            <Downloads />
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  </>);
}
