"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

// const getEnvironmentTests = (t: (key: string) => string) => [
//   {
//     icon: Thermometer,
//     title: t("testing.environment.items.highLowTemp.title"),
//     standards: ["DO-160G", "GJB-150"],
//     specs: t("testing.environment.items.highLowTemp.specs"),
//     description: t("testing.environment.items.highLowTemp.description"),
//   },
//   {
//     icon: Droplets,
//     title: t("testing.environment.items.humidity.title"),
//     standards: ["DO-160G", "RTCA/DO-160"],
//     specs: t("testing.environment.items.humidity.specs"),
//     description: t("testing.environment.items.humidity.description"),
//   },
//   {
//     icon: Waves,
//     title: t("testing.environment.items.vibration.title"),
//     standards: ["DO-160G", "MIL-STD-810"],
//     specs: t("testing.environment.items.vibration.specs"),
//     description: t("testing.environment.items.vibration.description"),
//   },
//   {
//     icon: Wind,
//     title: t("testing.environment.items.shock.title"),
//     standards: ["DO-160G", "GJB-150"],
//     specs: t("testing.environment.items.shock.specs"),
//     description: t("testing.environment.items.shock.description"),
//   },
//   {
//     icon: Sun,
//     title: t("testing.environment.items.solar.title"),
//     standards: ["DO-160G", "MIL-STD-810"],
//     specs: t("testing.environment.items.solar.specs"),
//     description: t("testing.environment.items.solar.description"),
//   },
//   {
//     icon: Thermometer,
//     title: t("testing.environment.items.tempShock.title"),
//     standards: ["DO-160G", "GJB-150"],
//     specs: t("testing.environment.items.tempShock.specs"),
//     description: t("testing.environment.items.tempShock.description"),
//   },
// ];

const getEnvironmentTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.environmentAdvanced.items.i1.field"),
    paras: [
      t("testing.environmentAdvanced.items.i1.paras.p1"),
      t("testing.environmentAdvanced.items.i1.paras.p2"),
      t("testing.environmentAdvanced.items.i1.paras.p3"),
      t("testing.environmentAdvanced.items.i1.paras.p4"),
      t("testing.environmentAdvanced.items.i1.paras.p5"),
    ],
    standards: ["DO-160 §4,5,6", "GJB 150.3A/4A/9A", "GB/T 2423.1/2/3/4"],
    examples: [
      t("testing.environmentAdvanced.items.i1.examples.e1"),
      t("testing.environmentAdvanced.items.i1.examples.e2"),
      t("testing.environmentAdvanced.items.i1.examples.e3"),
      t("testing.environmentAdvanced.items.i1.examples.e4"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i2.field"),
    paras: [
      t("testing.environmentAdvanced.items.i2.paras.p1"),
      t("testing.environmentAdvanced.items.i2.paras.p2"),
      t("testing.environmentAdvanced.items.i2.paras.p3"),
    ],
    standards: ["DO-160 §4", "GJB 150.6A"],
    examples: [
      t("testing.environmentAdvanced.items.i2.examples.e1"),
      t("testing.environmentAdvanced.items.i2.examples.e2"),
      t("testing.environmentAdvanced.items.i2.examples.e3"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i3.field"),
    paras: [
      t("testing.environmentAdvanced.items.i3.paras.p1"),
      t("testing.environmentAdvanced.items.i3.paras.p2"),
      t("testing.environmentAdvanced.items.i3.paras.p3"),
    ],
    standards: ["DO-160 §12", "GJB 150.8A/12A"],
    examples: [
      t("testing.environmentAdvanced.items.i3.examples.e1"),
      t("testing.environmentAdvanced.items.i3.examples.e2"),
      t("testing.environmentAdvanced.items.i3.examples.e3"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i4.field"),
    paras: [t("testing.environmentAdvanced.items.i4.paras.p1"), t("testing.environmentAdvanced.items.i4.paras.p2")],
    standards: ["DO-160 §10,11", "GJB 150.8A"],
    examples: [
      t("testing.environmentAdvanced.items.i4.examples.e1"),
      t("testing.environmentAdvanced.items.i4.examples.e2"),
      t("testing.environmentAdvanced.items.i4.examples.e3"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i5.field"),
    paras: [
      t("testing.environmentAdvanced.items.i5.paras.p1"),
      t("testing.environmentAdvanced.items.i5.paras.p2"),
      t("testing.environmentAdvanced.items.i5.paras.p3"),
    ],
    standards: ["DO-160 §13,14,24", "GJB 150.10A/11A"],
    examples: [
      t("testing.environmentAdvanced.items.i5.examples.e1"),
      t("testing.environmentAdvanced.items.i5.examples.e2"),
      t("testing.environmentAdvanced.items.i5.examples.e3"),
    ],
  }
];

export default function TestingsEnvironment() {
  const { t } = useLanguage();
  const tests = getEnvironmentTests(t);

  return (
    <section id="environment-reliability" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="env">
      <PageSectionTitle 
        title={t("testing.environment.title")}
        subtitle={t("testing.environment.subtitle")}
        description={t("testing.environment.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {tests.map((test, index) => 
          <TestItemBox key={index} item={test} />
        )}
      </div>
    </section>
  );
}
