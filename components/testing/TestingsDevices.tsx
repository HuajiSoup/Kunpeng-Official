"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { PageSectionTitle } from "../ui/PageSectionTitle";


const getDeviceTestings = (t: (key: string) => string): {field: string, standard: string, content: string}[] => [
  {
    field: t("testing.devices.items.i1.field"),
    standard: "RTCA DO-160G",
    content: t("testing.devices.items.i1.content"),
  },
  {
    field: t("testing.devices.items.i2.field"),
    standard: t("testing.devices.items.i2.standard"),
    content: t("testing.devices.items.i2.content"),
  },
  {
    field: t("testing.devices.items.i3.field"),
    standard: t("testing.devices.items.i3.standard"),
    content: t("testing.devices.items.i3.content"),
  },
  {
    field: t("testing.devices.items.i4.field"),
    standard: "GJB 151B-2013",
    content: t("testing.devices.items.i4.content"),
  },
  {
    field: t("testing.devices.items.i5.field"),
    standard: t("testing.devices.items.i5.standard"),
    content: t("testing.devices.items.i5.content"),
  },
  {
    field: t("testing.devices.items.i6.field"),
    standard: t("testing.devices.items.i6.standard"),
    content: t("testing.devices.items.i6.content"),
  },
  {
    field: t("testing.devices.items.i7.field"),
    standard: t("testing.devices.items.i7.standard"),
    content: t("testing.devices.items.i7.content"),
  },
  {
    field: t("testing.devices.items.i8.field"),
    standard: t("testing.devices.items.i8.standard"),
    content: t("testing.devices.items.i8.content"),
  },
  {
    field: t("testing.devices.items.i9.field"),
    standard: "RTCA DO-160G、GJB 150A",
    content: t("testing.devices.items.i9.content"),
  },
  {
    field: t("testing.devices.items.i10.field"),
    standard: t("testing.devices.items.i10.standard"),
    content: t("testing.devices.items.i10.content"),
  },
  {
    field: t("testing.devices.items.i11.field"),
    standard: "-",
    content: t("testing.devices.items.i11.content"),
  },
  {
    field: t("testing.devices.items.i12.field"),
    standard: "-",
    content: t("testing.devices.items.i12.content"),
  },
  {
    field: t("testing.devices.items.i13.field"),
    standard: "-",
    content: t("testing.devices.items.i13.content"),
  }
];

export default function TestingsDevices() {
  const { t } = useLanguage();
  const tests = getDeviceTestings(t);

  return (
    <section id="testings-devices" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <PageSectionTitle 
        title={t("testing.devices.title")}
        subtitle={t("testing.devices.subtitle")}
        description={t("testing.devices.section.description")}
      />

      <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 overflow-hidden shadow-sm">
        <div className="block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 w-1/5 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.devices.table.field")}
                </th>
                <th className="px-6 py-4 w-1/5 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.devices.table.standard")}
                </th>
                <th className="px-6 py-4 w-3/5 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {t("testing.devices.table.content")}
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
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <b>{item.field}</b>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.standard}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.content}
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
