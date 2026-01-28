"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TextReveal } from "@/components/ui/TextReveal";
import { Typewriter } from "@/components/ui/Typewriter";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t } = useLanguage();
  
  const mainTitle = t("home.hero.slide1.title");
  const subtitle = t("home.hero.slide1.subtitle");
  const description = t("home.hero.slide1.description");
  const primaryCTA = t("home.hero.slide1.cta");
  const secondaryCTA = t("nav.about");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Beams Effect */}
      <BackgroundBeams />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <TextReveal delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Professional Aviation Testing
              </span>
            </motion.div>
          </TextReveal>

          {/* Main Title with Typewriter Effect */}
          <TextReveal delay={0.4}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              <Typewriter 
                text={mainTitle} 
                speed={80}
                className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
              />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mainTitle.length * 0.08 + 0.5, duration: 0.8 }}
                className="block text-4xl sm:text-5xl lg:text-6xl font-light text-blue-400/90 mt-2"
              >
                {subtitle}
              </motion.span>
            </h1>
          </TextReveal>

          {/* Description */}
          <TextReveal delay={0.6}>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {description}
            </p>
          </TextReveal>

          {/* CTA Buttons */}
          <TextReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/testing"
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-8 py-4",
                    "bg-gradient-to-r from-blue-600 to-blue-500 text-white",
                    "rounded-lg font-semibold text-base",
                    "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
                    "hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]",
                    "transition-all duration-300",
                    "overflow-hidden"
                  )}
                >
                  <span className="relative z-10">{primaryCTA}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className={cn(
                    "group inline-flex items-center gap-2 px-8 py-4",
                    "bg-slate-800/50 backdrop-blur-sm text-white",
                    "border border-slate-700 rounded-lg font-semibold text-base",
                    "hover:border-blue-500/50 hover:bg-slate-800/70",
                    "transition-all duration-300"
                  )}
                >
                  <span>{secondaryCTA}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
