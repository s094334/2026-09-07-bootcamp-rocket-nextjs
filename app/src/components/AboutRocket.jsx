import aboutFrontend from '../assets/rocket-page/about/about-rocket-frontend.svg'
import aboutBackend from '../assets/rocket-page/about/about-rocket-backend.svg'
import aboutUI from '../assets/rocket-page/about/about-rocket-ui.svg'

const PositionCard = ({ title, skills, enTitle, imgUrl, imgAlt }) => {
  return (
    <div className="flex flex-col md:flex-row self-start bg-neutral-white rounded-border-l md:max-w-[636px] w-full py-4 md:py-9 md:gap-26">
      <div className="ml-5 md:ml-9 flex flex-col flex-1 justify-between gap-2 md:gap-3">
        <h2 className="font-bold text-mobile-h3 md:text-desktop-h3 text-neutral-700">
          { title }
        </h2>
        <ul className="font-bold flex items-center text-xs md:text-desktop-body3 gap-[10px] [&>li]:text-rocket-400 [&>li]:border-rocket-400 [&>li]:border-2 [&>li]:rounded-[20px] [&>li]:py-2 [&>li]:px-4 flex-wrap">
          { skills.map((skill) => (<li key={ skill }>{ skill }</li>))}
        </ul>
        <h3 className="font-bold text-mobile-body1 md:text-desktop-body1 text-neutral-500 mt-auto">
          { enTitle }
        </h3>
      </div>
      <div className="max-w-full h-[60px] mt-34 mx-5 md:mt-0 md:ml-0 md:w-[169px] md:h-[208px] bg-neutral-200 rounded-border-l md:mr-9 relative">
        <img
          src={ imgUrl }
          alt={ imgAlt }
          className="md:max-w-[164px] absolute left-1/2 -translate-x-1/2 bottom-3 md:-left-1/4 md:bottom-6 md:translate-0"
        />
      </div>
    </div>
  )
}

function AboutRocket() {
  const positions = [
    {
      id: 1,
      title: "前端工程師",
      skills: ["HTML", "CSS", "JavaScript"],
      enTitle: "Front-end engineer",
      imgUrl: aboutFrontend,
      imgAlt: "Front-end engineer image"
    },
    {
      id: 2,
      title: "後端工程師",
      skills: ["C#", ".Net"],
      enTitle: "Back-end engineer",
      imgUrl: aboutBackend,
      imgAlt: "Back-end engineer image"
    },{
      id: 3,
      title: "UI 設計師",
      skills: ["Figma", "HTML", "CSS"],
      enTitle: "UI designer",
      imgUrl: aboutUI,
      imgAlt: "UI designer image"
    }
  ];
  return (
    <>
      <section className="bg-rocket-100 rounded-border-xl px-12 py-9 md:flex md:max-h-[712px] justify-center md:py-15 m-auto md:justify-around md:gap-5">
        <div className="text-neutral-700">
          <h3 className="font-bold text-mobile-body3 md:text-desktop-body2">
            About Rocket
          </h3>
          <h2 className="font-bold text-mobile-h1 md:text-desktop-h1">
            什麼是火箭隊
          </h2>
          <div className="text-mobile-body3 md:text-desktop-body2 font-normal mt-4 mb-4 md:mt-10 md:max-w-[526px] flex flex-col gap-6 md:gap-[30px]">
            <p>
              火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI
              設計師職缺而設。為期<span className="font-bold">七個月的免費課程</span>
              ，學員全程參與，<span className="font-bold">僅需支付場地費</span>。
            </p>
            <p>
              火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 overflow-y-auto scrollbar-none">
        {
          positions.map((position)=> {
            return <PositionCard key={position.id} { ...position }/>
          })
        }
        </div>
      </section>
    </>
  )
}

export default AboutRocket