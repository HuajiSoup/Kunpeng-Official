"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";
import { TestItem, TestItemBox } from "./TestItemBox";

import ShadowBackground from "./ShadowBackground";
import Background from "@/assets/background/bg-testing-mechanical.jpg";

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
    standards: [
      t("testing.mechanical.items.i1.standards.s1"), 
      t("testing.mechanical.items.i1.standards.s2"), 
      t("testing.mechanical.items.i1.standards.s3")
    ],
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
    standards: [
      t("testing.mechanical.items.i2.standards.s1"), 
      t("testing.mechanical.items.i2.standards.s2"), 
      t("testing.mechanical.items.i2.standards.s3")
    ],
    examples: [
      t("testing.mechanical.items.i2.examples.e1"),
      t("testing.mechanical.items.i2.examples.e2"),
    ],
  },
  {
    field: t("testing.mechanical.items.i3.field"),
    paras: [t("testing.mechanical.items.i3.paras.p1"), t("testing.mechanical.items.i3.paras.p2")],
    standards: [
      t("testing.mechanical.items.i3.standards.s1")
    ],
    examples: [
      t("testing.mechanical.items.i3.examples.e1"),
      t("testing.mechanical.items.i3.examples.e2")
    ],
  }
];

export default function TestingsMechanical() {
  const { t } = useLanguage();
  const tests = getMechanicalTests(t);

  return (
    <section id="mechanical-special" className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="mechanical">
      <PageSectionTitle
        title={t("testing.mechanical.title")}
        subtitle={t("testing.mechanical.subtitle")}
        description={t("testing.mechanical.section.description")}
      />

      <ShadowBackground img={Background} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        {tests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
