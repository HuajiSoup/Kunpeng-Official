"use client";

import { useState, useMemo, Suspense, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResultList } from "@/components/search/SearchResultList";

export type searchResultCategory = "all" | "testing" | "services" | "company" | "industry" | "success";

const getSearchCategories = (t: (key: string) => string) => [
  { id: "all", label: t("search.categories.all") },
  { id: "testing", label: t("search.categories.testing") },
  { id: "services", label: t("search.categories.services") },
  { id: "company", label: t("search.categories.company") },
  { id: "industry", label: t("search.categories.industry") },
  { id: "success", label: t("search.categories.success") },
];

// 新闻数据（从新闻中心页面获取）
const newsData = [
  {
    id: "1",
    title: "浙江鲲鹏获得CNAS实验室认可证书",
    summary: "经过严格评审，浙江鲲鹏航空技术测试验证有限公司成功获得中国合格评定国家认可委员会(CNAS)颁发的实验室认可证书，标志着公司在测试能力建设方面取得重要突破。",
    date: "2024-01-15",
    category: "company",
  },
  {
    id: "2",
    title: "成功协助XX项目完成TC取证",
    summary: "经过18个月的共同努力，我们成功协助XX航空项目完成Type Certificate (TC)取证工作，该项目为国内首款符合DO-160G标准的通用航空器。",
    date: "2024-01-10",
    category: "success",
  },
  {
    id: "3",
    title: "FAA发布新的适航审定指南",
    summary: "美国联邦航空管理局(FAA)近日发布了关于机载软件适航审定的最新指南AC 20-193，对DO-178C标准实施提供了更详细的指导说明。",
    date: "2024-01-08",
    category: "industry",
  },
  {
    id: "4",
    title: "公司举办DO-178C标准培训课程",
    summary: "应客户需求，公司于本月初成功举办DO-178C机载软件适航标准专题培训，来自全国各地的30余名航空电子工程师参加了此次培训。",
    date: "2024-01-05",
    category: "company",
  },
  {
    id: "5",
    title: "XX无人机项目成功获得PC生产许可证",
    summary: "在团队的专业指导下，XX无人机项目成功建立符合CAAC要求的生产质量体系，并获得生产许可证(PC)，为批量生产奠定基础。",
    date: "2023-12-28",
    category: "success",
  },
  {
    id: "6",
    title: "EASA更新DO-160标准至最新版本",
    summary: "欧洲航空安全局(EASA)正式采用DO-160G作为环境条件和测试程序的官方标准，替代了之前使用的DO-160F版本。",
    date: "2023-12-25",
    category: "industry",
  },
  {
    id: "7",
    title: "专家团队新增两名适航委任代表",
    summary: "公司技术团队再添两名适航委任代表(DER)，进一步增强了在适航审定领域的技术实力和服务能力。",
    date: "2023-12-20",
    category: "company",
  },
  {
    id: "8",
    title: "XX航电设备CTSO取证成功案例",
    summary: "我们协助XX公司的航电设备完成CTSO取证，该设备现已获得技术标准规定项目批准，可在多个航空器平台上使用。",
    date: "2023-12-15",
    category: "success",
  },
  {
    id: "9",
    title: "RTCA发布DO-254硬件标准补充说明",
    summary: "RTCA发布了DO-254标准的补充说明文档，对复杂硬件设计保证提供了更详细的指导，有助于硬件适航审定工作的开展。",
    date: "2023-12-10",
    category: "industry",
  },
  {
    id: "10",
    title: "公司完成XX项目系统安全性评估",
    summary: "经过6个月的深入分析，我们完成了XX航空项目的系统安全性评估工作，包括FHA、PSSA和SSA三个阶段的分析报告。",
    date: "2023-12-05",
    category: "company",
  },
  {
    id: "11",
    title: "XX通航飞机项目获得型号合格证",
    summary: "在适航咨询团队的全程支持下，XX通用航空飞机项目成功获得中国民用航空局颁发的型号合格证(TC)，标志着该项目正式进入市场。",
    date: "2023-11-28",
    category: "success",
  },
  {
    id: "12",
    title: "CAAC发布适航审定法规更新",
    summary: "中国民用航空局发布了最新的适航审定相关法规更新，对航空器及零部件适航管理提出了新的要求。",
    date: "2023-11-25",
    category: "industry",
  },
];

// 测试服务数据
interface TestingItem {
  id: string;
  title: string;
  excerpt: string;
  category: "testing";
  href: string;
}

const getTestingData = (t: (key: string) => string): TestingItem[] => [
  {
    id: "test-1",
    title: t("search.testing.items.t1.title"),
    excerpt: t("search.testing.items.t1.excerpt"),
    category: "testing",
    href: "/testing#emc-testing",
  },
  {
    id: "test-2",
    title: t("search.testing.items.t2.title"),
    excerpt: t("search.testing.items.t2.excerpt"),
    category: "testing",
    href: "/testing#environment-reliability",
  },
  {
    id: "test-3",
    title: t("search.testing.items.t3.title"),
    excerpt: t("search.testing.items.t3.excerpt"),
    category: "testing",
    href: "/testing",
  },
  {
    id: "test-4",
    title: t("search.testing.items.t4.title"),
    excerpt: t("search.testing.items.t4.excerpt"),
    category: "testing",
    href: "/testing#software-components",
  },
  {
    id: "test-5",
    title: t("search.testing.items.t5.title"),
    excerpt: t("search.testing.items.t5.excerpt"),
    category: "testing",
    href: "/testing#components-section",
  },
];

// 适航服务数据
interface ServiceItem {
  id: string;
  title: string;
  excerpt: string;
  category: "services";
  href: string;
}

const getServiceData = (t: (key: string) => string): ServiceItem[] => [
  {
    id: "service-1",
    title: t("search.services.items.s1.title"),
    excerpt: t("search.services.items.s1.excerpt"),
    category: "services",
    href: "/services#consulting",
  },
  {
    id: "service-2",
    title: t("search.services.items.s2.title"),
    excerpt: t("search.services.items.s2.excerpt"),
    category: "services",
    href: "/services#consulting",
  },
  {
    id: "service-3",
    title: t("search.services.items.s3.title"),
    excerpt: t("search.services.items.s3.excerpt"),
    category: "services",
    href: "/services#engineering",
  },
  {
    id: "service-4",
    title: t("search.services.items.s4.title"),
    excerpt: t("search.services.items.s4.excerpt"),
    category: "services",
    href: "/services#training",
  },
  {
    id: "service-5",
    title: t("search.services.items.s5.title"),
    excerpt: t("search.services.items.s5.excerpt"),
    category: "services",
    href: "/services#engineering",
  },
];

// 统一搜索结果接口
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: searchResultCategory;
  href: string;
  date?: string;
  type: "news" | "testing" | "service";
}

const newsCategoryMap: Record<string, searchResultCategory> = {
  company: "company",
  industry: "industry",
  success: "success",
};

// 合并所有数据
const getAllData = (t: (key: string) => string): SearchResult[] => {
  const results: SearchResult[] = [];

  // 添加新闻数据
  newsData.forEach((item) => {
    results.push({
      id: item.id,
      title: item.title,
      excerpt: item.summary,
      category: newsCategoryMap[item.category],
      href: `/news/${item.id}`,
      date: item.date,
      type: "news",
    });
  });

  // 添加测试数据
  const testingData = getTestingData(t);
  testingData.forEach((item) => {
    results.push({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category: item.category,
      href: item.href,
      type: "testing",
    });
  });

  // 添加服务数据
  const serviceData = getServiceData(t);
  serviceData.forEach((item) => {
    results.push({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category: item.category,
      href: item.href,
      type: "service",
    });
  });

  return results;
};

function SearchContent() {
  const { t } = useLanguage();
  const searchCategories = getSearchCategories(t);
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const [activeCategory, setActiveCategory] = useState<searchResultCategory>("all");

  // 搜索和筛选逻辑
  const filteredResults = useMemo(() => {
    const allData = getAllData(t);
    let results = allData;

    // 按分类筛选
    if (activeCategory !== "all") {
      results = results.filter((item) => item.category === activeCategory);
    }

    // 按关键词搜索
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter((item) => {
        return (
          item.title.toLowerCase().includes(lowerQuery) ||
          item.excerpt.toLowerCase().includes(lowerQuery)
        );
      });
    }

    return results;
  }, [query, activeCategory]);

  return (<>
    <div className="container mx-auto my-8 px-6 sm:px-8 lg:px-12">
      {query ? (
        <>
          {/* 结果统计和分类筛选 */}
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              {t("search.results.prefix")}
              <span className="text-blue-600 font-semibold">{filteredResults.length}</span>
              {t("search.results.middle")}
              "<span className="text-gray-900 font-semibold">{query}</span>"
              {t("search.results.suffix")}
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {searchCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as searchResultCategory)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 结果列表 */}
          {filteredResults.length > 0 ? (
            <SearchResultList results={filteredResults} query={query} category={activeCategory} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg mb-2">{t("search.noResults.title")}</p>
              <p className="text-gray-500 text-sm">
                {t("search.noResults.hintPrefix")}
                <span className="text-blue-600">"{t("search.noResults.example1")}"</span>
                {t("search.noResults.hintOr")}
                <span className="text-blue-600">"{t("search.noResults.example2")}"</span>
              </p>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 text-lg">{t("search.empty.title")}</p>
        </motion.div>
      )}
    </div>
  </>);
}

export default function SearchPage() {
  const { t } = useLanguage();

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const searchInput = inputRef.current?.value;
    if (searchInput && searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (<>
    <section className="relative py-12 lg:py-16 bg-gray-50 min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-500">{t("search.loading")}</div>
          </div>
        }
      >
        <SearchBar inputRef={inputRef} handleSearch={handleSearch} />
        <SearchContent />
      </Suspense>
    </section>
  </>);
}
