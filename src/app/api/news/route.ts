export type NewsItem = {
  id: number;
  content: string;
};

export type NewsData = {
  generatedAt: string;
  items: NewsItem[];
};

const news: NewsItem[] = [
  { id: 1, content: "Let’s join" },
  { id: 2, content: "- 火箭隊培訓營 Rocket -" },
  { id: 3, content: "- 共同空間 Co-working space -" },
];

const MANUAL_DELAY_MS = 2000;

export async function getNews(): Promise<NewsData> {
  await new Promise((resolve) => setTimeout(resolve, MANUAL_DELAY_MS));

  return {
    generatedAt: new Date().toISOString(),
    items: news,
  };
}

export async function GET(request: Request) {
  Response.json(await getNews());
}
