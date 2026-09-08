import type { NextApiRequest, NextApiResponse } from "next";

export type NewsItem = {
  id: number;
  content: string;
};

type ResponseData = {
  generatedAt: string;
  items: NewsItem[];
};

const news: NewsItem[] = [
  { id: 1, content: "Let’s join" },
  { id: 2, content: "- 火箭隊培訓營 Rocket -" },
  { id: 3, content: "- 共同空間 Co-working space -" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({
    generatedAt: new Date().toISOString(),
    items: news,
  });
}
