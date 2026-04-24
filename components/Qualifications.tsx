"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { HomeSectionTitle } from "./ui/HomeSectionTitle";
import { ItemBox } from "./ui/ItemBox";

export default function Qualifications() {
  const { t } = useLanguage();
  
  const qualifications = [
    {
      name: "CMA",
      fullName: t("home.qualifications.items.cma.fullName"),
      subtitle: t("home.qualifications.items.cma.subtitle"),
      description: t("home.qualifications.items.cma.description"),
    },
  ];

  return (
    <section id="qualifications" className="relative py-16 lg:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <HomeSectionTitle title={t("home.qualifications.title")} desc={t("home.qualifications.subtitle")} />

        <div className="w-full flex items-center justify-center mt-10">
          {qualifications.map((qual, index) => (
            <ItemBox
              key={index}
              fancy
              className="w-full text-center lg:w-1/4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-all duration-300">
                <div className="text-xs lg:text-sm font-semibold text-gray-700 group-hover:text-white transition-colors text-center px-1 leading-tight">
                  {qual.name}
                </div>
              </div>
              <h3 className="text-sm lg:text-base font-medium text-gray-900 mb-1 leading-tight">
                {qual.fullName}
              </h3>
              <p className="text-xs font-medium text-gray-700 mb-1">{qual.subtitle}</p>
              <p className="text-xs text-gray-500">{qual.description}</p>
            </ItemBox>
          ))}
        </div>
      </div>
    </section>
  );
}
