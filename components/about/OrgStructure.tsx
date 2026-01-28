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
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:bg-blue-50/50 transition-all duration-300 hover-gentle-wiggle cursor-pointer text-center overflow-hidden"
              >
                {/* Moving Border 效果 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-[border-beam_3s_linear_infinite]" style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }} />
                </div>
                {/* 内发光效果 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 border-[0.5px] border-blue-500/30 group-hover:border-blue-500/50">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-slate-600">{dept.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
