export default function EquipmentTable() {
  const equipment = [
    {
      name: "XXXXXX",
      model: "XXXXXX",
      manufacturer: "XXXXXX",
      specs: "XXXXXX XXXXXX XXXXXX",
    },
    {
      name: "XXXXXX",
      model: "XXXXXX",
      manufacturer: "XXXXXX",
      specs: "XXXXXX XXXXXX XXXXXX",
    },
    {
      name: "XXXXXX",
      model: "XXXXXX",
      manufacturer: "XXXXXX",
      specs: "XXXXXX XXXXXX XXXXXX",
    },
    {
      name: "XXXXXX",
      model: "XXXXXX",
      manufacturer: "XXXXXX",
      specs: "XXXXXX XXXXXX XXXXXX",
    },
    {
      name: "XXXXXX",
      model: "XXXXXX",
      manufacturer: "XXXXXX",
      specs: "XXXXXX XXXXXX XXXXXX",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase block mb-4">
            CORE EQUIPMENT
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            核心设备展示
          </h2>
          <div className="h-1 w-10 bg-blue-600 mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 overflow-hidden shadow-sm">
          {/* 桌面端表格 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    设备名称
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    型号
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    制造商
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    关键规格
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {equipment.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                      {item.model}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.manufacturer}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.specs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端卡片视图 */}
          <div className="md:hidden divide-y divide-gray-200">
            {equipment.map((item, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="mb-2">
                  <div className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-1">
                    {item.model}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  <span className="font-medium">制造商:</span> {item.manufacturer}
                </div>
                <div className="text-xs text-gray-600">
                  <span className="font-medium">规格:</span> {item.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
