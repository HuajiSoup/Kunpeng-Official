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
  span?: 1 | 2 | 3 | 4;
  theme?: "dark" | "light";
}

export function BentoCard({
  className,
  title,
  description,
  header,
  icon,
  children,
  span = 1,
  theme = "dark",
}: BentoCardProps) {
  const spanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
  };

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative col-span-1 row-span-1 overflow-hidden rounded-xl p-6 transition-all duration-300",
        // 浅色主题样式
        isLight
          ? "bg-white border border-slate-200 shadow-md hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-xl"
          : // 深色主题样式（原有）
            "border border-slate-800 bg-slate-900/30 backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
        spanClasses[span],
        className
      )}
    >
      {/* 浅色主题：蓝色扫光效果 */}
      {isLight && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      )}

      {/* 深色主题：蓝色发光效果 */}
      {!isLight && (
        <>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3), transparent 70%)`,
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {header && <div className="mb-4">{header}</div>}
        {icon && (
          <div
            className={cn(
              "mb-4 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
              isLight
                ? "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
                : "bg-blue-500/10 text-blue-400"
            )}
          >
            {icon}
          </div>
        )}
        {title && (
          <h3
            className={cn(
              "text-lg font-semibold mb-2",
              isLight ? "text-slate-900" : "text-white"
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className={cn(
              "text-sm leading-relaxed",
              isLight ? "text-slate-600" : "text-slate-400"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
