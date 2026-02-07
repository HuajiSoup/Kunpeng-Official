"use client";

import { motion, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useState } from "react";

interface AnimatedNumberProps {
  startValue?: number;
  endValue: number;
  className?: string;
  suffix?: string;
}

export function AnimatedNumber({
  startValue = 0,
  endValue,
  className = "",
  suffix = "",
}: AnimatedNumberProps) {
  const valueMV = useMotionValue(startValue);
  const spring = useSpring(valueMV, { stiffness: 600, damping: 100 });
  const [displayValue, setDisplayValue] = useState(startValue);

  useMotionValueEvent(spring, "change", (v) => {
    setDisplayValue(Math.round(v));
  });

  return (
    <motion.span
      className={className}
      onViewportEnter={() => { valueMV.set(endValue) }}
      viewport={{
        once: true,
      }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}