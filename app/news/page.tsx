"use client";

import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

import NewsHero from "@/components/news/NewsHero";
import NewsOverview from "@/components/news/NewsOverview";
import { NavSidebar } from "@/components/ui/NavSidebar";
import { useLanguage } from "@/lib/LanguageContext";

const getSidebarItems = (t: (key: string) => string) => [
  { id: "all", label: t("news.categories.all") },
  { id: "company", label: t("news.categories.company") },
  { id: "industry", label: t("news.categories.industry") },
  { id: "success", label: t("news.categories.success") },
];

export default function NewsPage() {
  const router = useRouter();

  const { t } = useLanguage();
  const sidebarItems = getSidebarItems(t);

  const [activeItem, setActiveItem] = useState<string>("all");

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    if (id === "all") {
      router.push("/news", { scroll: false });
    } else {
      router.push(`/news?category=${id}`, { scroll: false });
    }
  };

  return (<>
    <NewsHero />

    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="w-full mx-auto px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-0">
          <aside className="mx-auto lg:col-span-1 w-full">
            <div className="sticky top-20 w-4/5 mx-auto lg:w-10/12 lg:ml-auto lg:mr-0">
              <NavSidebar 
                title={t("news.navTitle")}
                sections={sidebarItems}
                activeId={activeItem}
                handleClick={handleNavClick}
              />
            </div>
          </aside>
        
          <div className="lg:col-span-4">
            <Suspense
              fallback={
                <main className="flex-1 min-w-0 py-8">
                  <div className="min-h-[50vh] flex items-center justify-center">
                    <div className="text-gray-500">{t("news.loading")}</div>
                  </div>
                </main>
              }
            >
              <NewsOverview />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  </>);
}
