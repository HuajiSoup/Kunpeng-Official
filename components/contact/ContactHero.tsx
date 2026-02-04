import { useLanguage } from "@/lib/LanguageContext";
import { SectionBanner } from "../ui/SectionBanner";

export function ContactHero() {
  const { t } = useLanguage();

  return (<>
    <SectionBanner 
      top="CONTACT US"
      middle={t("contact.hero.title")}
      bottom={t("contact.hero.subtitle")}
    />
  </>);
}