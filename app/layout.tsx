import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "浙江鲲鹏航空技术测试验证有限公司",
  description: "专业航空技术测试验证解决方案提供商",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="text-sm">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
