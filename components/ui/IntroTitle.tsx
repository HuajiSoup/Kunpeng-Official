interface IntroTitleProps {
  title: string;
  desc: string;
}

export function IntroTitle({
  title,
  desc
}: IntroTitleProps) {
  return (<>
    <div className="text-center mb-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3 tracking-tight">
        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-base text-slate-300 font-light">
        {desc}
      </p>
    </div>
  </>);
}