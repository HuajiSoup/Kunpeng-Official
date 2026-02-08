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
  return (<>
      <section className="relative py-16 lg:py-20">
        <div className="container min-h-screen mx-auto px-5 py-10 w-full lg:w-3/5 border-x-gray-100 border-x-2">
          <h2 className="text-5xl font-semibold text-black text-8 my-5">{news.title}</h2>
          <div className="text-base text-gray-400 my-5">
            发布于 {news.publishTime} <br />
            作者：{news.author}
          </div>

          <article className="text-black prose-base" dangerouslySetInnerHTML={{
            __html: news.content
          }}></article>
        </div>
      </section>
  </>);
}