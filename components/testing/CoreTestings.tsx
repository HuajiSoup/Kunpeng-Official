const testNames = [
  "地面低温耐受试验和低温短时工作试验",
  "低温工作试验",
  "地面高温耐受试验和高温短时工作试验",
  "高度试验",
  "减压试验",
  "过压试验",
  "温度变化试验",
  "湿热试验"
];
const tests = testNames.map(testname => ({
  name: testname,
  standard: "DO-160G",
}));

export default function CoreTestings() {
  return (
    <section id="core-testings" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
            CORE CAPABILITIES
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            核心测试项目
          </h2>
          <div className="h-1 w-10 bg-blue-600 mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            依据 DO-160G 《机载设备环境条件和试验程序》进行测试
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 overflow-hidden shadow-sm">
          <div className="block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    序号
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    测试项目
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    测试标准
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tests.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {index}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
