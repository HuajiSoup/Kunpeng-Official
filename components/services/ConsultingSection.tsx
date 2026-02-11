"use client";

import { FileCheck, Award, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ItemBox } from "../ui/ItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getConsultingItems = (t: (key: string) => string) => [
  {
    title: t("services.consulting.items.tc.title"),
    icon: FileCheck,
    description: t("services.consulting.items.tc.description"),
  },
  {
    title: t("services.consulting.items.pc.title"),
    icon: Award,
    description: t("services.consulting.items.pc.description"),
  },
  {
    title: t("services.consulting.items.ctso.title"),
    icon: Shield,
    description: t("services.consulting.items.ctso.description"),
  }
];

export default function ConsultingSection() {
  const { t } = useLanguage();
  const consultingItems = getConsultingItems(t);

  return (
    <section id="consulting" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="consulting">
      <PageSectionTitle 
        title={t("services.consulting.title")}
        subtitle={t("services.consulting.subtitle")}
        description={t("services.consulting.description")}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {consultingItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ItemBox key={index}>
              <div className="w-12 h-12 mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </ItemBox>
          );
        })}
      </div>
    </section>
  );
}
