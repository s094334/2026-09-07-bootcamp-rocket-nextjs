import { useState } from 'react';
import backgroundImage from "../assets/rocket-page/training/training-bg.png"
import trainingFrontend from "../assets/rocket-page/training/training-img-frontend-lg.svg"
import trainingBackend from "../assets/rocket-page/training/training-img-backend-lg.svg"
import trainingUI from "../assets/rocket-page/training/training-img-ui-lg.svg"
import coachWeijie from "../assets/rocket-page/coach/coach-weijie.svg"
import coachYinmin from "../assets/rocket-page/coach/coach-yinmin.svg"
import coachJustin from "../assets/rocket-page/coach/coach-justin.svg"
import coachCasper from "../assets/rocket-page/coach/coach-casper.svg"
import callToAction from "../assets/rocket-page/ic-go-rocket.svg"

const ProgramCard = ({ title, reverse, aboutTitle, positionContent, positionHighlight, requirements, skills, img, imgAlt }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="w-full bg-neutral-white text-neutral-700 px-12 pb-[34px] pt-[50px] md:pt-16 md:pb-10 md:pr-20 md:pl-12 md:rounded-border-m border-neutral-200 border-2 relative">
      <div className="inline-block border-2 border-neutral-700 rounded-border-s shadow-[4px_4px_0px_0px_#363636] bg-neutral-white px-5 md:px-10 py-3 absolute -top-8">
        <h3 className="font-bold text-mobile-body1 md:text-desktop-body1 text-neutral-700">
          { title }
        </h3>
      </div>
      <div className={`flex flex-col-reverse items-center gap-7 md:justify-between md:gap-12 ${ reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="flex flex-col gap-8 md:gap-9 max-w-[618px]">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold border-neutral-700 text-mobile-body2 md:text-desktop-body2 border-b-3 self-start">
              { aboutTitle }
            </h3>
            <p className="font-normal text-mobile-body3 md:text-desktop-body3">
              { positionContent }
              <span className="font-bold bg-[linear-gradient(to_top,var(--color-rocket-yellow)_50%,transparent_50%)]">
                { positionHighlight }
              </span>
              。
            </p>
          </div>
          { requirements && (
            <div className="flex flex-col gap-5">
              <h3 className="font-bold border-neutral-700 text-mobile-body2 md:text-desktop-body2 border-b-3 self-start">
                應徵門檻
              </h3>
              <ol className="list-decimal list-inside [&>li]:pl-4 [&>li]:-indent-4 text-desktop-body3">
                { requirements.map((requirement, index) => <li key={ index+1 }>{ requirement }</li>) }
              </ol>
            </div>
          )}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold border-neutral-700 text-mobile-body2 md:text-desktop-body2 border-b-3 self-start">
              你會學到
            </h3>
            <ol className="list-decimal list-inside [&>li]:pl-4 [&>li]:-indent-4 text-desktop-body3">
              { skills.map((skill) => (<li key={ skill }>{ skill }</li>))}
            </ol>
          </div>
        </div>
        <img
          src={ img }
          alt={ imgAlt }
          className="max-w-[218px] md:max-w-[282px]"
        />
      </div>
    </div>
  )
};

const CoachPhoto = ({ img, imgAlt, onSelect }) => {
  return (
    <button type="button" onClick={ onSelect } className="cursor-pointer">
      <img src={ img } alt={ imgAlt }/>
    </button>
  )
}

function AboutTraining() {
  const programs = [
    {
      id: 1,
      title: "前端工程師",
      reverse: false,
      aboutTitle: "關於前端",
      positionContent: "主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為 HTML、CSS、JavaScript，",
      positionHighlight: "適合有一些 HTML、CSS、JS 基礎的學員報名",
      requirements: [
        <>會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS切版作品，請
        <span className="font-bold bg-[linear-gradient(to_top,var(--color-rocket-yellow)_50%,transparent_50%)]">
        在履歷上需附網頁切版作品</span>，Codepen、GitHub Pages 皆可。</>,
        "了解 JS 變數、陣列物件、DOM、監聽、AJAX等知識，尚未熟練也沒關係。"
      ],
      skills: [
        "網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS",
        "前端開發技能：JavaScript、TypeScript、ES6、SPA、JS plugin 整合、API 介接、NPM",
        "後端開發技能：Node.js、MongoDB、heroku、express、JWT",
        "JS 框架：React(Hooks)、Vue3，會依照未來你想投入的公司進行調整",
        "程式版控：Git、GitHub、Git Flow 工作流程"
      ],
      img: trainingFrontend,
      imgAlt : "training front-end image"
    },
    {
      id: 2,
      title: "後端工程師",
      reverse: true,
      aboutTitle: "關於後端",
      positionContent: "後端工程師組主要專注為後端開發，投入後端語言為 ",
      positionHighlight: "C#、.Net，適合無程式背景的學員報名",
      skills: [
        "後端語言：C#",
        "程式架構：ASP.NET Web Form、ASP.NET MVC、Web API",
        "資料庫與雲端主機：MSSQL、Microsoft Azure"
      ],
      img: trainingBackend,
      imgAlt : "training Back-end image"
    },
    {
      id: 3,
      title: "UI 設計師",
      reverse: false,
      aboutTitle: "關於設計",
      positionContent: "主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，",
      positionHighlight: "適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名",
      skills: [
        "網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗",
        "介面繪製流程：Figma 操作、Mockup、Prototype、標註文件",
        "網頁切版技能：HTML5、CSS、Bootstrap5"
      ],
      img: trainingUI,
      imgAlt : "training UI image"
    }
  ];

  const coaches = [ 
    {
      id: 1,
      img: coachWeijie,
      imgAlt: "Weijie image",
      role: "前端教練",
      name: "廖洧杰",
      experience: [
        <>2016-2022 過往經歷：<a
                href="https://www.hexschool.com/"
                target="_blank"
                className="underline"
              >
                六角學院校長
              </a>
              、
              <a
                href="https://www.facebook.com/profile.php?id=100039975056467#"
                target="_blank"
                className="underline"
              >
                高雄火箭隊
              </a>前端教練</>,
        "2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位",
        "2013-2019 授課人數：線上+線下授課學員超過 25,000 位",
        <>2014-2019 線下授課：
              <a
                href="https://www.im.nuk.edu.tw/?page_id=95"
                target="_blank"
                className="underline"
              >
                高雄大學前端領域兼任講師
              </a></>,
        "2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統"
      ]
    },
    {
      id: 2,
      img: coachYinmin,
      imgAlt: "Yinmin image",
      role: "前端教練",
      name: "穎旻",
      experience: [
        "六角學院前端工程師",
        "六角學院前端講師",
        "金龍國小教育訓練講師",
        "國泰產險教育訓練講師"
      ]
    },
    {
      id: 3,
      img: coachJustin,
      imgAlt: "Justin image",
      role: "後端教練",
      name: "賈斯汀",
      experience: [
        "高雄市警察局縣市合併內外部整合",
        "嘉義縣警察局全球資訊網與內部知識網",
        "總統府全球資訊網系統維護及開發",
        "總統府 APP 新聞即時通系統開發",
        "金管會 EIP SSO 整合",
        "經濟部工業局電子書包加值應用計畫系統規劃、設計開發",
        "國立海生館活動與報名系統規劃開發",
        "國立海生館海洋教育網規劃開發",
        "台灣淨水器材百科商務平台規劃開發",
        "高雄市小學電子書包試行計畫",
        "屏東國立海生館活動與報名系統",
        "屏東國立海生館海洋教育網",
        "威錦水器材百科補助計畫",
        "supermediastore（美國購物網站）",
        "高雄捷運網站",
        "高雄世運志工服務系統",
        "高雄市 85 大樓招商網",
        "高雄市國稅局稅務宣導活動網站",
        "高雄市民政局業務資訊化委外作業",
        "高雄市國稅局全球資訊網",
        "高雄市府衛生局中英全球資訊網",
        "高雄市新聞處圖文影像管理系統",
        "高雄市政府文化局中英文網站",
        "屏東縣政府旅遊網",
        "屏東縣政府招商網",
        "行政院南區服務中心網站",
        "經濟部水利署南區水資源局",
        "105 年度業務及全球資訊網站維護及功能擴充計畫"
      ]
    },
    {
      id: 4,
      img: coachCasper,
      imgAlt: "Casper image",
      role: "UI 教練",
      name: "卡斯伯",
      experience: [
        "2016-2022 過往經歷：六角學院共同創辦人",
        "2016-2022 近期授課經驗：Vue 3 直播班講師、從 Figma 到 VSCode，設計做到網頁切版",
        "2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現",
        "六屆 IT 鐵人邦獲選紀錄",
        "Modern Web 研討會講者",
        "線上課程超過萬人註冊",
        "研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者",
        "2021 {Laravel x Vue} Conf 技術講者",
        "五屆 IT 鐵人賽優選",
        "技術 Blog - 卡斯伯前端"
      ]
    }
  ]

  const [selectedId, setSelectedId] = useState(coaches[0].id);

  const selectedCoach = coaches.find(
    (coach) => coach.id === selectedId
  )

  return (
    <>
      <section className="flex flex-col items-center bg-neutral-100 relative">
        <h2 className="font-bold text-mobile-h2 md:text-desktop-h2 text-neutral-700 mb-3 absolute -top-5">
          關於培訓
        </h2>
        <div className="flex justify-between shadow-[0px_2px_4px_0px_#E8E8E8] px-5 py-2 md:py-3 rounded-[50px] mt-[38px] bg-neutral-white">
          <div className="pr-3 border-r-2 border-neutral-200">
            <p className="font-bold text-sm md:text-desktop-body3 text-neutral-700">
              近期梯次
            </p>
          </div>
          <p className="hidden md:block font-medium text-desktop-body3 text-neutral-700 pl-3">
            第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
          </p>
          <p className="block md:hidden font-medium text-sm text-neutral-700 pl-3">
            第十三梯 (2023/5/8~2023/11/30)
          </p>
        </div>
        <div className="max-w-[1076px] w-full flex flex-col gap-20 mt-20">
          {
            programs.map((program)=> {
              return <ProgramCard key={ program.id } { ...program }/>
            })
          }
        </div>
        <div className="mt-10 mb-[66px] pl-[49px] md:pl-0 md:mt-16 md:mb-32">
          <h2 className="font-bold text-neutral-700 text-mobile-h3 md:text-desktop-h3">
            教練團
          </h2>
          <div className="flex gap-6 mb-7">
            {
              coaches.map((coach) => (
                <CoachPhoto
                  key={coach.id}
                  {...coach}
                  onSelect={() => setSelectedId(coach.id)}
                />
              ))
            }
          </div>
          <h3 className="font-bold text-mobile-h4 md:text-desktop-body1 mb-3">
            { selectedCoach.role } | { selectedCoach.name }
          </h3>
          <ul className="list-disc list-inside font-normal text-desktop-body3 text-neutral-700 [&>li]:pl-4 [&>li]:-indent-4">
            { selectedCoach.experience.map((item, index) => (
              <li key={ index }>{ item }</li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="max-w-[332px] md:max-w-[1076px] w-full bg-rocket-100 flex justify-center rounded-border-m border-2 border-neutral-700 absolute -bottom-11 py-5 md:py-6 group"
        >
          <h3 className="font-bold text-mobile-h3 md:text-desktop-h3 text-neutral-700">
            馬上報名！
          </h3>
          <img
            src={ callToAction }
            alt="Go button logo"
            className="hidden group-hover:block absolute right-10 bottom-2 md:right-1/3 md:bottom-4"
          />
        </a>
      </section>
    </>
  )
}

export default AboutTraining