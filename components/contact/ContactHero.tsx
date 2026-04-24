"use client";

import { Phone } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { SectionBanner } from "../ui/SectionBanner";

export function ContactHero() {
  const { t } = useLanguage();

  return (<>
    <SectionBanner 
      titleTop="CONTACT US"
      titleMain={t("contact.hero.title")}
      titleBottom={t("contact.hero.subtitle")}
      LabelIcon={Phone}
      labelTitleMain={t("contact.hero.labelTitleMain")}
      labelTitleBottom={t("contact.hero.labelTitleBottom")}
    />
  </>);
}