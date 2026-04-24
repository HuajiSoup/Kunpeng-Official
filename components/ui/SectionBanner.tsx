import { LucideIcon } from "lucide-react";

import { HaloBackground } from "./HaloBackground";

interface StatisticCardProps {
  value: string;
  label: string;
}

interface SectionBannerProps {
  titleMain: string;
  titleTop: string;
  titleBottom: string;
  statistics?: StatisticCardProps[];
  LabelIcon: LucideIcon;
  labelTitleMain: string;
  labelTitleBottom: string;
}

export function SectionBanner({
  titleMain,
  titleTop,
  titleBottom,
  statistics = [],
  LabelIcon,
  labelTitleMain,
  labelTitleBottom
}: SectionBannerProps) {
  return (<>
    <section className="relative w-full min-h-[500px] lg:min-h-[750px] flex items-center overflow-hidden">
      <HaloBackground />

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-[10%] sm:px-[10%] lg:px-[10%] py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* left: text content */}
        <div className="space-y-5 text-center lg:text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
            {titleTop}
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            {titleMain}
          </h1>
          
          <p className="text-base lg:text-lg text-slate-200/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {titleBottom}
          </p>

          {/* statistics */}
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
            {statistics.map((stat, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-300/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right: docs */}
        <div className="relative flex items-center justify-center px-4">
          <div className="hero-cards-container hidden lg:block relative w-full h-[300px]">
            <div className="hero-card-3 absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/3 border border-white/10 shadow-xl transition-all duration-500 ease-out transform translate-x-0 translate-y-0 rotate-0">
            </div>
            <div className="hero-card-2 absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/4 border border-white/20 shadow-xl transition-all duration-500 ease-out transform -translate-x-2 translate-y-2 rotate-0">
            </div>
            <div className="hero-card-1 absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/8 border border-white/20 shadow-xl transition-all duration-500 ease-out transform -translate-x-4 translate-y-4 rotate-0">
              {/* highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
              
              {/* content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-6">
                {/* icon */}
                <div className="w-24 h-24 p-4 bg-slate-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-400/30">
                  <LabelIcon className="w-full h-full" />
                </div>

                {/* texts */}
                <div className="text-center space-y-2">
                  <h3 className="text-base font-bold text-white">{labelTitleMain}</h3>
                  <p className="text-sm text-slate-200/80 font-light max-w-full">{labelTitleBottom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  </>);
}