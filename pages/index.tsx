import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { getNews, type NewsData } from "./api/news";
import Header from "../src/components/Header";
import AboutRocket from "../src/components/AboutRocket";
import SuccessCase from "../src/components/SuccessCase";
import AboutTraining from "../src/components/AboutTraining";
import AboutFee from "../src/components/AboutFee";
import Support from "../src/components/Support";

export const getStaticProps = (async () => {
  return { props: { news: getNews() } };
}) satisfies GetStaticProps<{
  news: NewsData;
}>;

export default function Home({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header news={news.items} />
      <AboutRocket />
      <SuccessCase />
      <AboutTraining />
      <AboutFee />
      <Support />
    </>
  );
}
