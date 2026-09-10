import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { getNews, type NewsData } from "./api/news";
import Head from "next/head";
import Header from "../src/components/Header";
import AboutRocket from "../src/components/AboutRocket";
import SuccessCase from "../src/components/SuccessCase";
import AboutTraining from "../src/components/AboutTraining";
import AboutFee from "../src/components/AboutFee";
import Support from "../src/components/Support";

export const getServerSideProps = (async () => {
  return { props: { news: getNews() } };
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
      <Header news={news} />
      <AboutRocket />
      <SuccessCase />
      <AboutTraining />
      <AboutFee />
      <Support />
    </>
  );
}
