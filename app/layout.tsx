import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <LanguageProvider>
        <main className="relative min-h-screen bg-white">
          <Header />
            {children}
          <Footer />
        </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
