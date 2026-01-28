"use client";

import { motion } from "framer-motion";
import { 
  Wind, 
  Zap, 
  Code, 
  FileCheck, 
  Wrench, 
  GraduationCap,
  Award,
  Cpu
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { ShineBorder } from "@/components/ui/ShineBorder";

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Wind,
    title: t("home.capabilities.testingItems.env.title"),
    description: t("home.capabilities.testingItems.env.description"),
    span: 1,
  },
  {
    icon: Zap,
    title: t("home.capabilities.testingItems.emc.title"),
    description: t("home.capabilities.testingItems.emc.description"),
    span: 1,
  },
  {
    icon: Code,
    title: t("home.capabilities.testingItems.software.title"),
    description: t("home.capabilities.testingItems.software.description"),
    span: 1,
  },
  {
    icon: FileCheck,
    title: t("home.capabilities.servicesItems.consulting.title"),
    description: t("home.capabilities.servicesItems.consulting.description"),
    span: 2,
  },
  {
    icon: Wrench,
    title: t("home.capabilities.servicesItems.engineering.title"),
    description: t("home.capabilities.servicesItems.engineering.description"),
    span: 1,
  },
  {
    icon: GraduationCap,
    title: t("home.capabilities.servicesItems.training.title"),
    description: t("home.capabilities.servicesItems.training.description"),
    span: 1,
  },
  {
    icon: Award,
    title: t("home.heroFeatures.cnas.title"),
    description: t("home.heroFeatures.cnas.description"),
    span: 1,
  },
  {
    icon: Cpu,
    title: t("home.heroFeatures.equipment.title"),
    description: t("home.heroFeatures.equipment.description"),
    span: 1,
  },
];

export default function HeroFeatures() {
  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t("home.capabilities.title")}
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t("home.capabilities.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <BentoCard
                key={index}
                span={feature.span as 1 | 2 | 3 | 4}
                title={feature.title}
                description={feature.description}
                icon={<Icon className="w-6 h-6" />}
                className="group"
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
