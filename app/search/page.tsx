"use client";

import { useState, useMemo, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { NewsItem } from "@/components/news/NewsCard";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResultList } from "@/components/search/SearchResultList";

export type searchResultCategory = "全部" | "实验检测" | "适航服务" | "公司动态" | "行业资讯" | "成功案例";
const searchCategories: searchResultCategory[] = [
  "全部", "实验检测", "适航服务", "公司动态", "行业资讯", "成功案例"
];

// 新闻数据（从新闻中心页面获取）
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
  },
  {
    id: "12",
    title: "CAAC发布适航审定法规更新",
    excerpt: "中国民用航空局发布了最新的适航审定相关法规更新，对航空器及零部件适航管理提出了新的要求。",
    date: "2023-11-25",
    category: "industry",
  },
];

// 测试服务数据
interface TestingItem {
  id: string;
  title: string;
  excerpt: string;
  category: "实验检测";
  href: string;
}

const testingData: TestingItem[] = [
  {
    id: "test-1",
    title: "电磁兼容(EMC)测试",
    excerpt: "提供全面的EMC测试服务，包括辐射发射、传导发射、辐射抗扰度、传导抗扰度等测试项目，符合DO-160G标准。",
    category: "实验检测",
    href: "/testing#emc-testing",
  },
  {
    id: "test-2",
    title: "环境可靠性试验",
    excerpt: "高低温、湿热、振动、冲击、盐雾等环境适应性测试，确保航空产品在各种极端环境下的可靠性。",
    category: "实验检测",
    href: "/testing#environment-reliability",
  },
  {
    id: "test-3",
    title: "DO-160G 标准测试",
    excerpt: "严格按照DO-160G标准进行机载设备环境条件和测试程序验证，确保符合适航要求。",
    category: "实验检测",
    href: "/testing",
  },
  {
    id: "test-4",
    title: "软件测试与验证",
    excerpt: "机载软件验证与确认，符合DO-178C标准，提供软件测试计划、测试用例设计和测试执行服务。",
    category: "实验检测",
    href: "/testing#software-components",
  },
  {
    id: "test-5",
    title: "元器件筛选测试",
    excerpt: "对航空电子元器件进行全面的筛选测试，包括温度循环、老炼、电参数测试等。",
    category: "实验检测",
    href: "/testing#components-section",
  },
];

// 适航服务数据
interface ServiceItem {
  id: string;
  title: string;
  excerpt: string;
  category: "适航服务";
  href: string;
}

const serviceData: ServiceItem[] = [
  {
    id: "service-1",
    title: "适航证申请咨询",
    excerpt: "提供TC（型号合格证）、PC（生产许可证）、STC（补充型号合格证）等适航证申请全流程咨询服务。",
    category: "适航服务",
    href: "/services#consulting",
  },
  {
    id: "service-2",
    title: "CTSOA 认证支持",
    excerpt: "协助客户完成CTSOA（技术标准规定项目批准书）申请，提供技术文件编制和审查服务。",
    category: "适航服务",
    href: "/services#consulting",
  },
  {
    id: "service-3",
    title: "DER 委任代表服务",
    excerpt: "拥有多名适航委任代表（DER），可提供适航符合性验证、技术文件审查等专业服务。",
    category: "适航服务",
    href: "/services#engineering",
  },
  {
    id: "service-4",
    title: "适航培训课程",
    excerpt: "提供DO-178C、DO-254、DO-160G等适航标准培训，以及适航法规和工程实践培训。",
    category: "适航服务",
    href: "/services#training",
  },
  {
    id: "service-5",
    title: "工程技术支持",
    excerpt: "提供适航符合性验证、技术文件编制、工程审查等全方位的工程技术支持服务。",
    category: "适航服务",
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
  "company": "公司动态",
  "industry": "行业资讯",
  "success": "成功案例",
}

// 合并所有数据
const getAllData = (): SearchResult[] => {
  const results: SearchResult[] = [];

  // 添加新闻数据
  newsData.forEach((item) => {
    results.push({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category: newsCategoryMap[item.category],
      href: `/news/${item.id}`,
      date: item.date,
      type: "news",
    });
  });

  // 添加测试数据
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
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const [activeCategory, setActiveCategory] = useState<searchResultCategory>("全部");

  // 搜索和筛选逻辑
  const filteredResults = useMemo(() => {
    const allData = getAllData();
    let results = allData;

    // 按分类筛选
    if (activeCategory !== "全部") {
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
              找到 <span className="text-blue-600 font-semibold">{filteredResults.length}</span> 条关于
              "<span className="text-gray-900 font-semibold">{query}</span>" 的结果
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {searchCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 结果列表 */}
          {filteredResults.length > 0 ? (
            <SearchResultList results={filteredResults} query={query} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg mb-2">未找到相关服务</p>
              <p className="text-gray-500 text-sm">
                请尝试搜索 <span className="text-blue-600">"EMC"</span> 或{" "}
                <span className="text-blue-600">"适航"</span>
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
          <p className="text-gray-600 text-lg">请输入搜索关键词</p>
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
      <SearchBar inputRef={inputRef} handleSearch={handleSearch} />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-500">{t("search.loading")}</div>
          </div>
        }
      >
        <SearchContent />
      </Suspense>
    </section>
  </>);
}
