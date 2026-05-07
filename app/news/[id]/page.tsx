import { NewsContent } from "@/components/news/NewsContent";
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
    {news ? <NewsContent news={normalizeNewsItem(news)} /> : (
      <div className="h-screen">
        <h2 className="text-4xl text-black text-center my-20">文章不存在！</h2>
      </div>
    )}
  </>);
}