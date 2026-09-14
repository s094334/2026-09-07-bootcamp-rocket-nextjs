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

export default async function Home() {
  const news = await getNews();
  return (
    <>
      <Suspense fallback={<p>Loading…</p>}>
        <Marquee news={news} />
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
