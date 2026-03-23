"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";
import { Microscope } from "lucide-react";

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
          value: "20+"
        },
        {
          label: t("testing.hero.statistics.testStandards"),
          value: "50+"
        },
        {
          label: t("testing.hero.statistics.testItems"),
          value: "100+"
        }
      ]}
      LabelIcon={Microscope}
      labelTitleMain={t("testing.hero.labelTitleMain")}
      labelTitleBottom={t("testing.hero.labelTitleBottom")}
    />
  );
}
