import type { StaticImageData } from "next/image";
import type { NewsData } from "../../pages/api/news";
import { useState } from "react";
import Link from "next/link";

import bannerBg from "../assets/banner/banner-bg.png";
import rocketLogosm from "../assets/banner/banner-logo-rocket-sm.svg";
import rocketLogolg from "../assets/banner/banner-logo-rocket-lg.svg";
import rocketBtnsm from "../assets/banner/banner-btn-rocket-sm.svg";
import rocketBtnlg from "../assets/banner/banner-btn-rocket-lg.svg";
import coworkingLogosm from "../assets/banner/banner-logo-coworking-sm.svg";
import coworkingLogolg from "../assets/banner/banner-logo-coworking-lg.svg";
import coworkingBtnsm from "../assets/banner/banner-btn-coworking-sm.svg";
import coworkingBtnlg from "../assets/banner/banner-btn-coworking-lg.svg";

type BannerMobileCardProps = {
  logoMobileImg: StaticImageData;
  btnMobileImg: StaticImageData;
  title: string;
  titleEn: string;
  link: string;
};

const BannerMobileCard = ({
  logoMobileImg,
  btnMobileImg,
  title,
  titleEn,
  link,
}: BannerMobileCardProps) => {
  return (
    <div className="pr-10">
      <div className="max-w-[294px] bg-neutral-white rounded-border-m border-2 border-neutral-300 relative">
        <Link href={link}>
          <div className="flex items-center mt-6">
            <img
              src={logoMobileImg.src}
              alt="Banner logo"
              className="ml-6 mr-2"
            />
            <h1 className="m-0 leading-none font-bold text-mobile-h1 text-neutral-700 mt-[5px]">
              {title}
            </h1>
          </div>
          <h2 className="font-bold text-mobile-h4 text-neutral-500 ml-7 mt-2 mb-6 mr-[94px] whitespace-nowrap">
            {titleEn}
          </h2>
          <img
            src={btnMobileImg.src}
            alt="Banner button"
            className="absolute -right-10 top-7"
          />
        </Link>
      </div>
    </div>
  );
};

type BannerWebCardProps = {
  logoWebImg: StaticImageData;
  btnWebImg: StaticImageData;
  title: string;
  titleEn: string;
  link: string;
  descriptions: string[];
  showDivider: boolean;
};

const BannerWebCard = ({
  logoWebImg,
  btnWebImg,
  title,
  titleEn,
  link,
  descriptions,
  showDivider,
}: BannerWebCardProps) => {
  return (
    <>
      <div className="bg-neutral-white rounded-border-l border-2 border-neutral-300 max-w-110 max-h-112 w-full relative hover:-translate-y-4 duration-500">
        <Link href={link} className="flex flex-col items-center">
          <h2 className="font-bold text-desktop-h1 text-neutral-700 absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
            {title}
          </h2>
          <h2 className="font-bold text-desktop-body1 text-neutral-500 pt-9 text-center">
            {titleEn}
          </h2>
          <img
            src={logoWebImg.src}
            alt="Rocket logo"
            className="max-w-31 mt-6 mb-4"
          />
          <div className="text-neutral-700 font-bold [&>p]:leading-others text-desktop-body2 flex flex-col items-center mb-[107px]">
            {descriptions.map((description, index) => (
              <p key={index}> # {description}</p>
            ))}
          </div>
          <img
            src={btnWebImg.src}
            alt="Rocket button"
            className="absolute -bottom-15 left-1/2 -translate-x-1/2"
          />
        </Link>
      </div>
      <span
        className={`${showDivider ? "" : "hidden"} text-neutral-700 font-bold text-desktop-h1 self-center my-[34px] ml-[82px] mr-[83px] font-display`}
      >
        X
      </span>
    </>
  );
};

type HeaderProps = {
  news: NewsData;
};

function Header({ news }: HeaderProps) {
  const [data, setData] = useState(news);

  const handleRefresh = async () => {
    const res = await fetch("/api/news");
    const newData: NewsData = await res.json();
    setData(newData);
  };

  const banners = [
    {
      id: 1,
      logoMobileImg: rocketLogosm,
      logoWebImg: rocketLogolg,
      btnMobileImg: rocketBtnsm,
      btnWebImg: rocketBtnlg,
      title: "火箭隊",
      titleEn: "Bootcamp Rocket",
      link: "/",
      descriptions: [
        "軟體工程師培訓營",
        "全程免費的扎實訓練",
        "帶你翻轉人生！",
      ],
    },
    {
      id: 2,
      logoMobileImg: coworkingLogosm,
      logoWebImg: coworkingLogolg,
      btnMobileImg: coworkingBtnsm,
      btnWebImg: coworkingBtnlg,
      title: "共同空間",
      titleEn: "Co-working Space",
      link: "/coworking",
      descriptions: [
        "超 chill 的共同工作場域",
        "餅乾、零食、咖啡應有盡有",
        "等你來一同交流成長",
      ],
    },
  ];
  return (
    <>
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
      </header>
      <section style={{ backgroundImage: `url(${bannerBg.src})` }}>
        <p className="text-right pr-4">資料產生時間：{data.generatedAt}</p>
        <div className="flex md:hidden flex-col items-center py-15 gap-[46px]">
          {banners.map((banner) => {
            return <BannerMobileCard key={banner.id} {...banner} />;
          })}
        </div>
        <div className="hidden md:flex pt-23 pb-25 justify-center items-center">
          {banners.map((banner, index) => {
            return (
              <BannerWebCard
                key={banner.id}
                {...banner}
                showDivider={index < banners.length - 1}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Header;
