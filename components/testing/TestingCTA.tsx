"use client";

import Link from "next/link";

import { ArrowRight, MessageSquare } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

export default function TestingCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 bg-gray-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-6 h-6 text-gray-900" />
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          {t("testing.cta.title")}
        </h2>
        
        <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          {t("testing.cta.description")}
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>{t("testing.cta.button")}</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
