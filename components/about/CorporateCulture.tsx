import { Target, Eye, Heart, Award } from "lucide-react";
import { ItemBox } from "../ui/ItemBox";

const cultureItems = [
  {
    icon: Target,
    title: "使命",
    englishTitle: "MISSION",
    description: "为航空安全保驾护航",
  },
  {
    icon: Eye,
    title: "愿景",
    englishTitle: "VISION",
    description: "成为行业标杆",
  },
  {
    icon: Heart,
    title: "价值观",
    englishTitle: "VALUES",
    description: "严谨、创新、协作",
  },
];

export default function CorporateCulture() {
  return (
    <section id="corporate-culture" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16" data-anchor="qualifications">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600/70 uppercase block mb-4">
            CORPORATE CULTURE
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-slate-900">
              企业文化
            </span>
          </h2>
          <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {cultureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ItemBox key={index}>
                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 border-[0.5px] border-blue-500/30 group-hover:border-blue-500/50">
                  <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-semibold text-blue-600/70 tracking-widest uppercase mb-2">
                  {item.englishTitle}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </ItemBox>
            );
          })}
        </div>
      </div>
    </section>
  );
}
