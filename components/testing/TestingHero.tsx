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
          label: "测试设备",
          value: "20+"
        },
        {
          label: "测试标准",
          value: "50+"
        },
        {
          label: "测试项目",
          value: "100+"
        }
      ]}
      LabelIcon={Microscope}
      labelTitleMain={t("testing.hero.labelTitleMain")}
      labelTitleBottom={t("testing.hero.labelTitleBottom")}
    />
  );
}
