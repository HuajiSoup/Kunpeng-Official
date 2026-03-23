"use client";

import { Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ItemBox } from "../ui/ItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getCultureItems = (t: (key: string) => string) => [
  {
    icon: Target,
    title: t("about.culture.items.mission.title"),
    englishTitle: t("about.culture.items.mission.englishTitle"),
    description: t("about.culture.items.mission.description"),
  },
  {
    icon: Eye,
    title: t("about.culture.items.vision.title"),
    englishTitle: t("about.culture.items.vision.englishTitle"),
    description: t("about.culture.items.vision.description"),
  },
  {
    icon: Heart,
    title: t("about.culture.items.values.title"),
    englishTitle: t("about.culture.items.values.englishTitle"),
    description: t("about.culture.items.values.description"),
  },
];

export default function CorporateCulture() {
  const { t } = useLanguage();
  const cultureItems = getCultureItems(t);

  return (
    <section id="corporate-culture" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16" data-anchor="qualifications">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <PageSectionTitle 
          title={t("about.culture.title")}
          subtitle={t("about.culture.subtitle")}
          description={t("about.culture.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {cultureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ItemBox fancy className="text-center" key={index}>
                <div className="w-20 h-20 bg-gray-900/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300 border-[0.5px] border-gray-900/20 group-hover:border-gray-900/40">
                  <Icon className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-semibold text-blue-600/70 tracking-widest uppercase mb-2">
                  {item.englishTitle}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </ItemBox>
            );
          })}
        </div>
      </div>
    </section>
  );
}
