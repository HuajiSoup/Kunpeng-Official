"use client";

import { Radio, Wifi, RadioIcon, Zap as Lightning } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getEmcTests = (t: (key: string) => string) => [
  {
    icon: Radio,
    title: t("testing.emc.items.re.title"),
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: t("testing.emc.items.re.specs"),
    description: t("testing.emc.items.re.description"),
  },
  {
    icon: RadioIcon,
    title: t("testing.emc.items.ce.title"),
    standards: ["DO-160G", "MIL-STD-461"],
    specs: t("testing.emc.items.ce.specs"),
    description: t("testing.emc.items.ce.description"),
  },
  {
    icon: Wifi,
    title: t("testing.emc.items.hirf.title"),
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: t("testing.emc.items.hirf.specs"),
    description: t("testing.emc.items.hirf.description"),
  },
  {
    icon: Lightning,
    title: t("testing.emc.items.lightning.title"),
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: t("testing.emc.items.lightning.specs"),
    description: t("testing.emc.items.lightning.description"),
  },
  {
    icon: Radio,
    title: t("testing.emc.items.rs.title"),
    standards: ["DO-160G", "MIL-STD-461"],
    specs: t("testing.emc.items.rs.specs"),
    description: t("testing.emc.items.rs.description"),
  },
  {
    icon: RadioIcon,
    title: t("testing.emc.items.cs.title"),
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: t("testing.emc.items.cs.specs"),
    description: t("testing.emc.items.cs.description"),
  },
];

export default function EMCTesting() {
  const { t } = useLanguage();
  const emcTests = getEmcTests(t);

  return (
    <section id="emc-testing" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="emc">
      <PageSectionTitle 
        title={t("testing.emc.title")}
        subtitle={t("testing.emc.subtitle")}
        description={t("testing.emc.description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {emcTests.map((test, index) => (
          <TestItemBox key={index} {...test} />
        ))}
      </div>
    </section>
  );
}
