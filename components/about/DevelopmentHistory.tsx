const milestones = [
  {
    year: "2024",
    title: "公司成立 / 获得CNAS认可",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    year: "2023",
    title: "实验室建设启动",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    year: "2022",
    title: "依托龙兴航电筹备组建",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
];

export default function DevelopmentHistory() {
  return (
    <section id="development-history" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600/70 uppercase block mb-4">
            DEVELOPMENT HISTORY
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-slate-900">
              发展历程
            </span>
          </h2>
          <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 时间线容器 */}
          <div className="relative">
            {/* 中央竖线 - 仅在桌面端显示 - 带发光脉冲效果 */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div className="absolute inset-0 bg-blue-500/30 animate-pulse"></div>
            </div>
            
            {/* 移动端左侧竖线 - 带发光脉冲效果 */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div className="absolute inset-0 bg-blue-500/30 animate-pulse"></div>
            </div>

            {/* 时间节点 */}
            <div className="space-y-16 lg:space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* 时间点圆环 - 带发光脉冲效果 */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-x-1/2 z-10 w-8 h-8 bg-white border-4 border-blue-500/50 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/50 group-hover:scale-110">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    {/* 外圈发光 */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`ml-12 lg:ml-0 ${
                    index % 2 === 0 
                      ? "lg:w-[48%] lg:mr-auto lg:pr-8" 
                      : "lg:w-[48%] lg:ml-auto lg:pl-8"
                  }`}>
                    <div className={`group/card relative p-6 lg:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:bg-blue-50/50 transition-all duration-300 hover-gentle-wiggle cursor-pointer overflow-hidden ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}>
                      {/* Moving Border 效果 */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-[border-beam_3s_linear_infinite]" style={{
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "exclude",
                          WebkitMaskComposite: "xor",
                          padding: "1px",
                        }} />
                      </div>
                      {/* 内发光效果 */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="text-3xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
