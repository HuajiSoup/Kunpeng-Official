"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";
import { ShieldCheck } from "lucide-react";

export default function ServicesHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      titleTop="AIRWORTHINESS SERVICES"
      titleMain={t("services.hero.title")}
      titleBottom={t("services.hero.subtitle")}
      statistics={[
        {
          label: t("services.hero.statistics.successCases"),
          value: "30+"
        },
        {
          label: t("services.hero.statistics.certificationStandards"),
          value: "50+"
        },
        {
          label: t("services.hero.statistics.professionalTeam"),
          value: "10+"
        }
      ]}
      LabelIcon={ShieldCheck}
      labelTitleMain={t("services.hero.labelTitleMain")}
      labelTitleBottom={t("services.hero.labelTitleBottom")}
    />
  );
}
