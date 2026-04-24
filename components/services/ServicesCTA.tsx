"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10 mt-24">
      {/* 深色背景 Banner */}
      <div className="bg-gray-900 rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
            {t("services.cta.title")}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            {t("services.cta.description")}
          </p>
        </div>

        {/* 右侧按钮 */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>{t("services.cta.button")}</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
