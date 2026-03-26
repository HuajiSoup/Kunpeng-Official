import getDownloads, { DownloadItem } from "@/api/http/getDownloads";
import { useLanguage } from "@/lib/LanguageContext";
import { FileText, Download } from "lucide-react";
import { useEffect, useState } from "react";

function DownloadItemBox({ item, t }: { item: DownloadItem; t: (key: string) => string }) {
  return (
    <div
      key={item.id}
      className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 flex-1">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-blue-100`}>
          <FileText className={`w-4 h-4 text-blue-600`} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-0.5">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500">{item.fileSize} bytes</p>
        </div>
      </div>
      <a
        href={item.filePath}
        className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>{t("contact.sections.downloads.view")}</span>
      </a>
    </div>
  );
}

export function Downloads() {
  const { t } = useLanguage();
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);

  useEffect(() => {
    getDownloads().then((items) => {
      for (const item of items) {
        item.filePath = process.env.SERVER_FILE_URL + item.filePath.substring(item.filePath.lastIndexOf("/uploads/"));
      }
      setDownloads(items);
    })
  }, []);

  return (<>
    <section id="downloads" className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.downloads.title")}</h2>
      <div className="space-y-2.5">
        {downloads.map((item) => (
          <DownloadItemBox key={item.id} item={item} t={t} />
        ))}
      </div>
    </section>
  </>);
}