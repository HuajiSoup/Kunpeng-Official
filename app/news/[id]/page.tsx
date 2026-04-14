import { NewsContent } from "@/components/news/NewsContent";
import NewsHero from "@/components/news/NewsHero";
import { getNewsById, normalizeNewsItem } from "@/lib/api/http/getNews";

interface NewsContentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsContentPage({ params }: NewsContentPageProps) {
  const { id } = await params;
  const news = await getNewsById(id);

  return (<>
    <NewsHero />
    {news ? <NewsContent news={normalizeNewsItem(news)} /> : <p>文章不存在！</p>}
  </>);
}