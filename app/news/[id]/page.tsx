import { NewsContent, NewsItem } from "@/components/news/NewsContent";
import NewsHero from "@/components/news/NewsHero";

async function fetchNews(id: string): Promise<NewsItem> {
  // const res = await fetch("");
  const news: NewsItem = {
    id: "0",
    title: `标题标题：这是第${id}篇文章`,
    author: "鲁迅",
    summary: "简介简介简介简介简介简介简介简介简介",
    coverImage: "",
    content: "<p>这里有一些测试文字，<br /></p>\
      <h1>还有大标题</h1><p>和另一些<i>斜体斜体斜体斜体斜体斜体斜体斜体斜体斜体斜体斜体斜体\
      跨行跨行跨行跨行跨行跨行跨行跨行跨行斜体斜体斜体斜体斜体斜体斜体斜体斜体</i><strong>文字</strong>\
      <br /><p>和另一些<strong>粗体文字！</strong></p>",
    status: "published",
    publishTime: "2007-01-30",
    category: "none",
    isHeadline: false,
  }

  return news;
}

interface NewsContentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsContentPage({ params }: NewsContentPageProps) {
  const { id } = await params;
  const news = await fetchNews(id);

  return (<>
    <NewsHero />
    <NewsContent news={news} />
  </>);
}