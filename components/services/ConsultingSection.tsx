import { FileCheck, Award, Shield } from "lucide-react";
import { ItemBox } from "../ui/ItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const consultingItems = [
  {
    title: "TC 型号合格证",
    icon: FileCheck,
    description: "型号合格证申请全程指导，技术文件编写与审核支持。",
  },
  {
    title: "PC 生产许可证",
    icon: Award,
    description: "生产许可证质量管理体系建立与维护咨询。",
  },
  {
    title: "CTSO 技术标准规定",
    icon: Shield,
    description: "技术标准规定项目申请支持，零部件适航认证。",
  }
]

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="consulting">
      <PageSectionTitle 
        title="适航取证咨询"
        subtitle="AIRWORHINESS CERTIFICATION CONSULTING"
        description="为航空器及其零部件制造商提供全面的适航取证支持"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {consultingItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ItemBox key={index}>
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </ItemBox>
          );
        })}
      </div>
    </section>
  );
}
