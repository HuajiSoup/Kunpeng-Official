"use client";

import { TestItem, TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const testings: TestItem[] = [
  {
    field: "振动试验",
    paras: [
      "推力：50KN",
      "台面尺寸：800×800mm（水平滑台）",
      "频率：随机1-2000Hz，正弦1-2000Hz",
      "空载频率范围：随机1-2600Hz，正弦1-2600Hz",
      "空载加速度：980m/s²",
      "位移：76mm p-p",
      "二次平台：150×150mm，加速度500~3000g",
    ],
    standards: ["DO-160 §8", "GJB 150.16A", "GB/T 2423.10/.56"],
    examples: ["正弦振动", "随机振动", "正弦+随机振动", "强化振动"],
  },
  {
    field: "冲击/坠撞试验",
    paras: [
      "冲击台面：650×800mm",
      "半正弦波：15~500g，脉冲时间2~40ms",
      "后峰锯齿波：15~100g，脉冲时间2~40ms",
      "二次台面：500~3000g，正弦脉冲0.2~2ms",
    ],
    standards: ["DO-160 §7", "GJB 150.15A/18A", "GB/T 2423.5/.6"],
    examples: ["工作冲击", "坠撞安全试验", "包装跌落模拟"],
  },
  {
    field: "加速度试验",
    paras: ["量级：0.5~100g", "加速度回转半径：2500mm"],
    standards: ["GJB 150.15A"],
    examples: ["结构耐久性", "惯性载荷模拟"],
  },
  {
    field: "防火/可燃性测试",
    paras: ["类型：垂直/水平本生灯法", "火焰类型：符合航空标准"],
    standards: ["DO-160 §26", "GJB 150.23A"],
    examples: ["材料可燃性测试", "机载设备防火试验"],
  },
];

export default function TestingsMechanical() {
  const tests = testings;

  return (
    <section id="mechanical-special" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="mechanical">
      <PageSectionTitle
        title={"机械及特殊环境试验"}
        subtitle={"Mechanical & Special Environment Testing"}
        description={"覆盖振动、冲击坠撞、加速度与可燃性等机械及特殊环境试验能力"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
        {tests.map((test, index) => (
          <TestItemBox key={index} item={test} />
        ))}
      </div>
    </section>
  );
}
