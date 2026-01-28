"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: ReactNode;
  borderRadius?: string;
  className?: string;
  containerClassName?: string;
  borderColor?: string;
  theme?: "dark" | "light";
}

export function MovingBorder({
  children,
  borderRadius = "1rem",
  className,
  containerClassName,
  borderColor = "#3b82f6",
  theme = "dark",
}: MovingBorderProps) {
  const isLight = theme === "light";
  const borderColorValue = isLight ? "#3b82f6" : borderColor;

  return (
    <div
      className={cn(
        "relative p-[2px] overflow-hidden",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderColorValue}, transparent)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative z-10 rounded-[calc(1rem-2px)]",
          isLight ? "bg-white" : "bg-slate-950",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
}
