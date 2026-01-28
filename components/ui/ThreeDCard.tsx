"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: ReactNode;
  className?: string;
  theme?: "dark" | "light";
}

export function ThreeDCard({
  children,
  className,
  theme = "dark",
}: ThreeDCardProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative rounded-2xl transition-all duration-300",
        isLight
          ? "bg-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
          : "bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
