"use client";

import { useLanguage } from "@/lib/LanguageContext";

export interface NewsItem {
  id: string;
  title: string;
  author: string;
  summary: string;
  coverImage: string;
  content: string;
  status: "published" | "draft";
  publishTime: string;
  category: string;
  isHeadline: boolean;
}

interface NewsContentProps {
  news: NewsItem;
}

export function NewsContent({ news }: NewsContentProps) {
  const { t } = useLanguage();

  return (<>
      <section className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 container min-h-screen mx-auto w-full lg:w-3/5 border-x-gray-100 border-x-2">
        <h2 className="text-5xl font-semibold text-black text-8 my-5">{news.title}</h2>
        <div className="text-base text-gray-400 my-5">
          {t("news.content.publishedOn")} {news.publishTime} <br />
          {t("news.content.author")}{news.author}
        </div>

        <article className="text-black prose-base" dangerouslySetInnerHTML={{
          __html: news.content
        }}></article>
      </section>
  </>);
}