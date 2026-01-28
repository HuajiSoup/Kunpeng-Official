"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/news/NewsHero";
import NewsCategories from "@/components/news/NewsCategories";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsList from "@/components/news/NewsList";
import NewsPagination from "@/components/news/NewsPagination";
import { useLanguage } from "@/lib/LanguageContext";
import { DotBackground } from "@/components/ui/DotBackground";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "all" | "company" | "industry" | "success";
  image?: string;
  isSuccessStory?: boolean;
}

// Mock 新闻数据
const newsData: NewsItem[] = [
  {
    id: "1",
    title: "浙江鲲鹏获得CNAS实验室认可证书",
    excerpt: "经过严格评审，浙江鲲鹏航空技术测试验证有限公司成功获得中国合格评定国家认可委员会(CNAS)颁发的实验室认可证书，标志着公司在测试能力建设方面取得重要突破。",
    date: "2024-01-15",
    category: "company",
  },
  {
    id: "2",
    title: "成功协助XX项目完成TC取证",
    excerpt: "经过18个月的共同努力，我们成功协助XX航空项目完成Type Certificate (TC)取证工作，该项目为国内首款符合DO-160G标准的通用航空器。",
    date: "2024-01-10",
    category: "success",
    isSuccessStory: true,
  },
  {
    id: "3",
    title: "FAA发布新的适航审定指南",
    excerpt: "美国联邦航空管理局(FAA)近日发布了关于机载软件适航审定的最新指南AC 20-193，对DO-178C标准实施提供了更详细的指导说明。",
    date: "2024-01-08",
    category: "industry",
  },
  {
    id: "4",
    title: "公司举办DO-178C标准培训课程",
    excerpt: "应客户需求，公司于本月初成功举办DO-178C机载软件适航标准专题培训，来自全国各地的30余名航空电子工程师参加了此次培训。",
    date: "2024-01-05",
    category: "company",
  },
  {
    id: "5",
    title: "XX无人机项目成功获得PC生产许可证",
    excerpt: "在团队的专业指导下，XX无人机项目成功建立符合CAAC要求的生产质量体系，并获得生产许可证(PC)，为批量生产奠定基础。",
    date: "2023-12-28",
    category: "success",
    isSuccessStory: true,
  },
  {
    id: "6",
    title: "EASA更新DO-160标准至最新版本",
    excerpt: "欧洲航空安全局(EASA)正式采用DO-160G作为环境条件和测试程序的官方标准，替代了之前使用的DO-160F版本。",
    date: "2023-12-25",
    category: "industry",
  },
  {
    id: "7",
    title: "专家团队新增两名适航委任代表",
    excerpt: "公司技术团队再添两名适航委任代表(DER)，进一步增强了在适航审定领域的技术实力和服务能力。",
    date: "2023-12-20",
    category: "company",
  },
  {
    id: "8",
    title: "XX航电设备CTSO取证成功案例",
    excerpt: "我们协助XX公司的航电设备完成CTSO取证，该设备现已获得技术标准规定项目批准，可在多个航空器平台上使用。",
    date: "2023-12-15",
    category: "success",
    isSuccessStory: true,
  },
  {
    id: "9",
    title: "RTCA发布DO-254硬件标准补充说明",
    excerpt: "RTCA发布了DO-254标准的补充说明文档，对复杂硬件设计保证提供了更详细的指导，有助于硬件适航审定工作的开展。",
    date: "2023-12-10",
    category: "industry",
  },
  {
    id: "10",
    title: "公司完成XX项目系统安全性评估",
    excerpt: "经过6个月的深入分析，我们完成了XX航空项目的系统安全性评估工作，包括FHA、PSSA和SSA三个阶段的分析报告。",
    date: "2023-12-05",
    category: "company",
  },
  {
    id: "11",
    title: "XX通航飞机项目获得型号合格证",
    excerpt: "在适航咨询团队的全程支持下，XX通用航空飞机项目成功获得中国民用航空局颁发的型号合格证(TC)，标志着该项目正式进入市场。",
    date: "2023-11-28",
    category: "success",
    isSuccessStory: true,
  },
  {
    id: "12",
    title: "CAAC发布适航审定法规更新",
    excerpt: "中国民用航空局发布了最新的适航审定相关法规更新，对航空器及零部件适航管理提出了新的要求。",
    date: "2023-11-25",
    category: "industry",
  },
];

const ITEMS_PER_PAGE = 9;

function NewsContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category") || "all";
  
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const [currentPage, setCurrentPage] = useState(1);

  // 当 URL 参数改变时，更新 activeCategory
  useEffect(() => {
    const urlCategory = searchParams?.get("category") || "all";
    if (urlCategory !== activeCategory) {
      setActiveCategory(urlCategory);
      setCurrentPage(1);
    }
  }, [searchParams, activeCategory]);

  // 筛选新闻并按时间倒序排列
  const filteredNews = useMemo(() => {
    let filtered = activeCategory === "all" 
      ? newsData 
      : newsData.filter((item) => item.category === activeCategory);
    
    // 按时间倒序排列（最新的在前）
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // 倒序
    });
  }, [activeCategory]);

  // 获取精选新闻（仅在"全部"分类且第一页时显示前3条）
  const showFeaturedNews = activeCategory === "all" && currentPage === 1 && filteredNews.length >= 3;
  const featuredNews = useMemo(() => {
    if (showFeaturedNews) {
      return filteredNews.slice(0, 3);
    }
    return [];
  }, [filteredNews, showFeaturedNews]);

  // 分页处理
  const paginatedNews = useMemo(() => {
    const skipCount = showFeaturedNews ? 3 : 0; // 如果显示Featured News，跳过前3条
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const actualStartIndex = skipCount + startIndex;
    return filteredNews.slice(actualStartIndex, actualStartIndex + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage, showFeaturedNews]);

  // 计算总页数
  const totalPages = useMemo(() => {
    const totalItems = filteredNews.length;
    const skipCount = showFeaturedNews ? 3 : 0;
    const remainingItems = Math.max(0, totalItems - skipCount);
    return Math.max(1, Math.ceil(remainingItems / ITEMS_PER_PAGE));
  }, [filteredNews, showFeaturedNews]);

  // 分类改变时重置到第一页
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  // 确保页码有效
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <NewsHero />
      
      {/* 桌面端固定导航栏 */}
      <NewsCategories 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
      />
      
      {/* 主要内容区域 - 使用grid布局，侧边栏在hero section下方 */}
      <div className="bg-white">
        <div className="flex gap-4 px-6 sm:px-8 lg:pr-12 lg:pl-[280px]">
          {/* 移动端导航栏 - 在 flex 布局中 */}
          <div className="flex-shrink-0 pt-8 lg:hidden">
            <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm w-[200px]">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">分类筛选</h3>
              <ul className="space-y-1">
                {[
                  { id: "all", label: "全部" },
                  { id: "company", label: "公司新闻" },
                  { id: "industry", label: "行业动态" },
                  { id: "success", label: "成功案例" },
                ].map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                        activeCategory === category.id
                          ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                          : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                      }`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* 主内容区域 - flex-1占据剩余空间 */}
          <main className="flex-1 min-w-0 py-8">
            {showFeaturedNews && <FeaturedNews featuredNews={featuredNews} />}
            <NewsList news={paginatedNews} />
            {totalPages > 1 && (
              <NewsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </main>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default function NewsPage() {
  const { t } = useLanguage();
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* 浅色点状背景 */}
      <DotBackground variant="light" />
      
      {/* 内容层 */}
      <div className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-500">{t("news.loading")}</div>
          </div>
        }>
          <NewsContent />
        </Suspense>
      </div>
    </main>
  );
}
