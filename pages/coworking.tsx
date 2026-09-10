import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getNews, type NewsData } from "./api/news";
import Head from "next/head";
import Header from "../src/components/Header";
import SpaceIntro from "../src/components/SpaceIntro";
import SpaceDescription from "../src/components/SpaceDescription";
import SpaceCarousel from "../src/components/SpaceCarousel";
import SpaceFee from "../src/components/SpaceFee";

export const getStaticProps = (async () => {
  return { props: { news: getNews() } };
}) satisfies GetStaticProps<{
  news: NewsData;
}>;

export default function CoworkingPage({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Practicing Next.js — Co-working space"
        />
        <meta property="og:title" content="共同空間" key="og:title" />
        <title>共同空間</title>
      </Head>
      <Header news={news} />
      <SpaceIntro />
      <SpaceDescription />
      <SpaceCarousel />
      <SpaceFee />
    </>
  );
}
