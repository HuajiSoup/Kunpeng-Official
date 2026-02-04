"use client";

export function GridBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
