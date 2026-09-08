import Header from "../src/components/Header";
import SpaceIntro from "../src/components/SpaceIntro";
import SpaceDescription from "../src/components/SpaceDescription";
import SpaceCarousel from "../src/components/SpaceCarousel";
import SpaceFee from "../src/components/SpaceFee";
import type { NewsItem } from "./api/news";

const news: NewsItem[] = [
  { id: 1, content: "Let’s join" },
  { id: 2, content: "- 火箭隊培訓營 Rocket -" },
  { id: 3, content: "- 共同空間 Co-working space -" },
];

export default function CoworkingPage() {
  return (
    <>
      <Header news={news} />
      <SpaceIntro />
      <SpaceDescription />
      <SpaceCarousel />
      <SpaceFee />
    </>
  );
}
