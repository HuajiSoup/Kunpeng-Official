import request from "../request";

export type DownloadItem = {
  id: string;
  title: string;
  mimeType: string;
  fileName: string;
  filePath: string;
  fileSize: number;
}

export type DownloadReqData = {
  downloads: DownloadItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default async function getDownloads(): Promise<DownloadItem[]> {
  const res = await request<DownloadReqData>({
    method: "GET",
    url: "/downloads"
  });

  return res ? res.downloads : [];
}