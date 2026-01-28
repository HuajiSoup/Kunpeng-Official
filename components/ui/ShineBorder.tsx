"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ShineBorder({
  children,
  className,
  color = "#3b82f6",
  ...otherProps
}: {
  children: ReactNode;
  className?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative flex h-full w-full items-center justify-center rounded-lg border border-transparent bg-slate-900/50 backdrop-blur-sm",
        className
      )}
      style={{
        background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",
      }}
      {...otherProps}
    >
      <div
        className="absolute -inset-0.5 rounded-lg opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <div className="relative z-10 h-full w-full rounded-lg bg-slate-900/50 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
