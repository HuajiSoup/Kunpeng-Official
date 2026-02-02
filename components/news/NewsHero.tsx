"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";

export default function NewsHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      top="NEWS CENTER"
      middle={t("news.hero.title")}
      bottom={t("news.hero.subtitle")}
    />
  );
}
