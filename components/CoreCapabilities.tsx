"use client";

import {
  Wind,
  Zap,
  Code,
  FileCheck,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const getTestingCapabilities = (t: (key: string) => string) => [
  {
    icon: Wind,
    title: t("home.capabilities.testingItems.env.title"),
    description: t("home.capabilities.testingItems.env.description"),
  },
  {
    icon: Zap,
    title: t("home.capabilities.testingItems.emc.title"),
    description: t("home.capabilities.testingItems.emc.description"),
  },
  {
    icon: Code,
    title: t("home.capabilities.testingItems.software.title"),
    description: t("home.capabilities.testingItems.software.description"),
  },
];

const getConsultingServices = (t: (key: string) => string) => [
  {
    icon: FileCheck,
    title: t("home.capabilities.servicesItems.consulting.title"),
    description: t("home.capabilities.servicesItems.consulting.description"),
  },
  {
    icon: Wrench,
    title: t("home.capabilities.servicesItems.engineering.title"),
    description: t("home.capabilities.servicesItems.engineering.description"),
  },
  {
    icon: GraduationCap,
    title: t("home.capabilities.servicesItems.training.title"),
    description: t("home.capabilities.servicesItems.training.description"),
  },
];

export default function CoreCapabilities() {
  const { t } = useLanguage();
  const testingCapabilities = getTestingCapabilities(t);
  const consultingServices = getConsultingServices(t);
  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3 tracking-tight">
            {t("home.capabilities.title")}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            {t("home.capabilities.subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {/* Testing Category */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-gray-300 mr-3"></div>
              <h3 className="text-xl font-medium text-white">{t("home.capabilities.testing")}</h3>
              <div className="h-px w-12 bg-gray-300 ml-3"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testingCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover-gentle-wiggle cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Consulting Category */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-gray-300 mr-3"></div>
              <h3 className="text-xl font-medium text-white">{t("home.capabilities.services")}</h3>
              <div className="h-px w-12 bg-gray-300 ml-3"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {consultingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover-gentle-wiggle cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
