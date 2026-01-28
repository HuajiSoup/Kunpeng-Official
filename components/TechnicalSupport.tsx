"use client";

import { useLanguage } from "@/lib/LanguageContext";

const getSupportItems = (t: (key: string) => string) => [
  {
    initial: t("home.technicalSupport.items.longxing.initial"),
    title: t("home.technicalSupport.items.longxing.title"),
    description: t("home.technicalSupport.items.longxing.description"),
  },
  {
    initial: t("home.technicalSupport.items.xidian.initial"),
    title: t("home.technicalSupport.items.xidian.title"),
    description: t("home.technicalSupport.items.xidian.description"),
  },
  {
    initial: t("home.technicalSupport.items.shanghai.initial"),
    title: t("home.technicalSupport.items.shanghai.title"),
    description: t("home.technicalSupport.items.shanghai.description"),
  },
  {
    initial: t("home.technicalSupport.items.jingkai.initial"),
    title: t("home.technicalSupport.items.jingkai.title"),
    description: t("home.technicalSupport.items.jingkai.description"),
  },
];

export default function TechnicalSupport() {
  const { t } = useLanguage();
  const supportItems = getSupportItems(t);

  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t("home.technicalSupport.title")}
            </span>
          </h2>
          <p className="text-base text-slate-300 font-light">
            {t("home.technicalSupport.subtitle")}
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-slate-900/30 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-center hover-gentle-wiggle cursor-pointer"
            >
              {/* Logo区域 - 圆形占位符，蓝色渐变背景 */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 border border-blue-500/30 group-hover:border-cyan-400/50">
                <div className="text-xl lg:text-2xl font-semibold text-blue-300 group-hover:text-white transition-colors">
                  {item.initial}
                </div>
              </div>

              {/* 标题 */}
              <h3 className="text-sm lg:text-base font-medium text-white mb-1.5 leading-tight">
                {item.title}
              </h3>

              {/* 描述 */}
              <p className="text-xs text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
