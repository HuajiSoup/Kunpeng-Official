import { useLanguage } from "@/lib/LanguageContext";
import { FileText, Download } from "lucide-react";

// wait for href
const getDownloads = (t: (key: string) => string) => [
  {
    name: t("contact.sections.downloads.items.brochure.name"),
    size: t("contact.sections.downloads.items.brochure.size"),
    action: t("contact.sections.downloads.items.brochure.action"),
    href: "#",
    icon: FileText,
    colorBg: "bg-red-100",
    colorFg: "text-red-600",
    actionIcon: Download,
  },
  {
    name: t("contact.sections.downloads.items.certificate.name"),
    size: t("contact.sections.downloads.items.certificate.size"),
    action: t("contact.sections.downloads.items.certificate.action"),
    href: "#",
    icon: FileText,
    colorBg: "bg-blue-100",
    colorFg: "text-blue-600",
    actionIcon: FileText,
  },
  {
    name: t("contact.sections.downloads.items.application.name"),
    size: t("contact.sections.downloads.items.application.size"),
    action: t("contact.sections.downloads.items.application.action"),
    href: "#",
    icon: FileText,
    colorBg: "bg-green-100",
    colorFg: "text-green-600",
    actionIcon: Download,
  },
];

export function Downloads() {
  const { t } = useLanguage();
  const downloads = getDownloads(t);

  return (<>
    <section id="downloads" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.downloads.title")}</h2>
      <div className="space-y-2.5">
        {downloads.map((item) => {
          const Icon = item.icon;
          const ActionIcon = item.actionIcon;
          return (
            <div
              key={item.name}
              className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.colorBg}`}>
                  <Icon className={`w-4 h-4 ${item.colorFg}`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.size}</p>
                </div>
              </div>
              <a
                href={item.href}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ActionIcon className="w-4 h-4" />
                <span>{item.action}</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  </>);
}