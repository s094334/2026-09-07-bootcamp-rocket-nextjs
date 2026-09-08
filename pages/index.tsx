import Header from "../src/components/Header";
import AboutRocket from "../src/components/AboutRocket";
import SuccessCase from "../src/components/SuccessCase";
import AboutTraining from "../src/components/AboutTraining";
import AboutFee from "../src/components/AboutFee";
import Support from "../src/components/Support";
import type { NewsItem } from "./api/news";

const news: NewsItem[] = [
  { id: 1, content: "Let’s join" },
  { id: 2, content: "- 火箭隊培訓營 Rocket -" },
  { id: 3, content: "- 共同空間 Co-working space -" },
];

export default function Home() {
  return (
    <>
      <Header news={news} />
      <AboutRocket />
      <SuccessCase />
      <AboutTraining />
      <AboutFee />
      <Support />
    </>
  );
}
