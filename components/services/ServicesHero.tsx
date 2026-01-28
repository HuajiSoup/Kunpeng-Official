"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function ServicesHero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* 科技感网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* 动态光晕效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 聚光灯效果 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* 面包屑导航 */}
      <div className="absolute top-6 left-0 right-0 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-sm text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {t("nav.home")}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <span className="text-white">{t("nav.services")}</span>
          </motion.nav>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        <TextReveal delay={0.2}>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs font-bold tracking-widest text-blue-400/80 uppercase mb-6 block"
          >
            AIRWORTHINESS SERVICES
          </motion.span>
        </TextReveal>
        
        <TextReveal delay={0.4}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {t("services.hero.title")}
            </span>
          </motion.h1>
        </TextReveal>
        
        <TextReveal delay={0.6}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base lg:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {t("services.hero.subtitle")}
          </motion.p>
        </TextReveal>

        {/* 装饰性光点 */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}
