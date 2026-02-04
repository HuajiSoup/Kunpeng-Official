"use client"

import { motion } from "framer-motion";
import { TextReveal } from "./TextReveal";
import { GridBackground } from "./GridBackground";
import { HaloBackground } from "./HaloBackground";

interface SectionBannerProps {
  top: string;
  middle: string;
  bottom: string;
}

export function SectionBanner({
  top,
  middle,
  bottom
}: SectionBannerProps) {
  return (<>
    <section className="hero-section relative w-full h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <GridBackground />
      <HaloBackground />

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        <TextReveal delay={0.2}>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs font-bold tracking-widest text-blue-400/80 uppercase mb-6 block"
          >
            {top}
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
              {middle}
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
            {bottom}
          </motion.p>
        </TextReveal>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  </>);
}