"use client";

import { Microscope } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { SectionBanner } from "../ui/SectionBanner";

export default function TestingHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      titleTop="TESTING CENTER"
      titleMain={t("testing.hero.title")}
      titleBottom={t("testing.hero.subtitle")}
      statistics={[
        {
          label: t("testing.hero.statistics.testEquipment"),
          value: "100+"
        },
        {
          label: t("testing.hero.statistics.testStandards"),
          value: "20+"
        },
        {
          label: t("testing.hero.statistics.testItems"),
          value: "30+"
        }
      ]}
      LabelIcon={Microscope}
      labelTitleMain={t("testing.hero.labelTitleMain")}
      labelTitleBottom={t("testing.hero.labelTitleBottom")}
    />
  );
}
