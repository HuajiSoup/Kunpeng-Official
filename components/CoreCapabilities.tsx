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
import { HomeSectionTitle } from "./ui/HomeSectionTitle";
import { ItemBox } from "./ui/ItemBox";

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
    <section id="core-capabilities" className="relative py-16 lg:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <HomeSectionTitle title={t("home.capabilities.title")} desc={t("home.capabilities.subtitle")} />

        <div className="space-y-16">
          {[testingCapabilities, consultCapabilities].map((capbilities, index) => (
            <div key={index} className="space-y-16">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-12 bg-gray-300 mr-3"></div>
                <h3 className="text-xl font-medium text-gray-900">{capbilities.name}</h3>
                <div className="h-px w-12 bg-gray-300 ml-3"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {capbilities.content.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <ItemBox
                      key={index}
                      fancy
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </ItemBox>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
