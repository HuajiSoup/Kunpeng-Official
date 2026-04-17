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
          value: "3+"
        },
        {
          label: t("services.hero.statistics.certificationStandards"),
          value: "XX+"
        },
        {
          label: t("services.hero.statistics.professionalTeam"),
          value: "XX+"
        }
      ]}
      LabelIcon={ShieldCheck}
      labelTitleMain={t("services.hero.labelTitleMain")}
      labelTitleBottom={t("services.hero.labelTitleBottom")}
    />
  );
}
