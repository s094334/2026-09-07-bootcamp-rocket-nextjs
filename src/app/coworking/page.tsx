import { getNews } from "../api/news/route";
import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import SpaceIntro from "@/components/SpaceIntro";
import SpaceDescription from "@/components/SpaceDescription";
import SpaceCarousel from "@/components/SpaceCarousel";
import SpaceFee from "@/components/SpaceFee";

export const metadata: Metadata = {
  title: "共同空間",
  description: "Practicing Next.js — Co-working space",
  openGraph: { title: "共同空間" },
};

export default async function CoworkingPage() {
  const news = await getNews();

  return (
    <>
      <Marquee news={news} />
      <Header />
      <SpaceIntro />
      <SpaceDescription />
      <SpaceCarousel />
      <SpaceFee />
    </>
  );
}
