import { aboutTranslations } from "./translations/about";
import { testingTranslations } from "./translations/testing";
import { servicesTranslations } from "./translations/services";
import { newsTranslations } from "./translations/news";
import { contactTranslations } from "./translations/contact";
import { othersTranslations } from "./translations/others";

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
