import type { NewsData } from "@/app/api/news/route";

type MarqueeProps = {
  news: NewsData;
};
export default function Marquee({ news }: MarqueeProps) {
  return (
    <header className="flex justify-center py-2 font-bold [&>p]:px-4 [&>p]:py-3 text-neutral-700 whitespace-nowrap overflow-hidden">
      {news.items.map((item) => (
        <p key={item.id}>{item.content}</p>
      ))}
      <p className="text-right pr-4">時間：{news.generatedAt}</p>
    </header>
  );
}
