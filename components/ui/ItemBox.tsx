import React from "react";

import { cn } from "@/lib/utils";

export function ItemBox({
  children,
  fancy = false,
  className = "",
}: {
  children: React.ReactNode,
  fancy?: boolean,
  className?: string,
}) {
  return (
    <div
      className={cn(
        `group p-6 rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer`,
        fancy ? "hover-gentle-wiggle" : "",
        className
      )}
    >
      {/* Moving Border & background color*/}
      {/* {fancy && <>
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
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
        </div>
      </>} */}
      
      {children}
    </div>
  );
}