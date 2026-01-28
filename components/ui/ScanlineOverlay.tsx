"use client";

export function ScanlineOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
      {/* 扫描线效果 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(59, 130, 246, 0.03) 2px,
            rgba(59, 130, 246, 0.03) 4px
          )`,
        }}
      />
      {/* 数字噪点效果 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
