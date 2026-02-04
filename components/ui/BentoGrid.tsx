"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
  theme?: "dark" | "light";
}

export function BentoGrid({
  className,
  children,
  theme = "dark",
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  className?: string;
  title?: string;
  description?: string;
  header?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  theme?: "dark" | "light";
}

export function BentoCard({
  className,
  title,
  description,
  header,
  icon,
  children,
  theme = "dark",
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // 根据主题选择样式
  const isLight = theme === "light";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 cursor-pointer transition-colors transition-shadow duration-300",
        // 浅色主题样式
        isLight
          ? "bg-white border border-slate-200 shadow-md hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-xl"
          : "border border-slate-800 bg-slate-900/30 backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
        className
      )}
    >
      {/* 浅色主题：线条扫光 */}
      {isLight && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in" />
        </div>
      )}

      {/* 深色主题：鼠标发光 */}
      {!isLight && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3), transparent 70%)`,
          }}
        />
      )}

      {children}
    </motion.div>
  );
}
