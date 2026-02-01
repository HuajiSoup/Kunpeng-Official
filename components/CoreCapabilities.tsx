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
import { IntroTitle } from "./ui/IntroTitle";
import { BentoCard } from "./ui/BentoGrid";

const getCapabilities = (t: (key: string) => string) => ({
  testingCapabilities: {
    name: t("home.capabilities.testing"),
    content: [
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
    ]
  },
  consultCapabilities: {
    name: t("home.capabilities.services"),
    content: [
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
    ]
  },
});

export default function CoreCapabilities() {
  const { t } = useLanguage();
  const { testingCapabilities, consultCapabilities } = getCapabilities(t);
  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <IntroTitle title={t("home.capabilities.title")} desc={t("home.capabilities.subtitle")} />

        <div className="space-y-16">
          {[testingCapabilities, consultCapabilities].map(capbilities => (
            <>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-gray-300 mr-3"></div>
                <h3 className="text-xl font-medium text-white">{capbilities.name}</h3>
                <div className="h-px w-12 bg-gray-300 ml-3"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {capbilities.content.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <BentoCard
                      key={index}
                      className="group p-6 bg-slate-900/50 backdrop-blur-sm border-slate-800"
                    >
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </BentoCard>
                  );
                })}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
