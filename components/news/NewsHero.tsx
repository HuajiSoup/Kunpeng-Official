"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";
import { Newspaper } from "lucide-react";

export default function NewsHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      titleTop="NEWS CENTER"
      titleMain={t("news.hero.title")}
      titleBottom={t("news.hero.subtitle")}
      LabelIcon={Newspaper}
      labelTitleMain={t("news.hero.labelTitleMain")}
      labelTitleBottom={t("news.hero.labelTitleBottom")}
    />
  );
}
