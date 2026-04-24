"use client";

import {
  Users,
  Wrench,
  Target,
  FileText,
  BarChart3,
  Briefcase,
  Shield,
  Building2,
} from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { ItemBox } from "../ui/ItemBox";
import { PageSectionTitle } from "../ui/PageSectionTitle";

const getDepartments = (t: (key: string) => string) => [
  { icon: Users, name: t("about.org.departments.gmOffice"), description: "XXXXXX" },
  { icon: Target, name: t("about.org.departments.quality"), description: "XXXXXX" },
  { icon: Wrench, name: t("about.org.departments.tech"), description: "XXXXXX" },
  { icon: BarChart3, name: t("about.org.departments.marketing"), description: "XXXXXX" },
  { icon: FileText, name: t("about.org.departments.general"), description: "XXXXXX" },
  { icon: Building2, name: t("about.org.departments.environmentLab"), description: "XXXXXX" },
  { icon: Shield, name: t("about.org.departments.emcLab"), description: "XXXXXX" },
  { icon: Briefcase, name: t("about.org.departments.softwareLab"), description: "XXXXXX" },
];

export default function OrgStructure() {
  const { t } = useLanguage();
  const departments = getDepartments(t);

  return (
    <section id="org-structure" className="relative py-12 lg:py-16 bg-white scroll-mt-24 border-t border-slate-200 pt-16" data-anchor="org">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <PageSectionTitle
          title={t("about.org.title")}
          subtitle={t("about.org.subtitle")}
          description={t("about.org.description")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (   
                <ItemBox fancy className="text-center" key={index}>
                  <div className="w-14 h-14 bg-gray-900/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-gray-900 group-hover:to-gray-700 group-hover:text-white transition-all duration-300 border-[0.5px] border-gray-900/20 group-hover:border-gray-900/40">
                    <Icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-slate-600">{dept.description}</p>
                </ItemBox>
            );
          })}
        </div>
      </div>
    </section>
  );
}
