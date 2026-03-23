"use client";

import { Search, FileText, Rocket, CheckCircle, ArrowRight, ShieldCheck, Pen, PenTool, BookmarkCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getSteps = (t: (key: string) => string) => [
  {
    number: 1,
    icon: Search,
    title: "项目受理和启动",
    description: "协助提交申请书，组建审查组，召开首次会议",
  },
  {
    number: 2,
    icon: FileText,
    title: "要求确定",
    description: "确定审定基础，制定认证计划，明确局方审查重点",
  },
  {
    number: 3,
    icon: PenTool,
    title: "符合性计划制定",
    description: "协助制定详细的符合性验证计划，确定符合性方法",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "符合性确认",
    description: "完成局方验证和确认工作（文件评审、试验目击、审定飞行试验等）",
  },
  {
    number: 5,
    icon: BookmarkCheck,
    title: "颁证",
    description: "完成最终TCB会议，配合局方完成审查报告，获取相关适航证件",
  }
];

export default function ProcessWorkflow() {
  const { t } = useLanguage();
  const steps = getSteps(t);

  return (
    <section id="process-workflow" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10">
      <PageSectionTitle 
        title={t("services.process.title")}
        subtitle={t("services.process.subtitle")}
        description={t("services.process.description")}
      />

      {/* Desktop: horizonal timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* connect line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

          <div className="relative flex items-start justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex-1 flex flex-col items-center px-2">
                  {/* index ball */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gray-900/20 shadow-sm">
                      <Icon className="w-10 h-10 text-gray-900" />
                    </div>
                    {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{step.number}</span>
                    </div> */}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-500 text-center max-w-[200px] mx-auto leading-relaxed">
                    {step.description}
                  </p>

                  {/* arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-12 right-0 -translate-y-1/2 translate-x-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phone: Vertical Timeline */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative flex">
              {/* connect line + icons */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-900/20 z-10 flex-shrink-0">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-grow bg-gray-200 min-h-full"></div>
                )}
              </div>

              {/* content */}
              <div className="flex-1 pb-6 pl-4 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-gray-400">{step.number}</span>
                  <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
