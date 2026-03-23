"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { HomeSectionTitle } from "./ui/HomeSectionTitle";
import { ItemBox } from "./ui/ItemBox";

const getClientsItems = (t: (key: string) => string) => [
  {
    title: "天翎科",
    description: "国内首家倾转涵道翼eVTOL整机设计制造商",
  },
  {
    title: "舜宇光学",
    description: "国内领先的光学产品制造企业",
  },
  {
    title: "龙兴航电",
    description: "专注于航空电子制造的头部企业",
  },
];

export default function CoreClients() {
  const { t } = useLanguage();
  const supportItems = getClientsItems(t);

  return (
    <section id="core-clients" className="relative py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <HomeSectionTitle title={"核心客户"} desc={"服务国内头部厂商"} />

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {supportItems.map((item, index) => (
            <ItemBox
              key={index}
              fancy
              className="text-center"
            >
              {/* Logo区域 - 圆形占位符，浅灰色背景 */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-all duration-300">
                <div className="text-xl lg:text-2xl font-semibold text-gray-700 group-hover:text-white transition-colors">
                  {"U"}
                </div>
              </div>

              <h3 className="text-sm lg:text-base font-medium text-gray-900 mb-1.5 leading-tight">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500">{item.description}</p>
            </ItemBox>
          ))}
        </div>

      </div>
    </section>
  );
}
