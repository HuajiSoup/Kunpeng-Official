import request from "../request";

const fileBase = process.env.NEXT_PUBLIC_SERVER_FILE_URL || "";

export type NewsStatus = "published" | "draft";
export type NewsCategory = "company_news" | "industry_trends" | "success_stories";

export interface NewsItem {
  id: string;
  title: string;
  author: string;
  summary?: string;
  coverImage: string;
  content: string;
  status: NewsStatus;
  publishTime: string;
  category: NewsCategory;
  isHeadline: boolean;
}

export interface NewsReqData {
  news: NewsItem;
}

export interface NewsListReqData {
  news: NewsItem[];
  total: number;
  page: number;
  limit: number;
}

export interface NewsListParams {
  page?: number;
  limit?: number;
  category?: NewsCategory;
  status?: NewsStatus;
}

export interface HeadlineReqData {
  news: NewsItem | null;
  total: number;
  page: number;
  limit: number;
}

export function contentSrcPrefix(content: string): string {
  return content.replaceAll("/uploads/", `${fileBase}/uploads/`);
}

export function normalizeNewsItem(item: NewsItem): NewsItem {
  return {
    id: String(item.id),
    title: item.title,
    author: item.author,
    summary: item.summary,
    coverImage: contentSrcPrefix(item.coverImage),
    content: contentSrcPrefix(item.content),
    status: item.status,
    publishTime: item.publishTime.split("T")[0],
    category: item.category,
    isHeadline: item.isHeadline,
  };
}

export async function getHeadlineNews(): Promise<NewsItem | null> {
  const res = await request<HeadlineReqData>({
    method: "GET",
    url: "/news/headline",
  });

  return res ? res.news : null;
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  const res = await request<NewsReqData>({
    method: "GET",
    url: `/news/${id}`,
  });

  return res ? res.news : null;
}

export async function getNewsList(param: NewsListParams): Promise<[NewsItem[], number]> {
  const res = await request<NewsListReqData>({
    method: "GET",
    url: "/news",
    params: param,
  });

  return [res ? res.news : [], res ? res.total : 0];
}