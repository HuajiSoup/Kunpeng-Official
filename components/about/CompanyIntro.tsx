"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { PageSectionTitle } from "../ui/PageSectionTitle";
import Image from "next/image";

import BuildingImage from "@/assets/company-building.png"

export default function CompanyIntro() {
  const { t } = useLanguage();

  return (
    <section id="company-intro" className="relative py-12 lg:py-16 bg-white scroll-mt-24" data-anchor="intro">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧文本内容 */}
          <div className="space-y-6">
            <PageSectionTitle 
              title={t("about.companyIntro.title")}
              subtitle={t("about.companyIntro.subtitle")}
              align="start"
            />

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-sm lg:text-base">
                {t("about.companyIntro.paragraphs.p1")}
              </p>
              <p className="text-sm lg:text-base">
                {t("about.companyIntro.paragraphs.p2")}
              </p>
            </div>
            
            <div className="text-slate-600 leading-relaxed w-full p-2 bg-blue-100/50 border-l-4 border-blue-500/40">
              <p className="text-sm lg:text-base">{t("about.companyIntro.slogan")}</p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
          </div>

          <div className="relative h-full">
            <div className="h-full rounded-2xl bg-slate-100 flex overflow-hidden border-[0.5px] border-blue-500/20 shadow-md group relative hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <Image
                src={BuildingImage}
                alt="building"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
