import type { Metadata, ResolvingMetadata } from "next";
import { getNews, type NewsData } from "./api/news/route";
import { Suspense } from "react";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import AboutRocket from "@/components/AboutRocket";
import SuccessCase from "@/components/SuccessCase";
import AboutTraining from "@/components/AboutTraining";
import AboutFee from "@/components/AboutFee";
import Support from "@/components/Support";

export async function generateMetadata(): Promise<Metadata> {
  const news = await getNews();

  return {
    description: news.items[1]?.content ?? "火箭隊",
  };
}

async function MarqueeSection() {
  const news = await getNews();
  return <Marquee news={news} />;
}

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <header className="flex justify-center py-2 font-bold [&>p]:px-4 [&>p]:py-3 text-neutral-700 whitespace-nowrap overflow-hidden">
            <p>Loading…</p>
          </header>
        }
      >
        <MarqueeSection />
      </Suspense>
      <Header />
      <AboutRocket />
      <SuccessCase />
      <AboutTraining />
      <AboutFee />
      <Support />
    </>
  );
}
