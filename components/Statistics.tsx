"use client";

import { Award, Cpu, Users, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

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

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-semibold text-white">
      {count}{suffix}
    </span>
  );
}

export default function Statistics() {
  const { t } = useLanguage();
  const stats = getStats(t);
  
  return (
    <section className="relative py-16 lg:py-20 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t("home.statistics.title")}
            </span>
          </h2>
          <p className="text-base text-slate-300 font-light">
            {t("home.statistics.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-slate-900/30 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-center hover-gentle-wiggle cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2">
                  <span className="text-3xl lg:text-4xl font-semibold text-white">
                    {stat.value}{stat.suffix}
                  </span>
                </div>
                <div className="text-base font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
