import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";

export default function ServicesHero() {
  const { t } = useLanguage();
  
  return (
    <SectionBanner
      top="AIRWORTHINESS SERVICES"
      middle={t("services.hero.title")}
      bottom={t("services.hero.subtitle")}
    />
  );
}
