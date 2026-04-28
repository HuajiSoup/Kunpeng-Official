"use client";

import { useLanguage } from "@/lib/LanguageContext";

import { PageSectionTitle } from "../ui/PageSectionTitle";

const getTestNames = (t: (key: string) => string) => [
  {
    name: t("testing.core.items.i1.name"),
    standard: t("testing.core.items.i1.standard"),
  },
  {
    name: t("testing.core.items.i2.name"),
    standard: t("testing.core.items.i2.standard"),
  },
  {
    name: t("testing.core.items.i3.name"),
    standard: t("testing.core.items.i3.standard"),
  },
  {
    name: t("testing.core.items.i4.name"),
    standard: t("testing.core.items.i4.standard"),
  },
  {
    name: t("testing.core.items.i5.name"),
    standard: t("testing.core.items.i5.standard"),
  },
  {
    name: t("testing.core.items.i6.name"),
    standard: t("testing.core.items.i6.standard"),
  },
  {
    name: t("testing.core.items.i7.name"),
    standard: t("testing.core.items.i7.standard"),
  },
  {
    name: t("testing.core.items.i8.name"),
    standard: t("testing.core.items.i8.standard"),
  },
];

export default function CoreTestings() {
  const { t } = useLanguage();
  const testNames = getTestNames(t);
  const tests = testNames;

  return (
    <section id="core-testings" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <PageSectionTitle 
        title={t("testing.core.title")}
        subtitle={t("testing.core.subtitle")}
        description={t("testing.core.description")}
      />

      <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 overflow-hidden shadow-sm">
        <div className="block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.core.table.index")}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.core.table.item")}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.core.table.standard")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tests.map((item, index) => (
                <tr
                  key={index+1}
                  className={`hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {index+1}
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
    </section>
  );
}
