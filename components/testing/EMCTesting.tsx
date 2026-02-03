import { Radio, Wifi, RadioIcon, Zap as Lightning } from "lucide-react";
import { TestItemBox } from "./TestItemBox";

const emcTests = [
  {
    icon: Radio,
    title: "辐射发射 (RE)",
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: "频率范围: 10kHz ~ 18GHz，测量距离: 1m / 3m",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: RadioIcon,
    title: "传导发射 (CE)",
    standards: ["DO-160G", "MIL-STD-461"],
    specs: "频率范围: 10kHz ~ 108MHz，阻抗: 50Ω",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Wifi,
    title: "高强辐射场 (HIRF)",
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: "场强: 200V/m ~ 8000V/m，频率: 10kHz ~ 40GHz",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Lightning,
    title: "间接雷电效应",
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: "波形: 6.4/69μs，能量: 2.5J ~ 5J",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: Radio,
    title: "电磁敏感度 (RS)",
    standards: ["DO-160G", "MIL-STD-461"],
    specs: "频率范围: 10kHz ~ 18GHz，场强: 1V/m ~ 200V/m",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    icon: RadioIcon,
    title: "传导敏感度 (CS)",
    standards: ["DO-160G", "RTCA/DO-160"],
    specs: "频率范围: 10kHz ~ 400MHz，注入电平: 0.1V ~ 5V",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX",
  },
];

export default function EMCTesting() {
  return (
    <section id="emc-testing" className="py-12 lg:py-16 bg-white scroll-mt-24" data-anchor="emc">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
            ELECTROMAGNETIC COMPATIBILITY
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            电磁兼容试验
          </h2>
          <div className="h-1 w-10 bg-blue-600 mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {emcTests.map((test, index) => (
            <TestItemBox key={index} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
}
