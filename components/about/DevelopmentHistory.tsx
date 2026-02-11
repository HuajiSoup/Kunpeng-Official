import { ItemBox } from "../ui/ItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

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
        <PageSectionTitle 
          title="发展历程"
          subtitle="DEVELOPMENT HISTORY"
          description="XXX XXX XXXXXXX"
        />

        <div className="max-w-5xl mx-auto">
          {/* timeline wrapper */}
          <div className="relative">
            {/* timeline - center for pc */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
            
            {/* timeline - left for phone */}
            <div className="lg:hidden absolute top-0 bottom-0 w-px bg-gray-300"></div>

            {/* tiemline cards */}
            <div className="space-y-16 lg:space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* 时间点圆环 */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-x-1/2 z-10 w-8 h-8 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors shadow-sm">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`ml-12 lg:ml-0 ${
                    index % 2 === 0 
                      ? "lg:w-[48%] lg:mr-auto lg:pr-8" 
                      : "lg:w-[48%] lg:ml-auto lg:pl-8"
                  }`}>
                    <div className={`p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover-gentle-wiggle cursor-pointer ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}>
                      <div className="text-3xl font-bold text-gray-900 mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
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
