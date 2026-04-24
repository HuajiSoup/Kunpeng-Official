"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";
import { TestItem, TestItemBox } from "./TestItemBox";

const getEmcTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.emcAdvanced.items.i1.field"),
    paras: [],
    standards: ["RTCA DO-160G"],
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
    standards: ["GJB 151C-2024"],
    examples: [],
  },
  {
    field: t("testing.emcAdvanced.items.i3.field"),
    paras: [
      t("testing.emcAdvanced.items.i3.paras.p1"),
      t("testing.emcAdvanced.items.i3.paras.p2"),
      t("testing.emcAdvanced.items.i3.paras.p3"),
      t("testing.emcAdvanced.items.i3.paras.p4"),
      t("testing.emcAdvanced.items.i3.paras.p5"),
    ],
    standards: [
      "IEC61000-6-1",
      "IEC61000-6-2",
      "EN55035",
      "CISPR35",
      "GB/T17799.1",
      "GB/T17799.2",
      "GB/T38909",
      "GB42590",
      "GB/T38058",
      "GB/T38997",
      "GB/T9254.2",
    ],
    examples: [],
  },
  {
    field: t("testing.emcAdvanced.items.i4.field"),
    paras: [
      t("testing.emcAdvanced.items.i4.paras.p1"),
      t("testing.emcAdvanced.items.i4.paras.p2"),
      t("testing.emcAdvanced.items.i4.paras.p3"),
      t("testing.emcAdvanced.items.i4.paras.p4"),
      t("testing.emcAdvanced.items.i4.paras.p5"),
    ],
    standards: ["GB/T18655", "GB/T33014.2", "GB/T33014.4", "GB/T33014.8", "GB/T33014.9"],
    examples: [],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {emcTests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
