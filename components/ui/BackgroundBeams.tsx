"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundBeams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Radial Gradient Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      {/* Static Glow Spots */}
      {[
        { x: "20%", y: "20%" },
        { x: "80%", y: "30%" },
        { x: "50%", y: "80%" },
      ].map((spot, index) => (
        <motion.div
          key={index}
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
            left: spot.x,
            top: spot.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
