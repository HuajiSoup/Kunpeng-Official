import { LucideIcon } from "lucide-react";

interface TestItemBoxProps {
  title: string;
  icon: LucideIcon;
  standards: string[];
  specs: string;
  description: string;
}

export function TestItemBox({
  title,
  icon: Icon,
  standards,
  specs,
  description
}: TestItemBoxProps) {
  return (<>
    <div
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover-gentle-wiggle cursor-pointer"
    >
      {/* 暂时不知道怎么放图片 */}
      <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-xs font-medium">Test Image</span>
      </div>

      {/* 卡片内容 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {standards.map((standard, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
            >
              {standard}
            </span>
          ))}
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600 leading-relaxed font-mono">
            {specs}
          </p>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </>);
}