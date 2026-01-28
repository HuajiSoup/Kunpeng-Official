"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh");

  // 从localStorage读取保存的语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  // 保存语言设置到localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // 更新HTML lang属性
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    }
  };

  // 翻译函数
  const t = (key: string): string => {
    const { translations } = require("./translations");
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // 如果找不到翻译，返回key或中文fallback
        const zhValue = getNestedValue(translations.zh, keys);
        return zhValue || key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  // 辅助函数：获取嵌套对象的值
  const getNestedValue = (obj: any, keys: string[]): string | null => {
    let value = obj;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    return typeof value === "string" ? value : null;
  };

  // 更新HTML lang属性
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
