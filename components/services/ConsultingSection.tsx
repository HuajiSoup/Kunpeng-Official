"use client";

import {
  AlertTriangle,
  Award,
  Code2,
  Factory,
  FileCheck,
  FlaskConical,
  GraduationCap,
  LucideIcon,
  Puzzle,
  Settings,
  Shield,
  Wrench,
  Workflow,
} from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

import { ItemBox } from "@/components/ui/ItemBox";
import { PageSectionTitle } from "@/components/ui/PageSectionTitle";
import ShadowBackground from "@/components/ui/ShadowBackground";

import Background from "@/assets/background/bg-services-consult.jpg";

const getAirworthinessItems = (t: (key: string) => string) => [
  {
    title: t("services.consulting.sections.airworthiness.items.tc.title"),
    description: t("services.consulting.sections.airworthiness.items.tc.description"),
    icon: FileCheck,
  },
  {
    title: t("services.consulting.sections.airworthiness.items.stc.title"),
    description: t("services.consulting.sections.airworthiness.items.stc.description"),
    icon: Shield,
  },
  {
    title: t("services.consulting.sections.airworthiness.items.mda.title"),
    description: t("services.consulting.sections.airworthiness.items.mda.description"),
    icon: Wrench,
  },
  {
    title: t("services.consulting.sections.airworthiness.items.pma.title"),
    description: t("services.consulting.sections.airworthiness.items.pma.description"),
    icon: Puzzle,
  },
  {
    title: t("services.consulting.sections.airworthiness.items.ctsoa.title"),
    description: t("services.consulting.sections.airworthiness.items.ctsoa.description"),
    icon: Award,
  },
  {
    title: t("services.consulting.sections.airworthiness.items.pc.title"),
    description: t("services.consulting.sections.airworthiness.items.pc.description"),
    icon: Factory,
  },
];

const getEngineeringSupportItems = (t: (key: string) => string) => [
  {
    title: t("services.consulting.sections.engineeringSupport.items.arp4754.title"),
    description: t("services.consulting.sections.engineeringSupport.items.arp4754.description"),
    icon: Workflow,
  },
  {
    title: t("services.consulting.sections.engineeringSupport.items.arp4761.title"),
    description: t("services.consulting.sections.engineeringSupport.items.arp4761.description"),
    icon: AlertTriangle,
  },
  {
    title: t("services.consulting.sections.engineeringSupport.items.do178do254.title"),
    description: t("services.consulting.sections.engineeringSupport.items.do178do254.description"),
    icon: Code2,
  },
  {
    title: t("services.consulting.sections.engineeringSupport.items.do160g.title"),
    description: t("services.consulting.sections.engineeringSupport.items.do160g.description"),
    icon: FlaskConical,
  },
];

const getSystemAndTrainingItems = (t: (key: string) => string) => [
  {
    title: t("services.consulting.sections.systemAndTraining.items.system.title"),
    description: t("services.consulting.sections.systemAndTraining.items.system.description"),
    icon: Settings,
  },
  {
    title: t("services.consulting.sections.systemAndTraining.items.training.title"),
    description: t("services.consulting.sections.systemAndTraining.items.training.description"),
    icon: GraduationCap,
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <ItemBox>
      <div className="w-12 h-12 mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
        <Icon className="w-6 h-6 text-gray-900" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </ItemBox>
  );
}

export default function ConsultingSection() {
  const { t } = useLanguage();

  const airworthinessItems = getAirworthinessItems(t);
  const engineeringSupportItems = getEngineeringSupportItems(t);
  const systemAndTrainingItems = getSystemAndTrainingItems(t);

  return (
    <section id="consulting" className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12" data-anchor="consulting">
      <PageSectionTitle 
        title={t("services.consulting.title")}
        subtitle={t("services.consulting.subtitle")}
        description={t("services.consulting.description")}
      />

      <ShadowBackground img={Background} />

      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">
          {t("services.consulting.sections.airworthiness.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airworthinessItems.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-12 mb-5">
          {t("services.consulting.sections.engineeringSupport.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {engineeringSupportItems.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-12 mb-5">
          {t("services.consulting.sections.systemAndTraining.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {systemAndTrainingItems.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
