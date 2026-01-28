"use client";

export function SpotlightEffect() {
  return (
    <>
      {/* 左上角聚光灯 */}
      <div
        className="fixed top-0 left-0 w-[800px] h-[800px] pointer-events-none z-0 opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* 右下角聚光灯 */}
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none z-0 opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent 70%)",
          transform: "translate(50%, 50%)",
        }}
      />
    </>
  );
}
