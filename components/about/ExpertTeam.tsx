"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const teamMembers = [
  {
    name: "XXX",
    role: "适航委任代表",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    name: "XXX",
    role: "高级测试工程师",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    name: "XXX",
    role: "技术总监",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    name: "XXX",
    role: "质量主管",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    name: "XXX",
    role: "EMC测试专家",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
  {
    name: "XXX",
    role: "环境试验专家",
    bio: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
  },
];

export default function ExpertTeam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    // 延迟检查，确保 DOM 完全渲染
    const timer = setTimeout(() => {
      checkScrollButtons();
    }, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
    }

    return () => {
      clearTimeout(timer);
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      }
    };
  }, [checkScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      
      // 延迟更新按钮状态
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section id="team" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16" data-anchor="team">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <PageSectionTitle 
          title="专家团队"
          subtitle="EXPER TEAM"
          description="汇聚行业顶尖人才，拥有多名适航委任代表(DER)及资深测试专家"
        />

        {/* 横向滚动容器 */}
        <div className="relative">
          {/* 左箭头按钮 */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-300 shadow-md border-[0.5px] border-blue-500/20 bg-white/90 backdrop-blur-sm ${
              canScrollLeft
                ? "text-blue-600 hover:bg-blue-50 hover:border-blue-500/50 hover:scale-110 hover:shadow-lg"
                : "text-gray-300 cursor-not-allowed opacity-50"
            }`}
            aria-label="向左滑动"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 滚动容器 */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 md:px-12 px-4 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-64 md:w-72 text-center cursor-pointer snap-center"
              >
                {/* 头像 */}
                <div className="aspect-square w-48 md:w-56 mx-auto rounded-xl bg-slate-100 my-4 flex items-center justify-center overflow-hidden border-[0.5px] border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] relative">
                  <span className="text-slate-400 text-xs font-medium">Photo</span>
                  {/* 悬停时的发光边框 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-[border-beam_3s_linear_infinite]"
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

                {/* 文本信息 */}
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-600/70 mb-2">{member.role}</p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* 右箭头按钮 */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-300 shadow-md border-[0.5px] border-blue-500/20 bg-white/90 backdrop-blur-sm ${
              canScrollRight
                ? "text-blue-600 hover:bg-blue-50 hover:border-blue-500/50 hover:scale-110 hover:shadow-lg"
                : "text-gray-300 cursor-not-allowed opacity-50"
            }`}
            aria-label="向右滑动"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 滚动提示 - 移动端显示 */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-xs text-gray-400">左右滑动查看更多</p>
        </div>
      </div>
    </section>
  );
}
