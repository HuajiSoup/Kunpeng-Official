interface PageSectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "start" | "center" | "end";
}

export function PageSectionTitle({
  title,
  subtitle,
  description,
  align = "center",
}: PageSectionTitleProps) {
  const lineAlign = {
    start: "start-0",
    center: "mx-auto",
    end: "end-0",
  }[align];

  return (<>
    <div className={`mb-12 text-${align}`}>
      {subtitle && <span className="text-xs font-bold tracking-widest text-blue-600/70 uppercase block mb-4">
        {subtitle}
      </span>}

      <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight leading-tight">
        <span className="text-slate-900">
          {title}
        </span>
      </h2>

      <div className={`h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 ${lineAlign}`}></div>

      {description && <p className="text-base text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>}
    </div>
  </>);
}