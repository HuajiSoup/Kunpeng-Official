"use client";

import TianlingLogo from "@/assets/inflync.svg";
import ShunyuLogo from "@/assets/shunyu.svg";
import { useLanguage } from "@/lib/LanguageContext";

import { HomeSectionTitle } from "./ui/HomeSectionTitle";
import { ItemBox } from "./ui/ItemBox";

const getClientsItems = (t: (key: string) => string) => [
  {
    title: t("home.coreClients.items.tianlingke.title"),
    description: t("home.coreClients.items.tianlingke.description"),
    logo: TianlingLogo,
    size: "w-11 h-11",
  },
  {
    title: t("home.coreClients.items.shunyu.title"),
    description: t("home.coreClients.items.shunyu.description"),
    logo: ShunyuLogo,
    size: "w-11 h-11",
  },
];

export default function CoreClients() {
  const { t } = useLanguage();
  const supportItems = getClientsItems(t);

  return (
    <section id="core-clients" className="relative py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <HomeSectionTitle title={t("home.coreClients.title")} desc={t("home.coreClients.description")} />

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:flex md:justify-center gap-6 lg:gap-8">
          {supportItems.map((item, index) => (
            <ItemBox
              key={index}
              fancy
              className="text-center md:w-1/4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mx-auto mb-4 group-hover:bg-gray-200 transition-all duration-300">
                <item.logo
                  className={item.size + " text-[#2058D1] transition-colors duration-300"}
                  aria-hidden
                  focusable="false"
                />
              </div>

              <h3 className="text-sm lg:text-base font-medium text-gray-900 mb-1.5 leading-tight">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500">{item.description}</p>
            </ItemBox>
          ))}
        </div>

      </div>
    </section>
  );
}
