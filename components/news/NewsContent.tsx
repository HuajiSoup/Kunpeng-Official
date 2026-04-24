"use client";

import Image from "@tiptap/extension-image";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";

import { NewsItem } from "@/lib/api/http/getNews";
import { useLanguage } from "@/lib/LanguageContext";

interface NewsContentProps {
  news: NewsItem;
}

export function NewsContent({ news }: NewsContentProps) {
  const { t } = useLanguage();
  const content = generateHTML(JSON.parse(news.content), [
    StarterKit,
    Image.configure({
      HTMLAttributes: {
        class: "my-4 mx-auto",
      },
    }),
  ]);

  return (<>
      <section className="relative py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12 container min-h-screen mx-auto w-full lg:w-3/5 border-x-gray-100 border-x-2">
        <h2 className="text-5xl font-semibold text-black text-8 my-5">{news.title}</h2>
        <div className="text-base text-gray-400 my-5">
          {t("news.content.publishedOn")} {news.publishTime} <br />
          {t("news.content.author")}{news.author}
        </div>

        <article className="text-black prose-base" dangerouslySetInnerHTML={{
          __html: content
        }}></article>
      </section>
  </>);
}