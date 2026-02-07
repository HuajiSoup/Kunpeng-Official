"use client";

import { Award, Cpu, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { IntroTitle } from "./ui/HomeSectionTitle";
import { BentoCard } from "./ui/BentoGrid";
import { AnimatedNumber } from "./ui/AnimatedNumber";

const getStats = (t: (key: string) => string) => [
  {
    icon: Award,
    value: 500,
    suffix: "+",
    label: t("home.statistics.items.cnas.label"),
    description: t("home.statistics.items.cnas.description"),
  },
  {
    icon: Cpu,
    value: 200,
    suffix: "+",
    label: t("home.statistics.items.equipment.label"),
    description: t("home.statistics.items.equipment.description"),
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: t("home.statistics.items.team.label"),
    description: t("home.statistics.items.team.description"),
  },
  {
    icon: Briefcase,
    value: 1000,
    suffix: "+",
    label: t("home.statistics.items.cases.label"),
    description: t("home.statistics.items.cases.description"),
  },
];

export default function Statistics() {
  const { t } = useLanguage();
  const stats = getStats(t);
  
  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <IntroTitle title={t("home.statistics.title")} desc={t("home.statistics.subtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <BentoCard
                key={index}
                className="group p-6 bg-slate-900/30 border border-slate-800 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2">
                  <AnimatedNumber
                    className="text-3xl lg:text-4xl font-semibold text-white"
                    endValue={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-base font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.description}
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
