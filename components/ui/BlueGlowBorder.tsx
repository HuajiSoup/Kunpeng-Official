"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlueGlowBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function BlueGlowBorder({
  children,
  className,
  glowColor = "#3b82f6",
}: BlueGlowBorderProps) {
  return (
    <motion.div
      className={cn(
        "relative group overflow-hidden rounded-xl border border-slate-800",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* 移动的蓝色光晕边框 */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)`,
          filter: "blur(8px)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 内容 */}
      <div className="relative z-10 h-full">{children}</div>

      {/* 悬停时的聚光灯效果 */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.2), transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
