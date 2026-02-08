interface IntroTitleProps {
  title: string;
  desc: string;
}

export function HomeSectionTitle({
  title,
  desc
}: IntroTitleProps) {
  return (<>
    <div className="text-center mb-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
        {desc}
      </p>
    </div>
  </>);
}