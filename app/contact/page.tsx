"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Download, FileText, ChevronDown, ChevronUp, Home, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

// FAQ 项组件
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[0.5px] border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState("contact");

  // 检测滚动位置，控制导航栏显示/隐藏
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const heroSection = document.querySelector('section[class*="h-[450px]"], section[class*="h-[550px]"]');
      const footer = document.querySelector('footer');

      if (heroSection && footer) {
        const scrollY = window.scrollY;
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        
        // 计算 Hero Section 的底部位置（相对于文档顶部）
        const heroBottom = heroRect.top + heroRect.height + scrollY;
        // 计算 Footer 的顶部位置（相对于文档顶部）
        const footerTop = footerRect.top + scrollY;
        
        // 只有在 Hero Section 下方且 Footer 上方100px之前才显示导航栏
        const shouldShow = scrollY >= heroBottom && scrollY < footerTop - 100;
        setShowSidebar(shouldShow);
      } else {
        // 如果找不到元素，默认隐藏
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 初始检查
    handleScroll();
    // 延迟检查，确保 DOM 已渲染
    setTimeout(handleScroll, 100);
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 根据滚动位置自动高亮当前部分
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = [
        { id: "contact", element: document.getElementById("contact") },
        { id: "downloads", element: document.getElementById("downloads") },
        { id: "faq", element: document.getElementById("faq") },
      ].filter(({ element }) => element !== null);

      const currentSection = sections
        .reverse()
        .find(({ element }) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100;
          }
          return false;
        });

      if (currentSection) {
        setActiveItem(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检查

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (<>
    {/* Hero Section */}
    <section className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* 科技感网格背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* 动态光晕效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 聚光灯效果 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* 面包屑导航 */}
      <div className="absolute top-6 left-0 right-0 z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-sm text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {t("nav.home")}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-white/50" />
            <span className="text-white">{t("nav.contact")}</span>
          </motion.nav>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        <TextReveal delay={0.2}>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs font-bold tracking-widest text-blue-400/80 uppercase mb-6 block"
          >
            {t("contact.hero.badge")}
          </motion.span>
        </TextReveal>
        
        <TextReveal delay={0.4}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {t("contact.hero.title")}
            </span>
          </motion.h1>
        </TextReveal>
        
        <TextReveal delay={0.6}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base lg:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </TextReveal>

        {/* 装饰性光点 */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>

    {/* Fixed Sidebar Navigation - 固定在左上角 */}
    <aside
      className={`hidden lg:block fixed left-6 top-20 z-30 transition-opacity duration-300 ${
        showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm w-[200px]">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">{t("contact.navTitle") || "导航"}</h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => handleNavClick("contact")}
              className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                activeItem === "contact"
                  ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                  : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
              }`}
            >
              {t("contact.nav.contact")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("downloads")}
              className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                activeItem === "downloads"
                  ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                  : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
              }`}
            >
              {t("contact.nav.downloads")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("faq")}
              className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                activeItem === "faq"
                  ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                  : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
              }`}
            >
              {t("contact.nav.faq")}
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    {/* Main Content - 2 Column Layout */}
    <section className="py-10 lg:py-12">
      <div 
        className="w-full px-6 sm:px-8 lg:pr-5 lg:pl-[280px]"
        ref={(el) => {
          if (el && typeof window !== 'undefined') {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/d83501ac-32d8-41d1-947c-d06d63cbda90',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/contact/page.tsx:306',message:'Layout calculation',data:{containerWidth:el.offsetWidth,windowWidth:window.innerWidth,rightPadding:window.getComputedStyle(el).paddingRight,leftPadding:window.getComputedStyle(el).paddingLeft,availableWidth:el.offsetWidth - parseFloat(window.getComputedStyle(el).paddingLeft) - parseFloat(window.getComputedStyle(el).paddingRight)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
            // #endregion
          }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 占位空间 - 移动端显示导航栏 */}
          <aside className="lg:col-span-1 lg:hidden">
            <div className="sticky top-20">
              <nav className="bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">{t("contact.navTitle") || "导航"}</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => handleNavClick("contact")}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                        activeItem === "contact"
                          ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                          : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                      }`}
                    >
                      {t("contact.nav.contact")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("downloads")}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                        activeItem === "downloads"
                          ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                          : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                      }`}
                    >
                      {t("contact.nav.downloads")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("faq")}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium border-l-2 transition-all duration-300 rounded-r-lg ${
                        activeItem === "faq"
                          ? "border-blue-500 text-blue-600 bg-blue-50/80 shadow-sm"
                          : "border-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-blue-500/50"
                      }`}
                    >
                      {t("contact.nav.faq")}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Contact Info Section */}
            <section id="contact" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.contact.title")}</h2>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {/* Address Card */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{t("contact.sections.contact.address.title")}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("contact.sections.contact.address.line1")}
                    <br />
                    {t("contact.sections.contact.address.line2")}
                  </p>
                </div>

                {/* Phone Card */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{t("contact.sections.contact.phone.title")}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("contact.sections.contact.phone.line1")}
                    <br />
                    {t("contact.sections.contact.phone.line2")}
                  </p>
                </div>

                {/* Email Card */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{t("contact.sections.contact.email.title")}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("contact.sections.contact.email.line1")}
                    <br />
                    {t("contact.sections.contact.email.line2")}
                  </p>
                </div>
              </div>

              {/* Map Visual - Placeholder Image */}
              <div className="rounded-xl overflow-hidden border-[0.5px] border-blue-500/20 shadow-sm">
                <img
                  src="https://placehold.co/1200x480/e2e8f0/475569?text=Map+Location+Image"
                  alt={t("contact.sections.contact.mapAlt")}
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* Downloads Section */}
            <section id="downloads" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.downloads.title")}</h2>
              <div className="space-y-2.5">
                {/* Download Item 1 */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                        {t("contact.sections.downloads.items.brochure.name")}
                      </h3>
                      <p className="text-xs text-gray-500">{t("contact.sections.downloads.items.brochure.size")}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t("contact.sections.downloads.items.brochure.action")}</span>
                  </a>
                </div>

                {/* Download Item 2 */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                        {t("contact.sections.downloads.items.certificate.name")}
                      </h3>
                      <p className="text-xs text-gray-500">{t("contact.sections.downloads.items.certificate.size")}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t("contact.sections.downloads.items.certificate.action")}</span>
                  </a>
                </div>

                {/* Download Item 3 */}
                <div className="group bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] transition-all duration-300">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                        {t("contact.sections.downloads.items.application.name")}
                      </h3>
                      <p className="text-xs text-gray-500">{t("contact.sections.downloads.items.application.size")}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t("contact.sections.downloads.items.application.action")}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("contact.sections.faq.title")}</h2>
              <div className="space-y-3">
                <FAQItem
                  question={t("contact.sections.faq.items.q1.question")}
                  answer={t("contact.sections.faq.items.q1.answer")}
                />
                <FAQItem
                  question={t("contact.sections.faq.items.q2.question")}
                  answer={t("contact.sections.faq.items.q2.answer")}
                />
                <FAQItem
                  question={t("contact.sections.faq.items.q3.question")}
                  answer={t("contact.sections.faq.items.q3.answer")}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </>);
}
