"use client";

import Link from "next/link";

import { FileText, Wrench, GraduationCap, ArrowRight } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

const getServices = (t: (key: string) => string) => [
  {
    icon: FileText,
    title: t("services.overview.items.consulting.title"),
    standards: ["TC", "PC", "VDA"],
    description: t("services.overview.items.consulting.description"),
    href: "#consulting",
  },
  {
    icon: Wrench,
    title: t("services.overview.items.engineering.title"),
    standards: ["FHA", "PSSA", "SSA"],
    description: t("services.overview.items.engineering.description"),
    href: "#engineering",
  },
  {
    icon: GraduationCap,
    title: t("services.overview.items.training.title"),
    standards: ["DO-178C", "DO-254", "ARP4754A"],
    description: t("services.overview.items.training.description"),
    href: "#training",
  },
];

export default function ServiceOverview() {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <section id="service-overview" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="mb-10">
        <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
          {t("services.overview.kicker")}
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          {t("services.overview.title")}
        </h2>
        <div className="h-1 w-10 bg-blue-600 mb-4"></div>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          {t("services.overview.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle cursor-pointer"
            >
              {/* 图片占位符 */}
              <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">Service Image</span>
              </div>

              {/* 卡片内容 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* 标准标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
                    >
                      {standard}
                    </span>
                  ))}
                </div>

                {/* 描述 */}
                <div className="mb-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 查看详情链接 */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:gap-2 transition-all group/link mt-4"
                >
                  <span>{t("services.overview.actions.viewDetails")}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
