import restSpace from "../assets/space-page/intro-rest-lg.png"
import discussSpace from "../assets/space-page/intro-discuss-lg.png"
import workSpace from "../assets/space-page/intro-workspace-lg.png"
import coffeeLogo from "../assets/space-page/ic-coffee-lg.svg"
import wifiLogo from "../assets/space-page/ic-wifi-lg.svg"
import chairLogo from "../assets/space-page/ic-chair-lg.svg"
import chatLogo from "../assets/space-page/ic-chat-lg.svg"
import trafficLogo from "../assets/space-page/ic-traffic-lg.svg"
import foodLogo from "../assets/space-page/ic-food-lg.svg"

const AreaFeature = ({ reverse, img, title, description }) => {
  return (
    <div className={`flex flex-col ${ reverse ? "md:flex-row-reverse" : "md:flex-row" } justify-center items-center gap-4 md:gap-10`}>
      <img
        src={ img }
        alt={`${ title } image`}
        className="min-w-[332px] md:max-w-[526px] flex-1"
      />
      <div className="md:max-w-[494px] flex flex-col gap-2 md:gap-5 flex-1 w-full">
        <h3 className="font-bold text-mobile-body1 md:text-desktop-body1">
          \ { title } /
        </h3>
        <p className="text-neutral-600">
          { description }
        </p>
      </div>
    </div>
  )
}

const ServiceFeature = ({ img, title, description }) => {
  return (
    <div className="flex items-start md:flex-col md:items-center gap-6 md:px-12">
      <img
        src={ img }
        alt={ `${ title } logo` }
        className="max-w-[48px] md:max-w-[120px] text-left"
      />
      <div className="flex flex-col md:items-center gap-2 w-full">
        <h4 className="font-bold text-mobile-body2">{ title }</h4>
        <p className="font-normal md:text-center text-neutral-600 text-sm">
          { description }
        </p>
      </div>
    </div>
  )
}

function SpaceDescription() {
  const areas = [
    {
      id: 1,
      reverse: false,
      img: restSpace,
      title: "很 chill 的休憩區",
      description: (<>我們貼心提供{" "}
        <span className="font-bold">飲水機、冰箱、微波爐、果汁機、膠囊咖啡機</span>{" "}
        及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己
        chill 一下轉換心情！</>)
    },
    {
      id: 2,
      reverse: true,
      img: discussSpace,
      title: "舒適沙發討論區",
      description: "如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！"
    },
    {
      id: 3,
      reverse: false,
      img: workSpace,
      title: "進駐者區域",
      description: (<>我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。我們相信，一個好的環境能夠激發創意，促進專業能力的提升。<br /><br />
      我們希望將這樣的場域擴展至高雄，誠摯地邀請您加入我們，一起為開發者打造一個交流與學習的樂園，讓大家在這裡彼此成長，共同推動科技產業的進步。
      </>)
    }
  ]
  const services = [
    {
      id: 1,
      img: coffeeLogo,
      title: "咖啡、茶水",
      description: "飲水機、冰箱、微波爐、果汁機、膠囊咖啡機及不定時茶包及小餅乾零食。"
    },
    {
      id: 2,
      img: wifiLogo,
      title: "超快速網路",
      description: "使用 Wifi Mesh，讓你在場域中都有順暢的網路。"
    },
    {
      id: 3,
      img: chairLogo,
      title: "舒服的桌椅",
      description: "白色辦公桌設計簡潔大方，搭配上人體工學椅，讓您的身體在長時間辦公後仍能保持舒適。"
    },
    {
      id: 4,
      img: chatLogo,
      title: "與火箭隊培訓營交流",
      description: "進駐者能夠與開發團隊暢通無阻地交流，共同分享各自的專業知識和經驗。"
    },
    {
      id: 5,
      img: trafficLogo,
      title: "便捷的交通",
      description: "共享空間位於捷運信義國小站附近，為您提供極佳的交通便利性。"
    },
    {
      id: 6,
      img: foodLogo,
      title: "超多美食在附近",
      description: "無論你要日式、西式、台式，各種美食應有盡有。"
    },
  ]
  return (
    <section className="pt-20 text-neutral-700 flex flex-col px-12 max-w-[1076px] w-full mx-auto">
      <h2 className="font-bold text-mobile-h2 md:text-desktop-h2 text-center">
        場域說明
      </h2>
      <h3 className="font-bold text-mobile-h4 w-fit md:text-desktop-h4 bg-[linear-gradient(to_top,var(--color-rocket-yellow)_50%,transparent_50%)] leading-none my-4 md:mt-15 md:mb-6">
        #硬體
      </h3>
      <div className="flex flex-col gap-9">
        { areas.map((area) => {
          return <AreaFeature key={ area.id } { ...area } />})
        }
        <div className="pt-2 md:pt-10 text-neutral-700">
          <h3 className="font-bold text-mobile-h4 w-fit md:text-desktop-h4 bg-[linear-gradient(to_top,var(--color-rocket-yellow)_50%,transparent_50%)] leading-none my-4 md:mb-6">
            #服務
          </h3>
          <div className="flex flex-col gap-7 pt-3 md:grid md:grid-cols-3 md:justify-items-center">
            { services.map((service) => {
              return <ServiceFeature key={ service.id } { ...service }/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpaceDescription