import Link from "next/link";
import { Award, ArrowRight, Calendar } from "lucide-react";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const successStories = [
  {
    id: "2",
    title: "XX项目成功获得TC取证",
    description: "经过18个月的共同努力，我们成功协助XX航空项目完成Type Certificate (TC)取证工作",
    date: "2024-01-10",
    achievement: "TC取证成功",
  },
  {
    id: "5",
    title: "XX无人机项目获得PC生产许可证",
    description: "成功建立符合CAAC要求的生产质量体系，并获得生产许可证(PC)，为批量生产奠定基础",
    date: "2023-12-28",
    achievement: "PC取证成功",
  },
  {
    id: "8",
    title: "XX航电设备CTSO取证成功",
    description: "协助XX公司的航电设备完成CTSO取证，该设备现已获得技术标准规定项目批准",
    date: "2023-12-15",
    achievement: "CTSO取证成功",
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10">
      <PageSectionTitle 
        title="成功案例"
        subtitle="SUCCESS STORIES"
        description="我们已成功协助多个项目完成适航取证，积累了丰富的项目经验"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {successStories.map((story) => (
          <Link key={story.id} href={`/news?category=success`} className="block group">
            <div className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 h-full flex flex-col">
              {/* 暂时不知道什么图片 */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 border-b border-gray-200 flex items-center justify-center relative">
                <div className="absolute top-3 right-3">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>成功案例</span>
                  </div>
                </div>
                <Award className="w-10 h-10 text-blue-300" />
              </div>

              {/* 卡片内容 */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{story.date}</span>
                </div>

                <div className="inline-block mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                    {story.achievement}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {story.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {story.description}
                </p>

                <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all mt-auto">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* more */}
      <div className="mt-8 text-center">
        <Link
          href="/news?category=success"
          className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>查看更多案例</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
