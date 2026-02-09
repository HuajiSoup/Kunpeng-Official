"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function NewsPagination({ currentPage, totalPages, onPageChange }: NewsPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            currentPage === 1
              ? "border-blue-500/20 text-gray-400 cursor-not-allowed"
              : "border-blue-500/30 text-gray-700 hover:bg-blue-50/60 hover:border-blue-500/50"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一页</span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg border transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "border-blue-500/30 text-gray-700 hover:bg-blue-50/60 hover:border-blue-500/50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            currentPage === totalPages
              ? "border-blue-500/20 text-gray-400 cursor-not-allowed"
              : "border-blue-500/30 text-gray-700 hover:bg-blue-50/60 hover:border-blue-500/50"
          }`}
        >
          <span>下一页</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
