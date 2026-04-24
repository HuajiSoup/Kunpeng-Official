import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect } from "react";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

interface SearchBarProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleSearch: (e: FormEvent) => void;
}

export function SearchBar({inputRef, handleSearch}: SearchBarProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const { t } = useLanguage();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = query;
    }
  }, [inputRef]);

  return (<>
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t("search.title")}
            </h1>

            {/* 大搜索框 */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t("search.placeholder")}
                  className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border-[0.5px] border-blue-500/20 rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  </>);
}