"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "@/components/ui/PageSectionTitle";
import ShadowBackground from "../ui/ShadowBackground";
import { TestItem, TestItemBox } from "./TestItemBox";

import Background from "@/assets/background/bg-testing-emc.jpg";

const getEmcTests = (t: (key: string) => string): TestItem[] => [
  {
    field: t("testing.emc.items.i1.field"),
    paras: [
      t("testing.emc.items.i1.paras.p1"),
      t("testing.emc.items.i1.paras.p2"),
      t("testing.emc.items.i1.paras.p3"),
      t("testing.emc.items.i1.paras.p4"),
      t("testing.emc.items.i1.paras.p5"),
      t("testing.emc.items.i1.paras.p6"),
      t("testing.emc.items.i1.paras.p7"),
      t("testing.emc.items.i1.paras.p8"),
      t("testing.emc.items.i1.paras.p9"),
    ],
    standards: [
      t("testing.emc.items.i1.standards.s1")
    ],
    examples: [],
  },
  {
    field: t("testing.emc.items.i2.field"),
    paras: [
      t("testing.emc.items.i2.paras.p1"),
      t("testing.emc.items.i2.paras.p2"),
      t("testing.emc.items.i2.paras.p3"),
      t("testing.emc.items.i2.paras.p4"),
    ],
    standards: [
      t("testing.emc.items.i2.standards.s1"), 
      t("testing.emc.items.i2.standards.s2"), 
      t("testing.emc.items.i2.standards.s3")
    ],
    examples: [],
  },
  {
    field: t("testing.emc.items.i3.field"),
    paras: [
      t("testing.emc.items.i3.paras.p1"),
      t("testing.emc.items.i3.paras.p2"),
      t("testing.emc.items.i3.paras.p3"),
      t("testing.emc.items.i3.paras.p4"),
      t("testing.emc.items.i3.paras.p5"),
    ],
    standards: [
      t("testing.emc.items.i3.standards.s1"), 
      t("testing.emc.items.i3.standards.s2"), 
      t("testing.emc.items.i3.standards.s3"), 
      t("testing.emc.items.i3.standards.s4"), 
      t("testing.emc.items.i3.standards.s5"), 
      t("testing.emc.items.i3.standards.s6"), 
      t("testing.emc.items.i3.standards.s7"), 
      t("testing.emc.items.i3.standards.s8"), 
      t("testing.emc.items.i3.standards.s9"), 
      t("testing.emc.items.i3.standards.s10"), 
      t("testing.emc.items.i3.standards.s11")
    ],
    examples: [],
  },
  {
    field: t("testing.emc.items.i4.field"),
    paras: [
      t("testing.emc.items.i4.paras.p1"),
      t("testing.emc.items.i4.paras.p2"),
      t("testing.emc.items.i4.paras.p3"),
      t("testing.emc.items.i4.paras.p4"),
      t("testing.emc.items.i4.paras.p5"),
      t("testing.emc.items.i4.paras.p6")
    ],
    standards: [
      t("testing.emc.items.i4.standards.s1"), 
      t("testing.emc.items.i4.standards.s2"), 
      t("testing.emc.items.i4.standards.s3"), 
      t("testing.emc.items.i4.standards.s4"), 
      t("testing.emc.items.i4.standards.s5")
    ],
    examples: [],
  },
];

export default function TestingsEMC() {
  const { t } = useLanguage();
  const emcTests = getEmcTests(t);

  return (
    <section id="emc-testing" className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="emc">
      <PageSectionTitle 
        title={t("testing.emc.title")}
        subtitle={t("testing.emc.subtitle")}
        description={t("testing.emc.description")}
      />

      <ShadowBackground img={Background} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {emcTests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
