"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

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
    standards: ["RCTA DO-160G", "GJB 150.3A/4A/9A", "GB/T 2423.1/2/3/4", t("testing.standards.hb6167DashSeries")],
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
    standards: ["RCTA DO-160G", "GJB 150.6A", t("testing.standards.gbT2423Series"), t("testing.standards.iec60068Series"), t("testing.standards.hb6167DashSeries")],
    examples: [
      t("testing.environmentAdvanced.items.i2.examples.e1"),
      t("testing.environmentAdvanced.items.i2.examples.e2"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i3.field"),
    paras: [
      t("testing.environmentAdvanced.items.i3.paras.p1"),
      t("testing.environmentAdvanced.items.i3.paras.p2"),
      t("testing.environmentAdvanced.items.i3.paras.p3"),
      t("testing.environmentAdvanced.items.i3.paras.p4"),
    ],
    standards: ["RTCA DO-160G", "GJB 150.12A", "HB 6167.10-2016", "GJB 360B-2009", t("testing.standards.gbT38924Series")],
    examples: [
      t("testing.environmentAdvanced.items.i3.examples.e1"),
      t("testing.environmentAdvanced.items.i3.examples.e2"),
      t("testing.environmentAdvanced.items.i3.examples.e3"),
    ],
  },
  {
    field: t("testing.environmentAdvanced.items.i4.field"),
    paras: [t("testing.environmentAdvanced.items.i4.paras.p1"), t("testing.environmentAdvanced.items.i4.paras.p2")],
    standards: ["RTCA DO-160G", "GJB 150.8A/26A", t("testing.standards.gbT38924Series"), t("testing.standards.hb6167Series")],
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
    ],
    standards: ["RTCA DO-160G", "GJB 150.10A/11A", "GB/T 10125", t("testing.standards.hb6167Series")],
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
