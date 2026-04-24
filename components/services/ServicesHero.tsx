"use client";

import { ShieldCheck } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { SectionBanner } from "../ui/SectionBanner";

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
