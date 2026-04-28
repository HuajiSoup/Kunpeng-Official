"use client";

import Link from "next/link";

import { ArrowRight, Code, Cpu } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";

export default function SoftwareComponents() {
  const { t } = useLanguage();

  return (
    <section id="software-components" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="software">
      <PageSectionTitle 
        title={t("testing.softwareComponents.title")}
        subtitle={t("testing.softwareComponents.subtitle")}
        description={t("testing.softwareComponents.description")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* 软件测评卡片 */}
        <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 hover-gentle-wiggle cursor-pointer">
          <div className="p-8">
            <div className="w-16 h-16 bg-gray-900/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
              <Code className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t("testing.softwareComponents.softwareCard.title")}
            </h3>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full border border-blue-200 mb-4">
                {t("testing.softwareComponents.softwareCard.standard")}
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2">•</span>
                <span>XXXXXX XXXXXX XXXXXX XXXXXX</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2">•</span>
                <span>XXXXXX XXXXXX XXXXXX XXXXXX</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2">•</span>
                <span>XXXXXX XXXXXX XXXXXX XXXXXX</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2">•</span>
                <span>XXXXXX XXXXXX XXXXXX XXXXXX</span>
              </li>
            </ul>

            <Link
              href="/services/software"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
            >
              <span>{t("testing.softwareComponents.softwareCard.linkText")}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 元器件筛选卡片 */}
        <div id="components-section" className="group bg-white/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 hover-gentle-wiggle cursor-pointer" data-anchor="components">
          <div className="p-8">
            <div className="w-16 h-16 bg-gray-900/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
              <Cpu className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t("testing.softwareComponents.componentsCard.title")}
            </h3>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full border border-gray-200 mb-4">
                {t("testing.softwareComponents.componentsCard.badge")}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
              </p>
              <p className="text-gray-700 leading-relaxed">
                XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200">
                {t("testing.softwareComponents.componentsCard.tags.internal")}
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200">
                {t("testing.softwareComponents.componentsCard.tags.physical")}
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200">
                {t("testing.softwareComponents.componentsCard.tags.reliability")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
