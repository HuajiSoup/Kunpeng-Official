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
  // { id: "downloads", label: t("contact.nav.downloads") },
  // { id: "faq", label: t("contact.nav.faq") },
]

export default function ContactPage() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState("contact");

  const sections = getSections(t);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // auto highlight
      const limit = window.innerHeight / 2;
      const currentSection = [...sections]
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
    <ContactHero />

    {/* Main Content - 2 Column Layout */}
    <section className="py-10 lg:py-12">
      <div className="w-full mx-auto px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-0">
          <aside className="mx-auto lg:col-span-1 w-full">
            <div className="sticky top-20 w-4/5 mx-auto lg:w-10/12 lg:ml-auto lg:mr-0">
              <NavSidebar 
                title={t("contact.navTitle")}
                sections={sections}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-4 space-y-10">
            <ContactInfo />
            {/* <Downloads />
            <FAQ /> */}
          </div>
        </div>
      </div>
    </section>
  </>);
}
