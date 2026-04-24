import { aboutTranslations } from "./translations/about";
import { contactTranslations } from "./translations/contact";
import { newsTranslations } from "./translations/news";
import { othersTranslations } from "./translations/others";
import { servicesTranslations } from "./translations/services";
import { testingTranslations } from "./translations/testing";

export const translations = {
  zh: {
    ...othersTranslations.zh,
    ...aboutTranslations.zh,
    ...testingTranslations.zh,
    ...servicesTranslations.zh,
    ...newsTranslations.zh,
    ...contactTranslations.zh,
  },
  en: {
    ...othersTranslations.en,
    ...aboutTranslations.en,
    ...testingTranslations.en,
    ...servicesTranslations.en,
    ...newsTranslations.en,
    ...contactTranslations.en,
  },
};
