import Link from "next/link";
import { Users, Award, Package, MessageSquare, ArrowRight } from "lucide-react";

const valueProps = [
  {
    icon: Users,
    title: "专家团队",
    subtitle: "Expert Team",
    description: "拥有多名适航委任代表(DER)及资深测试专家，具备丰富的项目经验",
    link: "/about#team",
    linkText: "了解团队详情",
  },
  {
    icon: Award,
    title: "成功案例",
    subtitle: "Proven Track Record",
    description: "已成功协助多个项目完成适航取证，拥有优秀的项目交付记录",
  },
  {
    icon: Package,
    title: "一站式服务",
    subtitle: "One-stop Solution",
    description: "提供测试、咨询、培训一体化服务，覆盖适航全生命周期需求",
  },
  {
    icon: MessageSquare,
    title: "高效沟通",
    subtitle: "Efficient Communication",
    description: "响应迅速，沟通顺畅，确保项目进度和质量的实时把控",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="mb-10">
        <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
          WHY CHOOSE US
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          为什么选择我们
        </h2>
        <div className="h-1 w-10 bg-blue-600 mb-4"></div>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          专业的团队、丰富的经验、完善的服务体系
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon;
          const CardContent = (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 group-hover:bg-gray-200 transition-colors">
                <Icon className="w-8 h-8 text-gray-900" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-medium">{prop.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{prop.description}</p>

              {prop.link && (
                <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  <span>{prop.linkText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </>
          );

          return prop.link ? (
            <Link
              key={index}
              href={prop.link}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 p-6 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle text-center block"
            >
              {CardContent}
            </Link>
          ) : (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 p-6 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover-gentle-wiggle text-center"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
