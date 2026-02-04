"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";

export default function TestingHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      top="TESTING CENTER"
      middle={t("testing.hero.title")}
      bottom={t("testing.hero.subtitle")}
    />
  );
}
