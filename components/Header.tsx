"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Menu, X, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

// 导航数据结构（使用翻译key）
const getNavItems = (t: (key: string) => string) => [
  {
    label: t("nav.home"),
    href: "/"
  },
  {
    label: t("nav.about"),
    href: "/about",
    labelKey: "nav.about",
    submenu: [
      {
        label: t("nav.aboutSubmenu.intro"),
        href: "/about#company-intro"
      },
      {
        label: t("nav.aboutSubmenu.culture"),
        href: "/about#corporate-culture"
      },
    ],
  },
  {
    label: t("nav.testing"),
    href: "/testing",
    labelKey: "nav.testing",
    submenu: [
      {
        label: t("nav.testingSubmenu.devices"),
        href: "/testing#testings-devices"
      },
      {
        label: t("nav.testingSubmenu.env"),
        href: "/testing#environment-reliability"
      },
      {
        label: t("nav.testingSubmenu.mechanical"),
        href: "/testing#mechanical-special"
      },
      {
        label: t("nav.testingSubmenu.emc"),
        href: "/testing#emc-testing"
      },
      {
        label: t("nav.testingSubmenu.core"),
        href: "/testing#core-testings"
      }
    ],
  },
  {
    label: t("nav.services"),
    href: "/services",
    labelKey: "nav.services",
    submenu: [
      {
        label: t("nav.servicesSubmenu.consulting"),
        href: "/services#consulting"
      },
      {
        label: t("nav.servicesSubmenu.process"),
        href: "/services#process-workflow"
      },
      {
        label: t("nav.servicesSubmenu.success"),
        href: "/services#success-stories"
      }
    ],
  },
  {
    label: t("nav.news"),
    href: "/news"
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
 
  const navItems = getNavItems(t);

  // 快速导航链接（静态链接）
  const quickLinks = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.testing"), href: "/testing" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchExpanded(false);
      setSearchFocused(false);
      setSearchQuery("");
    }
  };

  // 点击搜索图标展开/收起
  const handleSearchToggle = () => {
    if (searchExpanded) {
      setSearchExpanded(false);
      setSearchFocused(false);
      setSearchQuery("");
    } else {
      setSearchExpanded(true);
      // 延迟聚焦，等待动画完成
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 250);
    }
  };

  // 输入框获得焦点
  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  // 输入框失去焦点（延迟关闭快速导航，允许点击链接）
  const handleSearchBlur = (e: React.FocusEvent) => {
    setTimeout(() => {
      setSearchFocused(false);
    }, 200);
  };

  // 点击外部或按Esc键关闭搜索框
  useEffect(() => {
    if (searchExpanded) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
          setSearchExpanded(false);
          setSearchFocused(false);
          setSearchQuery("");
        }
      };

      const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSearchExpanded(false);
          setSearchFocused(false);
          setSearchQuery("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
     
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [searchExpanded]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setHoveredItem(null);
    setExpandedMobileItem(null);
   
    // 如果是锚点链接，处理平滑滚动
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
     
      if (pathname !== path) {
        // 如果不在目标页面，先导航到目标页面，再滚动
        router.push(`${path}#${hash}`);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 64;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 500);
      } else {
        // 在目标页面，平滑滚动到锚点
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 64;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
  
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    } else {
      // very normal link
      router.push(href);
    }
  };

  const handleMobileSubmenuToggle = (itemHref: string) => {
    setExpandedMobileItem(expandedMobileItem === itemHref ? null : itemHref);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {t("nav.brand")}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.submenu && setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.submenu ? (
                  <>
                    {/* 主菜单项 */}
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50 flex items-center gap-1 relative z-10"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hoveredItem === item.href ? "rotate-180" : ""}`} />
                    </Link>
                   
                    {/* 透明桥接区域 - 防止鼠标移出时菜单消失 */}
                    {hoveredItem === item.href && (
                      <div className="absolute top-full left-0 w-full h-2 bg-transparent z-20" />
                    )}
                   
                    {/* 下拉菜单 */}
                    {hoveredItem === item.href && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden z-50 transition-all duration-200 ease-out opacity-100 translate-y-0">
                        <div className="py-1">
                          {item.submenu.map((subItem, index) => (
                            <button
                              key={subItem.href}
                              onClick={() => handleLinkClick(subItem.href)}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-slate-50 transition-all duration-150 flex items-center gap-2 group/item"
                            >
                              <span className="flex-1 group-hover/item:text-blue-600 transition-colors">
                                {subItem.label}
                              </span>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50 flex items-center gap-1 relative z-10"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language & SearchBar Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50"
                aria-label="Language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language === "zh" ? t("common.language.zh") : "EN"}</span>
              </button>
              {languageMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLanguageMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
                    <button
                      onClick={() => {
                        setLanguage("zh");
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === "zh"
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {t("common.language.zh")}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === "en"
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      English
                    </button>
                  </div>
                </>
              )}
            </div>
            {/* Search Button */}
            <div className="hidden sm:block relative" ref={searchContainerRef}>
              <div className="flex items-center">
                {/* 搜索图标按钮 */}
                <button
                  onClick={handleSearchToggle}
                  className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50 flex-shrink-0"
                  aria-label={t("nav.search")}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence>
                {searchExpanded &&
                  <div
                  className="absolute right-0 top-[150%]"
                  >
                    {/* 展开的搜索框（在输入框正下方） */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{duration: 0.2}}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-2 ml-2">
                        <form onSubmit={handleSearch} className="flex items-center gap-2">
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={handleSearchFocus}
                            onBlur={handleSearchBlur}
                            placeholder={t("search.placeholder")}
                            className="w-[280px] px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 shrink-0 bg-blue-500/80 text-white text-sm rounded-lg hover:bg-blue-500/90 transition-colors font-medium"
                          >
                            {t("search.button")}
                          </button>
                        </form>
                      </div>
                    </motion.div>
                 
                    {/* 快速导航面板（在输入框更下方） */}
                    {searchFocused && searchExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 w-[360px] bg-white/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
                      >
                        <div className="p-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">
                            {t("search.quickNav")}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                  setSearchExpanded(false);
                                  setSearchFocused(false);
                                  setSearchQuery("");
                                }}
                                className="px-3 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent rounded-lg transition-all duration-200"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                }
              </AnimatePresence>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              {t("nav.contactUs")}
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (!mobileMenuOpen) {
                  setExpandedMobileItem(null);
                }
              }}
              aria-label={t("nav.menu")}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 transition-all duration-200 ease-out">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.submenu ? (
                    <>
                      {/* 移动端父菜单项（带手风琴功能） */}
                      <button
                        className="w-full px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors flex items-center justify-between group"
                        onClick={() => handleMobileSubmenuToggle(item.href)}
                      >
                        <span className="group-hover:text-gray-900">{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${
                            expandedMobileItem === item.href ? "rotate-180 text-gray-600" : ""
                          }`}
                        />
                      </button>
                     
                      {/* 移动端子菜单（手风琴展开） */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedMobileItem === item.href ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-6 pr-4 py-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.href}
                              onClick={() => handleLinkClick(subItem.href)}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors active:bg-gray-100"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
             
              {/* 移动端底部操作区 */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                {/* 移动端语言切换 */}
                <div className="flex items-center space-x-2 px-4">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <button
                    onClick={() => {
                      setLanguage("zh");
                      setLanguageMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                      language === "zh"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLanguageMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                      language === "en"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    English
                  </button>
                </div>

                    {t("common.language.zh")}
                <div className="flex items-center space-x-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (searchQuery.trim()) {
                        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setMobileMenuOpen(false);
                        setSearchQuery("");
                      }
                    }}
                    className="flex items-center gap-2 w-full"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("search.placeholder")}
                      className="grow shrink min-w-0 px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500/80 text-white text-sm rounded-lg hover:bg-blue-500/90 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                <Link
                  href="/contact"
                  className="flex grow shrink-0 items-center justify-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.contactUs")}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
