import React from "react";

export function ItemBox({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:bg-blue-50/50 transition-all duration-300 hover-gentle-wiggle cursor-pointer text-center overflow-hidden"
    >
      {/* Moving Border 效果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] animate-[border-beam_3s_linear_infinite]"
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      </div>
      {/* 内发光效果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}