// import { NewsItem, NewsListReqData } from "@/lib/api/http/getNews";
// import request from "@/lib/api/request";

// export async function fetchNews(config: {
//   page: number;
//   limit: number;
//   category?: string;
// }): Promise<[NewsItem[], number]> {
//   try {
//     const res = await request<NewsListReqData>({
//       url: "/news",
//       method: "GET",
//       params: {
//         page: config.page,
//         limit: config.limit,
//         category: config.category,
//       },
//     });

//     if (!res) {
//       throw new Error("Failed to fetch news");
//     }

//     return [res.news, res.total];
//   } catch (error) {
//     console.log("Error fetching news:", error);
//     return [[], 0];
//   }
// }

// export async function fetchHeadlineNews(): Promise<NewsItem | null> {
//   try {
//     const res = await request<{ headline: NewsItem }>({
//       url: "/news/headline",
//       method: "GET",
//     });

//     if (!res) {
//       throw new Error("Failed to fetch news");
//     }

//     return res.headline;
//   } catch (error) {
//     console.log("Error fetching headline news:", error);
//     return null;
//   }
// }