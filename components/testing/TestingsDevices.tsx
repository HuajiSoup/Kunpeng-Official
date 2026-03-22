"use client";

import { PageSectionTitle } from "../ui/PageSectionTitle";


const testings: {field: string, standard: string, content: string}[] = [
  {
    field: "适航符合性验证",
    standard: "RTCA DO-160G",
    content: "涵盖全部26个章节的测试服务，包括气候、机械、EMC及特殊环境试验，为民用飞机及通航设备适航取证提供数据支撑",
  },
  {
    field: "机载设备研发摸底",
    standard: "RTCA DO-160G（部分章节）",
    content: "在产品研发阶段提供关键项目的摸底测试，提前暴露设计缺陷，缩短取证周期",
  },
  {
    field: "军工装备环境鉴定",
    standard: "GJB 150A 系列",
    content: "模拟军用装备在贮存、运输、使用过程中可能遇到的极限环境，评估其对装备性能和结构强度的影响",
  },
  {
    field: "军用EMC鉴定",
    standard: "GJB 151B-2013",
    content: "提供CE101~CE107、RE101~RE102、CS101~CS116、RS101等全项目电磁兼容测试，满足陆、海、空三军装备电磁兼容性要求",
  },
  {
    field: "基础环境适应性",
    standard: "GB/T 2423 系列",
    content: "涵盖高温、低温、湿热、温度变化、振动、冲击等基础环境试验，适用于消费电子、工业设备、仪器仪表等各类产品",
  },
  {
    field: "民品电磁兼容",
    standard: "GB/T 9254、GB 17626 系列",
    content: "提供辐射发射、传导发射及静电、浪涌、脉冲群抗扰度测试，协助企业通过CCC、CE、FCC等认证",
  },
  {
    field: "车载电子可靠性",
    standard: "GB/T 28046 系列、ISO 16750 系列",
    content: "模拟汽车电气环境（温度、振动、电源波动）对电子模块的长期影响",
  },
  {
    field: "车载EMC",
    standard: "GB/T 18655-2018、GB/T 33014 系列",
    content: "提供传导发射、辐射发射及大电流注入（BCI）等抗扰度测试，确保车载电子设备在复杂电磁环境中稳定运行",
  },
  {
    field: "无人机/飞行汽车",
    standard: "RTCA DO-160G、GJB 150A",
    content: "针对低空飞行器特点，提供温度-高度综合试验、结冰试验、快速减压试验等专项测试",
  },
  {
    field: "机器人/智能装备",
    standard: "GB/T 2423、客户定制",
    content: "结合机器人移动与作业特性，提供多轴振动、复杂气候模拟及外壳防护等级测试",
  },
  {
    field: "EMC设计整改",
    standard: "-",
    content: "提供从PCB布局、滤波设计到整机屏蔽的EMC问题诊断与整改方案",
  },
  {
    field: "工装夹具定制",
    standard: "-",
    content: "根据产品结构与测试要求，设计并加工各类振动夹具、冲击夹具及测试转接板",
  },
  {
    field: "测试大纲编制",
    standard: "-",
    content: "协助客户编写符合适航、军标或行业标准要求的环境试验与EMC测试大纲",
  }
];

export default function TestingsDevices() {
  // const { t } = useLanguage();
  // const testNames = getTestNames(t);
  const tests = testings;

  return (
    <section id="testings-devices" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <PageSectionTitle 
        title={"设备级测试"}
        subtitle={"Device-Level Testing"}
        description={"覆盖航空机载、军用装备、民用电子、汽车电子、低空经济及工程技术服务等测试能力"}
      />

      <div className="bg-white/80 backdrop-blur-sm rounded-xl border-[0.5px] border-blue-500/20 overflow-hidden shadow-sm">
        <div className="block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {"业务方向"}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {"适用标准"}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {"业务内容"}
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
                    {item.field}
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
