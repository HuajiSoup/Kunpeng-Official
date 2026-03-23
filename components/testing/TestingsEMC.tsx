"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getEmcTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.emcAdvanced.items.i1.field"),
    paras: [
      t("testing.emcAdvanced.items.i1.paras.p1"),
      t("testing.emcAdvanced.items.i1.paras.p2"),
      t("testing.emcAdvanced.items.i1.paras.p3"),
      t("testing.emcAdvanced.items.i1.paras.p4"),
      t("testing.emcAdvanced.items.i1.paras.p5"),
      t("testing.emcAdvanced.items.i1.paras.p6"),
    ],
    standards: ["RTCA DO-160G §15-22, §25"],
    examples: [
      t("testing.emcAdvanced.items.i1.examples.e1"),
      t("testing.emcAdvanced.items.i1.examples.e2"),
      t("testing.emcAdvanced.items.i1.examples.e3"),
      t("testing.emcAdvanced.items.i1.examples.e4"),
      t("testing.emcAdvanced.items.i1.examples.e5"),
      t("testing.emcAdvanced.items.i1.examples.e6"),
      t("testing.emcAdvanced.items.i1.examples.e7"),
      t("testing.emcAdvanced.items.i1.examples.e8"),
      t("testing.emcAdvanced.items.i1.examples.e9"),
    ],
  },
  {
    field: t("testing.emcAdvanced.items.i2.field"),
    paras: [
      t("testing.emcAdvanced.items.i2.paras.p1"),
      t("testing.emcAdvanced.items.i2.paras.p2"),
      t("testing.emcAdvanced.items.i2.paras.p3"),
      t("testing.emcAdvanced.items.i2.paras.p4"),
    ],
    standards: ["GJB 151B-2013"],
    examples: [
      t("testing.emcAdvanced.items.i2.examples.e1"),
      t("testing.emcAdvanced.items.i2.examples.e2"),
      t("testing.emcAdvanced.items.i2.examples.e3"),
      t("testing.emcAdvanced.items.i2.examples.e4"),
    ],
  },
  {
    field: t("testing.emcAdvanced.items.i3.field"),
    paras: [
      t("testing.emcAdvanced.items.i3.paras.p1"),
      t("testing.emcAdvanced.items.i3.paras.p2"),
      t("testing.emcAdvanced.items.i3.paras.p3"),
    ],
    standards: ["GB/T 38909-2020", "GB/T 18655-2018", t("testing.emcAdvanced.items.i3.standard3")],
    examples: [
      t("testing.emcAdvanced.items.i3.examples.e1"),
      t("testing.emcAdvanced.items.i3.examples.e2"),
      t("testing.emcAdvanced.items.i3.examples.e3"),
    ],
  },
];

export default function TestingsEMC() {
  const { t } = useLanguage();
  const emcTests = getEmcTests(t);

  return (
    <section id="emc-testing" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="emc">
      <PageSectionTitle 
        title={t("testing.emcAdvanced.title")}
        subtitle={t("testing.emcAdvanced.subtitle")}
        description={t("testing.emcAdvanced.section.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {emcTests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
