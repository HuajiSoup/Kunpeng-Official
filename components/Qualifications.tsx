"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IntroTitle } from "./ui/IntroTitle";
import { BentoCard } from "./ui/BentoGrid";

export default function Qualifications() {
  const { t } = useLanguage();
  
  const qualifications = [
    {
      name: "CNAS",
      fullName: t("home.qualifications.items.cnas.fullName"),
      subtitle: t("home.qualifications.items.cnas.subtitle"),
      description: t("home.qualifications.items.cnas.description"),
    },
    {
      name: "ISO/IEC 17025",
      fullName: t("home.qualifications.items.iso17025.fullName"),
      subtitle: t("home.qualifications.items.iso17025.subtitle"),
      description: t("home.qualifications.items.iso17025.description"),
    },
    {
      name: "AS9100D",
      fullName: t("home.qualifications.items.as9100d.fullName"),
      subtitle: t("home.qualifications.items.as9100d.subtitle"),
      description: t("home.qualifications.items.as9100d.description"),
    },
    {
      name: "ISO 9001",
      fullName: t("home.qualifications.items.iso9001.fullName"),
      subtitle: t("home.qualifications.items.iso9001.subtitle"),
      description: t("home.qualifications.items.iso9001.description"),
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <IntroTitle title={t("home.qualifications.title")} desc={t("home.qualifications.subtitle")} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {qualifications.map((qual, index) => (
            <BentoCard
              key={index}
              className="group p-6 bg-slate-900/30 border-slate-800 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 border border-blue-500/30 group-hover:border-cyan-400/50">
                <div className="text-xs lg:text-sm font-semibold text-blue-300 group-hover:text-white transition-colors text-center px-1 leading-tight">
                  {qual.name}
                </div>
              </div>
              <h3 className="text-sm lg:text-base font-medium text-white mb-1 leading-tight">
                {qual.fullName}
              </h3>
              <p className="text-xs font-medium text-cyan-300 mb-1">{qual.subtitle}</p>
              <p className="text-xs text-slate-400">{qual.description}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
