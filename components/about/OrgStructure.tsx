import {
  Users,
  Wrench,
  Target,
  FileText,
  BarChart3,
  Briefcase,
  Shield,
  Building2,
} from "lucide-react";
import { ItemBox } from "../ui/ItemBox";

const departments = [
  { icon: Users, name: "总经理办公室", description: "XXXXXX" },
  { icon: Target, name: "质量部", description: "XXXXXX" },
  { icon: Wrench, name: "技术部", description: "XXXXXX" },
  { icon: BarChart3, name: "市场部", description: "XXXXXX" },
  { icon: FileText, name: "综合部", description: "XXXXXX" },
  { icon: Building2, name: "环境试验实验室", description: "XXXXXX" },
  { icon: Shield, name: "EMC测试实验室", description: "XXXXXX" },
  { icon: Briefcase, name: "软件测试实验室", description: "XXXXXX" },
];

export default function OrgStructure() {
  return (
    <section id="org-structure" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16" data-anchor="org">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600/70 uppercase block mb-4">
            ORGANIZATION
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-slate-900">
              组织架构
            </span>
          </h2>
          <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (   
                <ItemBox fancy key={index}>
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 border-[0.5px] border-blue-500/30 group-hover:border-blue-500/50">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-slate-600">{dept.description}</p>
                </ItemBox>
            );
          })}
        </div>
      </div>
    </section>
  );
}
