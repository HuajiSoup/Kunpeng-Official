import Link from "next/link";
import { FileText, Wrench, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "适航咨询",
    standards: ["TC", "PC", "VDA"],
    description: "TC/PC/VDA认证支持，专业的适航取证咨询服务",
    href: "#consulting",
  },
  {
    icon: Wrench,
    title: "工程技术",
    standards: ["FHA", "PSSA", "SSA"],
    description: "系统安全性分析、可靠性工程，提供专业技术支持",
    href: "#engineering",
  },
  {
    icon: GraduationCap,
    title: "适航培训",
    standards: ["DO-178C", "DO-254", "ARP4754A"],
    description: "DO-178C/DO-254专业培训课程，行业专家授课",
    href: "#training",
  },
];

export default function ServiceOverview() {
  return (
    <section id="service-overview" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="mb-10">
        <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
          CORE SERVICES
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          核心服务
        </h2>
        <div className="h-1 w-10 bg-blue-600 mb-4"></div>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          为您的适航认证之路提供全方位的专业支持
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle cursor-pointer"
            >
              {/* 图片占位符 */}
              <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">Service Image</span>
              </div>

              {/* 卡片内容 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* 标准标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
                    >
                      {standard}
                    </span>
                  ))}
                </div>

                {/* 描述 */}
                <div className="mb-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 查看详情链接 */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:gap-2 transition-all group/link mt-4"
                >
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
