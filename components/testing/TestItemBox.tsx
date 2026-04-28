interface TestItem {
  field: string;
  paras: string[];
  standards: string[];
  examples: string[];
};

interface TestItemBoxProps {
  item: TestItem;
}

export function TestItemBox({
  item: { field, paras, standards, examples }
}: TestItemBoxProps) {
  return (<>
    <div
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:border-gray-300 transition-all duration-300 hover-gentle-wiggle cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {field}
        </h3>

        <div className="flex flex-col gap-1 mb-4">
          {(paras.length > 0) && <div className="mb-3">
            {paras.map((para, idx) => (
              <p key={idx} className="text-sm text-gray-600 leading-relaxed font-mono">
                {para}
              </p>
            ))}
          </div>}

          {(examples.length > 0) && <p className="mb-3 text-sm text-gray-500 leading-relaxed">
            {examples.join(" | ")}
          </p>}

          <div className="flex flex-row flex-wrap gap-1">
            {standards.map((standard, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>);
}

export type { TestItem };