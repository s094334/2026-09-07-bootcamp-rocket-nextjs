import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { getNews, type NewsData } from "./api/news/route";
import Head from "next/head";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import AboutRocket from "@/components/AboutRocket";
import SuccessCase from "@/components/SuccessCase";
import AboutTraining from "@/components/AboutTraining";
import AboutFee from "@/components/AboutFee";
import Support from "@/components/Support";

export const getServerSideProps = (async () => {
  return { props: { news: await getNews() } };
}) satisfies GetServerSideProps<{
  news: NewsData;
}>;

export default function Home({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <meta name="description" content={news.items[1]?.content ?? "火箭隊"} />
      </Head>
      <Marquee news={news} />
      <Header />
      <AboutRocket />
      <SuccessCase />
      <AboutTraining />
      <AboutFee />
      <Support />
    </>
  );
}
