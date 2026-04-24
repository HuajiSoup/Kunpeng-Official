"use client";

import { Building2 } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { SectionBanner } from "../ui/SectionBanner";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <SectionBanner
      titleTop="ABOUT KUNPENG"
      titleMain={t("about.hero.title")}
      titleBottom={t("about.hero.subtitle")}
      LabelIcon={Building2}
      labelTitleMain={t("about.hero.labelTitleMain")}
      labelTitleBottom={t("about.hero.labelTitleBottom")}
    />
  );
}
