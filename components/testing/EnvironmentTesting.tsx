import { Thermometer, Waves, Wind, Droplets, Sun } from "lucide-react";
import { TestItemBox } from "./TestItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const environmentTests = [
  {
    icon: Thermometer,
    title: "高低温试验",
    standards: ["DO-160G", "GJB-150"],
    specs: "温度范围: -70°C ~ +150°C，温度变化速率: ≤10°C/min",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Droplets,
    title: "湿热试验",
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: "相对湿度: 10% ~ 98% RH，温度: -10°C ~ +85°C",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Waves,
    title: "振动试验",
    standards: ["DO-160G", "MIL-STD-810"],
    specs: "频率范围: 5Hz ~ 2000Hz，加速度: 0 ~ 20g",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Wind,
    title: "冲击试验",
    standards: ["DO-160G", "GJB-150"],
    specs: "冲击加速度: 15g ~ 75g，持续时间: 11ms",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Sun,
    title: "太阳辐射试验",
    standards: ["DO-160G", "MIL-STD-810"],
    specs: "辐射强度: 1120 W/m²，温度: -10°C ~ +85°C",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Thermometer,
    title: "温度冲击试验",
    standards: ["DO-160G", "GJB-150"],
    specs: "温度范围: -65°C ~ +150°C，转换时间: ≤5min",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
];

export default function EnvironmentTesting() {
  return (
    <section id="environment-reliability" className="py-12 lg:py-16 bg-white scroll-mt-24" data-anchor="env">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <PageSectionTitle 
          title="环境可靠性试验"
          subtitle="ENVIRONMENTAL RELIABILITY"
          description="XXX XXX XXXXXXX"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {environmentTests.map((test, index) => 
            <TestItemBox key={index} {...test} />
          )}
        </div>
      </div>
    </section>
  );
}
