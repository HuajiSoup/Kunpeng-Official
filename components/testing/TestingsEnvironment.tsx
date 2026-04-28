"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";
import { TestItem, TestItemBox } from "./TestItemBox";

import ShadowBackground from "./ShadowBackground";
import Background from "@/assets/background/bg-testing-env.jpg";

const getEnvironmentTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.environment.items.i1.field"),
    paras: [
      t("testing.environment.items.i1.paras.p1"),
      t("testing.environment.items.i1.paras.p2"),
      t("testing.environment.items.i1.paras.p3"),
      t("testing.environment.items.i1.paras.p4"),
      t("testing.environment.items.i1.paras.p5"),
    ],
    standards: [
      t("testing.environment.items.i1.standards.s1"), 
      t("testing.environment.items.i1.standards.s2"), 
      t("testing.environment.items.i1.standards.s3"), 
      t("testing.environment.items.i1.standards.s4")
    ],
    examples: [
      t("testing.environment.items.i1.examples.e1"),
      t("testing.environment.items.i1.examples.e2"),
      t("testing.environment.items.i1.examples.e3"),
      t("testing.environment.items.i1.examples.e4"),
    ],
  },
  {
    field: t("testing.environment.items.i2.field"),
    paras: [
      t("testing.environment.items.i2.paras.p1"),
      t("testing.environment.items.i2.paras.p2"),
      t("testing.environment.items.i2.paras.p3"),
    ],
    standards: [
      t("testing.environment.items.i2.standards.s1"), 
      t("testing.environment.items.i2.standards.s2"), 
      t("testing.environment.items.i2.standards.s3"), 
      t("testing.environment.items.i2.standards.s4"), 
      t("testing.environment.items.i2.standards.s5")
    ],
    examples: [
      t("testing.environment.items.i2.examples.e1"),
      t("testing.environment.items.i2.examples.e2"),
    ],
  },
  {
    field: t("testing.environment.items.i3.field"),
    paras: [
      t("testing.environment.items.i3.paras.p1"),
      t("testing.environment.items.i3.paras.p2"),
      t("testing.environment.items.i3.paras.p3"),
      t("testing.environment.items.i3.paras.p4"),
    ],
    standards: [
      t("testing.environment.items.i3.standards.s1"), 
      t("testing.environment.items.i3.standards.s2"), 
      t("testing.environment.items.i3.standards.s3"), 
      t("testing.environment.items.i3.standards.s4"), 
      t("testing.environment.items.i3.standards.s5")
    ],
    examples: [
      t("testing.environment.items.i3.examples.e1"),
      t("testing.environment.items.i3.examples.e2"),
      t("testing.environment.items.i3.examples.e3"),
    ],
  },
  {
    field: t("testing.environment.items.i4.field"),
    paras: [
      t("testing.environment.items.i4.paras.p1"),
      t("testing.environment.items.i4.paras.p2")
    ],
    standards: [
      t("testing.environment.items.i4.standards.s1"), 
      t("testing.environment.items.i4.standards.s2"), 
      t("testing.environment.items.i4.standards.s3"), 
      t("testing.environment.items.i4.standards.s4")
    ],
    examples: [
      t("testing.environment.items.i4.examples.e1"),
      t("testing.environment.items.i4.examples.e2"),
      t("testing.environment.items.i4.examples.e3"),
    ],
  },
  {
    field: t("testing.environment.items.i5.field"),
    paras: [
      t("testing.environment.items.i5.paras.p1"),
      t("testing.environment.items.i5.paras.p2"),
    ],
    standards: [
      t("testing.environment.items.i5.standards.s1"), 
      t("testing.environment.items.i5.standards.s2"), 
      t("testing.environment.items.i5.standards.s3"), 
      t("testing.environment.items.i5.standards.s4")
    ],
    examples: [
      t("testing.environment.items.i5.examples.e1"),
      t("testing.environment.items.i5.examples.e2"),
      t("testing.environment.items.i5.examples.e3"),
    ],
  },
  {
    field: t("testing.environment.items.i6.field"),
    paras: [
      t("testing.environment.items.i6.paras.p1"),
      t("testing.environment.items.i6.paras.p2"),
    ],
    standards: [
      t("testing.environment.items.i6.standards.s1"), 
      t("testing.environment.items.i6.standards.s2")
    ],
    examples: [
      t("testing.environment.items.i6.examples.e1"),
      t("testing.environment.items.i6.examples.e2"),
    ],
  }
];

export default function TestingsEnvironment() {
  const { t } = useLanguage();
  const tests = getEnvironmentTests(t);
  const description = (
    <>
      {t("testing.environment.descriptionPart1")}
      <strong><b>RTCA DO-160G</b></strong>，
      <strong><b>GJB 150A</b></strong>，
      <strong><b>GB/T 2423</b></strong>
      {t("testing.environment.descriptionPart2")}
    </>
  );

  return (
    <section id="environment-reliability" className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="env">
      <PageSectionTitle 
        title={t("testing.environment.title")}
        subtitle={t("testing.environment.subtitle")}
        description={description}
      />

      <ShadowBackground img={Background} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {tests.map((test, index) => 
          <TestItemBox key={index} item={test} />
        )}
      </div>
    </section>
  );
}
