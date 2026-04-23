"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getMechanicalTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.mechanical.items.i1.field"),
    paras: [
      t("testing.mechanical.items.i1.paras.p1"),
      t("testing.mechanical.items.i1.paras.p2"),
      t("testing.mechanical.items.i1.paras.p3"),
      t("testing.mechanical.items.i1.paras.p4"),
      t("testing.mechanical.items.i1.paras.p5"),
      t("testing.mechanical.items.i1.paras.p6"),
    ],
    standards: ["DO-160", "GJB 150.16A", "GB/T 2423.10/.56"],
    examples: [
      t("testing.mechanical.items.i1.examples.e1"),
      t("testing.mechanical.items.i1.examples.e2"),
      t("testing.mechanical.items.i1.examples.e3"),
      t("testing.mechanical.items.i1.examples.e4"),
    ],
  },
  {
    field: t("testing.mechanical.items.i2.field"),
    paras: [
      t("testing.mechanical.items.i2.paras.p1"),
      t("testing.mechanical.items.i2.paras.p2"),
      t("testing.mechanical.items.i2.paras.p3"),
      t("testing.mechanical.items.i2.paras.p4"),
    ],
    standards: ["DO-160", "GJB 150.15A/18A", "GB/T 2423.5/.6"],
    examples: [
      t("testing.mechanical.items.i2.examples.e1"),
      t("testing.mechanical.items.i2.examples.e2"),
      t("testing.mechanical.items.i2.examples.e3"),
    ],
  },
  {
    field: t("testing.mechanical.items.i3.field"),
    paras: [t("testing.mechanical.items.i3.paras.p1"), t("testing.mechanical.items.i3.paras.p2")],
    standards: ["GJB 150.15A"],
    examples: [t("testing.mechanical.items.i3.examples.e1"), t("testing.mechanical.items.i3.examples.e2")],
  },
  {
    field: t("testing.mechanical.items.i4.field"),
    paras: [t("testing.mechanical.items.i4.paras.p1"), t("testing.mechanical.items.i4.paras.p2")],
    standards: ["DO-160", "GJB 150.23A"],
    examples: [t("testing.mechanical.items.i4.examples.e1"), t("testing.mechanical.items.i4.examples.e2")],
  },
];

export default function TestingsMechanical() {
  const { t } = useLanguage();
  const tests = getMechanicalTests(t);

  return (
    <section id="mechanical-special" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="mechanical">
      <PageSectionTitle
        title={t("testing.mechanical.title")}
        subtitle={t("testing.mechanical.subtitle")}
        description={t("testing.mechanical.section.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
        {tests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
