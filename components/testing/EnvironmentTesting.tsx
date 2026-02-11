"use client";

import { Thermometer, Waves, Wind, Droplets, Sun } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getEnvironmentTests = (t: (key: string) => string) => [
  {
    icon: Thermometer,
    title: t("testing.environment.items.highLowTemp.title"),
    standards: ["DO-160G", "GJB-150"],
    specs: t("testing.environment.items.highLowTemp.specs"),
    description: t("testing.environment.items.highLowTemp.description"),
  },
  {
    icon: Droplets,
    title: t("testing.environment.items.humidity.title"),
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: t("testing.environment.items.humidity.specs"),
    description: t("testing.environment.items.humidity.description"),
  },
  {
    icon: Waves,
    title: t("testing.environment.items.vibration.title"),
    standards: ["DO-160G", "MIL-STD-810"],
    specs: t("testing.environment.items.vibration.specs"),
    description: t("testing.environment.items.vibration.description"),
  },
  {
    icon: Wind,
    title: t("testing.environment.items.shock.title"),
    standards: ["DO-160G", "GJB-150"],
    specs: t("testing.environment.items.shock.specs"),
    description: t("testing.environment.items.shock.description"),
  },
  {
    icon: Sun,
    title: t("testing.environment.items.solar.title"),
    standards: ["DO-160G", "MIL-STD-810"],
    specs: t("testing.environment.items.solar.specs"),
    description: t("testing.environment.items.solar.description"),
  },
  {
    icon: Thermometer,
    title: t("testing.environment.items.tempShock.title"),
    standards: ["DO-160G", "GJB-150"],
    specs: t("testing.environment.items.tempShock.specs"),
    description: t("testing.environment.items.tempShock.description"),
  },
];

export default function EnvironmentTesting() {
  const { t } = useLanguage();
  const environmentTests = getEnvironmentTests(t);

  return (
    <section id="environment-reliability" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="env">
      <PageSectionTitle 
        title={t("testing.environment.title")}
        subtitle={t("testing.environment.subtitle")}
        description={t("testing.environment.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {environmentTests.map((test, index) => 
          <TestItemBox key={index} {...test} />
        )}
      </div>
    </section>
  );
}
