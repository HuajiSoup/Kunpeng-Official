"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getEngineeringServices = (t: (key: string) => string) => [
  {
    title: t("services.engineering.items.safety.title"),
    standards: ["FHA", "PSSA", "SSA"],
    description: t("services.engineering.items.safety.description"),
  },
  {
    title: t("services.engineering.items.reliability.title"),
    standards: ["FMEA", "FTA", t("services.engineering.standards.reliabilityPrediction")],
    description: t("services.engineering.items.reliability.description"),
  },
  {
    title: t("services.engineering.items.assurance.title"),
    standards: ["DO-178C", "DO-254", "Level A-D"],
    description: t("services.engineering.items.assurance.description"),
  },
];

export default function EngineeringSection() {
  const { t } = useLanguage();
  const engineeringServices = getEngineeringServices(t);

  return (
    <section id="engineering" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 border-t border-blue-500/10" data-anchor="engineering">
      <PageSectionTitle 
        title={t("services.engineering.title")}
        subtitle={t("services.engineering.subtitle")}
        description={t("services.engineering.description")}
      />

      <div className="grid gap-8">
        {engineeringServices.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
            {/* 图片占位符 */}
            <div className="w-full md:w-48 aspect-video bg-gray-100 rounded-lg flex-shrink-0 border border-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-xs font-medium">Engineering Image</span>
            </div>

            {/* 内容 */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
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

              <p className="text-sm text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
