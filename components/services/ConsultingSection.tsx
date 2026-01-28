import { FileCheck, Award, Shield } from "lucide-react";

export default function ConsultingSection() {
  return (
    <section id="consulting" className="scroll-mt-24" data-anchor="consulting">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
          适航取证咨询
        </h2>
        <p className="text-sm text-gray-500">
          为航空器及其零部件制造商提供全面的适航取证支持
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 shadow-sm hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">TC 型号合格证</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            型号合格证申请全程指导，技术文件编写与审核支持。
          </p>
        </div>

        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 shadow-sm hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">PC 生产许可证</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            生产许可证质量管理体系建立与维护咨询。
          </p>
        </div>

        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 shadow-sm hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">CTSO 技术标准规定</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            技术标准规定项目申请支持，零部件适航认证。
          </p>
        </div>
      </div>
    </section>
  );
}
