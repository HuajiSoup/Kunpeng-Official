import { Thermometer, Waves, Wind, Droplets, Sun, Zap } from "lucide-react";

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
    icon: Zap,
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
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
            ENVIRONMENTAL RELIABILITY
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            环境可靠性试验
          </h2>
          <div className="h-1 w-10 bg-blue-600 mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {environmentTests.map((test, index) => {
            const Icon = test.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle cursor-pointer"
              >
                {/* 图片占位符 */}
                <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium">Test Image</span>
                </div>

                {/* 卡片内容 */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600" />
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
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
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
