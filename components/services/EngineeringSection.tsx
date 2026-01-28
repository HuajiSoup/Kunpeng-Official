"use client";

import { ShieldCheck, Activity, Code } from "lucide-react";

const engineeringServices = [
  {
    icon: ShieldCheck,
    title: "安全性评估",
    standards: ["FHA", "PSSA", "SSA"],
    description: "功能危险性评估、初步系统安全性评估、系统安全性评估，涵盖 DO-178C/DO-254 Level A-D，提供功能危险性评估及系统安全性评估服务。",
  },
  {
    icon: Activity,
    title: "可靠性分析",
    standards: ["FMEA", "FTA", "可靠性预测"],
    description: "故障模式与影响分析、故障树分析、可靠性预测，符合 MIL-HDBK-217、IEC 62380 标准。",
  },
  {
    icon: Code,
    title: "软件/硬件保证",
    standards: ["DO-178C", "DO-254", "Level A-D"],
    description: "机载软件/硬件适航保证，工具鉴定支持，提供 Level A-D 软件/硬件保证服务。",
  },
];

export default function EngineeringSection() {
  return (
    <section id="engineering" className="scroll-mt-24 border-t border-blue-500/10 pt-24" data-anchor="engineering">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
          工程技术支持
        </h2>
        <p className="text-sm text-gray-500">
          提供专业的工程技术服务，涵盖安全性分析、可靠性工程、软件硬件保证等领域
        </p>
      </div>

      <div className="grid gap-8">
        {engineeringServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              {/* 图片占位符 */}
              <div className="w-full md:w-48 aspect-video bg-gray-100 rounded-lg flex-shrink-0 border border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">Engineering Image</span>
              </div>

              {/* 内容 */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                
                {/* 标准代号 Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.standards.map((standard, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full inline-block"
                    >
                      {standard}
                    </span>
                  ))}
                </div>

                {/* 描述文字 */}
                <p className="text-sm text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
