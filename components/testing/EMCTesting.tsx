import { Radio, Wifi, RadioIcon, Zap as Lightning } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {emcTests.map((test, index) => {
            const Icon = test.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle cursor-pointer"
              >
                {/* 图片占位符 */}
                <div className="aspect-video bg-gray-100 border-b border-purple-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium">EMC Test Image</span>
                </div>

                {/* 卡片内容 */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {test.title}
                  </h3>

                  {/* 标准标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {test.standards.map((standard, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded border border-purple-200"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>

                  {/* 技术规格 */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 leading-relaxed font-mono">
                      {test.specs}
                    </p>
                  </div>

                  {/* 描述 */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
