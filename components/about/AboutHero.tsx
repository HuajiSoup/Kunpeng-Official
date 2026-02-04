import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <SectionBanner
      top="ABOUT KUNPENG"
      middle={t("about.hero.title")}
      bottom={t("about.hero.subtitle")}
    />
  );
}
