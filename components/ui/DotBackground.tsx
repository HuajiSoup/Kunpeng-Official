"use client";

import { useEffect, useRef } from "react";

interface DotBackgroundProps {
  variant?: "dark" | "light";
  className?: string;
}

export function DotBackground({
  variant = "dark",
  className = "",
}: DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 配置：浅色模式使用浅蓝灰色点
    const dotColor = variant === "light" ? "#cbd5e1" : "rgba(59, 130, 246, 0.5)";
    const dotRadius = variant === "light" ? 1.5 : 2;
    const dotSpacing = 40;
    const opacity = variant === "light" ? 0.3 : 0.5;

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / dotSpacing);
      const rows = Math.ceil(canvas.height / dotSpacing);

      // 创建径向渐变遮罩效果
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(
        Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
      );

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;

          // 计算距离中心的距离
          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          // 径向遮罩：中心最明显，边缘淡出
          const fadeFactor = 1 - Math.min(distance / (maxDistance * 0.6), 1);
          const dotOpacity = opacity * fadeFactor;

          if (dotOpacity > 0.05) {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            // 处理颜色和透明度
            if (variant === "light") {
              ctx.fillStyle = dotColor;
              ctx.globalAlpha = dotOpacity;
            } else {
              ctx.fillStyle = dotColor;
            }
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    drawDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
