"use client";

import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LightModeWrapper } from "@/components/ui/LightModeWrapper";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { MovingBorder } from "@/components/ui/MovingBorder";
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import {
  FileCheck,
  Award,
  Shield,
  Code,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

// 模拟服务数据
const serviceData = {
  consulting: {
    title: "适航取证咨询",
    subtitle: "为航空器及其零部件制造商提供全面的适航取证支持",
    icon: FileCheck,
    features: [
      {
        icon: FileCheck,
        title: "TC 型号合格证",
        description: "型号合格证申请全程指导，技术文件编写与审核支持。",
      },
      {
        icon: Award,
        title: "PC 生产许可证",
        description: "生产许可证质量管理体系建立与维护咨询。",
      },
      {
        icon: Shield,
        title: "CTSO 技术标准规定",
        description: "技术标准规定项目申请支持，零部件适航认证。",
      },
    ],
    process: [
      { step: "需求分析", description: "深入了解客户需求，评估项目复杂度" },
      { step: "方案制定", description: "制定详细的适航取证方案和技术路线图" },
      { step: "项目执行", description: "按照方案执行，提供全程技术支持和文档编制" },
      { step: "结项交付", description: "完成适航审查，交付合格证及相关技术文档" },
    ],
    benefits: [
      "专业团队全程支持",
      "丰富的项目经验",
      "符合国际标准",
      "快速响应服务",
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  const service = serviceData.consulting; // 简化示例，实际应从数据源获取
  const Icon = service.icon;

  return (
    <LightModeWrapper>
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                核心服务
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                我们提供全方位的适航取证咨询服务
              </p>
            </div>

            <BentoGrid theme="light" className="max-w-6xl mx-auto">
              {service.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <BentoCard
                    key={index}
                    theme="light"
                    title={feature.title}
                    description={feature.description}
                    icon={<FeatureIcon className="w-6 h-6" />}
                  />
                );
              })}
            </BentoGrid>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                服务流程
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                从需求分析到结项交付，我们提供全流程专业服务
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((item, index) => (
                  <ThreeDCard key={index} theme="light" className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.step}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ThreeDCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  为什么选择我们
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                准备开启您的适航认证之旅？
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                我们的专业团队随时为您提供咨询支持，帮助您顺利完成适航取证流程
              </p>

              <MovingBorder
                theme="light"
                borderRadius="0.75rem"
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span>联系咨询顾问</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MovingBorder>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LightModeWrapper>
  );
}
