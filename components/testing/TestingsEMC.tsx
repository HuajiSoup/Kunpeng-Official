"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const emcTests: TestItem[] = [
  {
    field: "DO-160G航空EMC",
    paras: [
      "3米法暗室",
      "磁效应：±80N/m",
      "电源输入：28V/30A",
      "系统射频辐射敏感度：10kHz-40GHz，200V/m",
      "射频传导敏感度：10kHz-400MHz，300mA",
      "静电放电：15kV",
    ],
    standards: ["RTCA DO-160G §15-22, §25"],
    examples: [
      "磁影响(§15)",
      "电源输入(§16)",
      "电压尖峰(§17)",
      "音频传导敏感度(§18)",
      "感应信号敏感度(§19)",
      "射频敏感度(§20)",
      "射频能量发射(§21)",
      "雷电感应瞬态(§22)",
      "静电放电(§25)",
    ],
  },
  {
    field: "军标EMC",
    paras: [
      "传导发射：CE101、CE102、CE107",
      "辐射发射：RE101、RE102",
      "传导敏感度：CS101、CS102、CS114、CS115、CS116",
      "辐射敏感度：RS101",
    ],
    standards: ["GJB 151B-2013"],
    examples: ["电源线传导发射", "电场辐射发射", "大电流注入(BCI)", "磁场辐射敏感度"],
  },
  {
    field: "民品/汽车电子EMC",
    paras: [
      "传导发射：CE 150kHz-30MHz/80MHz",
      "辐射发射：RE 150kHz-6GHz",
      "辐射抗扰：RS 80MHz-6GHz",
    ],
    standards: ["GB/T 38909-2020", "GB/T 18655-2018", "GB/T 33014系列"],
    examples: ["车载电子传导/辐射发射", "辐射抗扰度测试", "手持式无线电设备测试"],
  },
];

export default function TestingsEMC() {
  const { t } = useLanguage();

  return (
    <section id="emc-testing" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="emc">
      <PageSectionTitle 
        title={"电磁兼容测试"}
        subtitle={"EMC Testing"}
        description={"覆盖航空、军标与民品/汽车电子EMC测试能力，支持发射与敏感度全链路验证"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {emcTests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
