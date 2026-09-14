"use client";
import { useState } from "react";
import type { NewsData } from "@/app/api/news/route";

type MarqueeProps = {
  news: NewsData;
};
export default function Marquee({ news }: MarqueeProps) {
  const [data, setData] = useState(news);

  const handleRefresh = async () => {
    const res = await fetch("/api/news");
    const newData: NewsData = await res.json();
    setData(newData);
  };

  return (
    <header className="flex justify-center py-2 font-bold [&>p]:px-4 [&>p]:py-3 text-neutral-700 whitespace-nowrap overflow-hidden">
      {data.items.map((item) => (
        <p key={item.id}>{item.content}</p>
      ))}
      <button
        className="cursor-pointer underline hover:text-neutral-500"
        type="button"
        onClick={handleRefresh}
      >
        更新
      </button>
      <p className="text-right pr-4">時間：{data.generatedAt}</p>
    </header>
  );
}
