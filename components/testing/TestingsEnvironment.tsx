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

const testings: TestItem[] = [
  {
    field: "温湿度试验",
    paras: [
      "箱体尺寸：1000*1000*1000mm",
      "温度范围：-70°C~+150°C",
      "温度变化速率：10°C/min",
      "温度冲击转换时间：≤5s",
      "湿度范围：20%RH~98%RH",
    ],
    standards: ["DO-160 §4,5,6", "GJB 150.3A/4A/9A", "GB/T 2423.1/2/3/4"],
    examples: ["高温/低温贮存", "温度循环/冲击", "恒定/交变湿热", "温度-湿度组合"],
  },
  {
    field: "低气压/高度试验",
    paras: [
      "气压范围：常压~0.5kPa",
      "降压速率：≤30min（常压→1kPa，空载）",
      "快速减压：75.2kPa→18.8kPa，≤15s",
    ],
    standards: ["DO-160 §4", "GJB 150.6A"],
    examples: ["温度-高度试验", "快速减压", "爆炸减压模拟"],
  },
  {
    field: "砂尘试验",
    paras: ["吹尘风速：1.5~8.9m/s", "吹尘浓度：(3.5~8.8)g/m³", "吹砂风速：18.0~29m/s"],
    standards: ["DO-160 §12", "GJB 150.8A/12A"],
    examples: ["吹尘试验", "吹砂试验", "防尘等级验证"],
  },
  {
    field: "防水/流体试验",
    paras: ["防水方式：滴水、喷水、连续水流", "流体敏感性：液体浸渍、喷淋"],
    standards: ["DO-160 §10,11", "GJB 150.8A"],
    examples: ["防水性试验", "流体污染试验", "雨淋试验"],
  },
  {
    field: "腐蚀/霉菌/结冰",
    paras: [
      "盐雾：中性盐雾（非水加热）",
      "霉菌：符合 DO-160、GJB 150 菌种",
      "结冰：符合 DO-160、GJB 150 工况",
    ],
    standards: ["DO-160 §13,14,24", "GJB 150.10A/11A"],
    examples: ["中性盐雾试验", "霉菌生长试验", "结冰/冻雨试验"],
  }
];

export default function TestingsEnvironment() {
  const { t } = useLanguage();
  const tests = testings; // getEnvironmentTests(t);

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
