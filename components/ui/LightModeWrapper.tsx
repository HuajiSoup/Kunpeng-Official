"use client";

import { ReactNode } from "react";
import { DotBackground } from "./DotBackground";

interface LightModeWrapperProps {
  children: ReactNode;
  className?: string;
  showDotBackground?: boolean;
}

export function LightModeWrapper({
  children,
  className = "",
  showDotBackground = true,
}: LightModeWrapperProps) {
  return (
    <div className={`relative min-h-screen bg-white ${className}`}>
      {showDotBackground && <DotBackground variant="light" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
