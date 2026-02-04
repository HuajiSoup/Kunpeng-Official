import { PageSectionTitle } from "../ui/PageSectionTitle"

export default function CompanyIntro() {
  return (
    <section id="company-intro" className="relative py-12 lg:py-16 bg-white scroll-mt-24" data-anchor="intro">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧文本内容 */}
          <div className="space-y-6">
            <PageSectionTitle 
              title="公司简介"
              subtitle="COMPANY PROFILE"
              align="start"
            />

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-sm lg:text-base">
                浙江鲲鹏航空技术测试验证有限公司是龙兴航电（龙兴航电）的重要子公司，专注于航空技术测试、验证及适航咨询服务。
              </p>
              <p className="text-sm lg:text-base">
                公司依托龙兴航电深厚的技术积淀和行业资源，在浙江之江航空技术发展中心的支持下，致力于为航空产业提供专业的测试验证解决方案。
              </p>
              <p className="text-sm lg:text-base font-medium text-slate-700 mt-6 border-l-4 border-blue-500/50 pl-4 bg-blue-50/50 rounded-r-lg py-2">
                致力于成为国内领先的航空技术测试验证解决方案提供商。
              </p>
            </div>
            
            {/* 装饰元素 */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
          </div>

          {/* 右侧图片占位符 */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden border-[0.5px] border-blue-500/20 shadow-md group relative hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <span className="text-slate-400 text-lg font-medium">Company Building Image</span>
              {/* Moving Border 效果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-[border-beam_3s_linear_infinite]"
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />
              </div>
            </div>
            {/* 装饰性边框 */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-[0.5px] border-blue-500/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
