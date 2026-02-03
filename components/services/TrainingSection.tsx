const courses = [
  { 
    name: "DO-178C 软件适航培训", 
    standard: "DO-178C",
    category: "软件适航",
    instructor: "适航委任代表 (DER)"
  },
  { 
    name: "DO-254 硬件适航培训", 
    standard: "DO-254",
    category: "硬件适航",
    instructor: "资深硬件工程师"
  },
  { 
    name: "ARP4754A 系统开发培训", 
    standard: "ARP4754A",
    category: "系统开发",
    instructor: "系统安全专家"
  },
  { 
    name: "DO-160G 环境试验培训", 
    standard: "DO-160G",
    category: "环境试验",
    instructor: "环境试验工程师"
  },
  { 
    name: "RTCA/DO-178B 软件标准", 
    standard: "RTCA/DO-178B",
    category: "软件标准",
    instructor: "适航委任代表 (DER)"
  },
  { 
    name: "FAA AC 20-152 工具鉴定", 
    standard: "FAA AC 20-152",
    category: "工具鉴定",
    instructor: "工具鉴定专家"
  },
];

export default function TrainingSection() {
  return (
    <section id="training" className="scroll-mt-24 border-t border-blue-500/10 pt-24" data-anchor="training">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
          专业培训课程
        </h2>
        <p className="text-sm text-gray-500">
          由行业资深专家授课，提供定制化企业培训服务
        </p>
      </div>

      {/* Courses */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 shadow-sm overflow-hidden">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center gap-4 p-6 ${
              index < courses.length - 1 ? "border-b border-blue-500/10" : ""
            } hover:bg-blue-50/40 transition-colors`}
          >
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {course.name}
              </h3>
              
              <p className="text-xs text-gray-500">
                {course.instructor}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                {course.standard}
              </span>
              <span className="text-xs text-gray-500">{course.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
