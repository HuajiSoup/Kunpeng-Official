"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LongxingLogo from "@/assets/longxinghangdian-new.svg";
import XidianLogo from "@/assets/xiandianzi.svg";
import ShanghaiLogo from "@/assets/SSA.svg";
import JingkaiLogo from "@/assets/jingkaiguokong.svg";
import { HomeSectionTitle } from "./ui/HomeSectionTitle";
import { ItemBox } from "./ui/ItemBox";

const getSupportItems = (t: (key: string) => string) => [
  {
    title: t("home.technicalSupport.items.longxing.title"),
    description: t("home.technicalSupport.items.longxing.description"),
    logo: LongxingLogo,
    size: "w-12 h-12",
  },
  {
    title: t("home.technicalSupport.items.xidian.title"),
    description: t("home.technicalSupport.items.xidian.description"),
    logo: XidianLogo,
    size: "w-14 h-14",
  },
  {
    title: t("home.technicalSupport.items.shanghai.title"),
    description: t("home.technicalSupport.items.shanghai.description"),
    logo: ShanghaiLogo,
    size: "w-14 h-14",
  },
  {
    title: t("home.technicalSupport.items.jingkai.title"),
    description: t("home.technicalSupport.items.jingkai.description"),
    logo: JingkaiLogo,
    size: "w-12 h-12",
  },
];

export default function TechnicalSupport() {
  const { t } = useLanguage();
  const supportItems = getSupportItems(t);

  return (
    <section id="technical-support" className="relative py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <HomeSectionTitle title={t("home.technicalSupport.title")} desc={t("home.technicalSupport.subtitle")} />

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {supportItems.map((item, index) => (
            <ItemBox
              key={index}
              fancy
              className="text-center"
            >
              {/* Logo区域 - 圆形占位符，浅灰色背景 */}
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mx-auto mb-4 group-hover:bg-gray-200 transition-all duration-300">
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
