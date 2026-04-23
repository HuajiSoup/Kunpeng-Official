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
      LabelIcon={ShieldCheck}
      labelTitleMain={t("services.hero.labelTitleMain")}
      labelTitleBottom={t("services.hero.labelTitleBottom")}
    />
  );
}
