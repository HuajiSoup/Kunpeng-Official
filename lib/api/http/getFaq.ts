import request from "../request";

export type FaqItem = {
  question: string;
  answer: string;
}

export type FaqReqData = {
  faqs: FaqItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default async function getFaq(): Promise<FaqItem[]> {
  const res = await request<FaqReqData>({
    method: "GET",
    url: "/faq"
  });

  return res ? res.faqs : [];
}