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
          label: "成功案例",
          value: "30+"
        },
        {
          label: "认证标准",
          value: "50+"
        },
        {
          label: "专业团队",
          value: "10+"
        }
      ]}
      LabelIcon={ShieldCheck}
      labelTitleMain={t("services.hero.labelTitleMain")}
      labelTitleBottom={t("services.hero.labelTitleBottom")}
    />
  );
}
