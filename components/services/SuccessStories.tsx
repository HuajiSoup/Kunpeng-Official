import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageSectionTitle } from "../ui/PageSectionTitle";
import { NewsCard, NewsCardItem } from "../news/NewsCard";

const successStories: NewsCardItem[] = [
  {
    id: "2",
    title: "XX项目成功获得TC取证",
    summary: "经过18个月的共同努力，我们成功协助XX航空项目完成Type Certificate (TC)取证工作",
    category: "success",
    date: "2024-01-10",
    isSuccessStory: true,
  },
  {
    id: "5",
    title: "XX无人机项目获得PC生产许可证",
    summary: "成功建立符合CAAC要求的生产质量体系，并获得生产许可证(PC)，为批量生产奠定基础",
    category: "success",
    date: "2023-12-28",
    isSuccessStory: true,
  },
  {
    id: "8",
    title: "XX航电设备CTSO取证成功",
    summary: "协助XX公司的航电设备完成CTSO取证，该设备现已获得技术标准规定项目批准",
    category: "success",
    date: "2023-12-15",
    isSuccessStory: true,
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
          <NewsCard key={story.id} item={story} showArrow />
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
