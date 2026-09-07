import promotionImgLg from "../assets/space-page/promotion-lg.svg"
import promotionImgSm from "../assets/space-page/promotion-sm.svg"
import checkLogo from "../assets/space-page/ic-check-lg.svg"
import goToAction from "../assets/space-page/ic-go-coworking.svg"

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="snap-start w-[90%] flex-shrink-0 md:flex-1 hover:ring-2 bg-neutral-white rounded-border-l px-12 pb-12">
      <h3 className="font-bold text-desktop-body1 text-center mt-9 mb-5">
        { title }
      </h3>
      <div className="bg-neutral-200 px-10 py-5 md:p-10 text-center mb-7 max-w-[365px] w-full mx-auto">
        <span className="font-bold text-mobile-h3 md:text-desktop-h2">
          { `$ ${ price }` }
        </span>
      </div>
      <ul className="flex flex-col gap-4 max-w-[365px] w-full mx-auto">
        {
          features.map((feature, index) => (
            <li key={ index + 1 } className="flex items-center gap-3">
              <img
                src={ checkLogo }
                alt="check logo"
                className="w-7 h-7"
              />
              <span className={`mt-1 ${ feature.highlight ? "bg-[linear-gradient(to_top,var(--color-rocket-yellow)_50%,transparent_50%)]" : "" }`}>
                { feature.text }
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

function SpaceFee() {
  const plans = [
    {
      id: 1,
      title: "進駐者",
      price: "3,200 / Month",
      features: [
        { highlight: true, text: "進駐區域" },
        { highlight: false, text: "9:00-18:00 可使用" },
        { highlight: true, text: "固定座位" },
        { highlight: true, text: "專屬置物櫃" },
        { highlight: false, text: "免費無線網路" },
        { highlight: false, text: "免費咖啡茶水" },
        { highlight: false, text: "原價 | 3,500 / Month" },
      ]
    },
    {
      id: 2,
      title: "單日使用（暫不提供）",
      price: "300 / Day",
      features: [
        { highlight: false, text: "培訓區域" },
        { highlight: false, text: "9:00-18:00 可使用" },
        { highlight: false, text: "非固定座位" },
        { highlight: false, text: "共用置物櫃" },
        { highlight: false, text: "免費無線網路" },
        { highlight: false, text: "免費咖啡茶水" },
        { highlight: false, text: "原價 | 300 / Day" },
      ]
    },
  ]
  return (
    <section className="bg-space-200 pb-20 pt-9 md:pt-[141px] pl-12">
      <div className="text-neutral-700 max-w-[1076px] w-full mx-auto">
        <div className="hidden md:block relative">
          <h2 className="font-bold text-desktop-h2">
            進駐費用
          </h2>
          <img
            src={ promotionImgLg }
            alt="Promotion image"
            className="absolute -top-25 left-20"
          />
          <p className="font-normal text-desktop-body3 absolute -top-21 left-24">
            <span className="font-bold">2023 年</span>為試營運階段，進駐可享有
            <span className="font-bold">限定優惠價！</span>
          </p>
        </div>
        <div className="block md:hidden relative mb-4">
          <img src={ promotionImgSm } alt="Promotion image" />
          <div className="absolute flex flex-col top-4 left-3">
            <p className="font-normal text-sm">
              <span className="font-bold">2023 年</span>為試營運階段，進駐可享有
              <span className="font-bold">限定優惠價！</span>
            </p>
          </div>
        </div>
        <h2 className="block md:hidden font-bold text-mobile-h2 mb-1 md:mb-2">
          進駐費用
        </h2>
        <p className="font-normal text-mobile-body3 md:text-desktop-body2 pr-12">
          進駐區域共分兩區塊：<span className="font-bold">培訓區域</span> 及{" "}
          <span className="font-bold">進駐區域</span>，目前僅接受租期 1
          個月以上，單日暫不開放。
        </p>
        <div className="mt-9 mb-10 flex md:justify-center gap-6 overflow-x-auto p-2 scrollbar-none">
          {
            plans.map((plan) => {
              return <PricingCard key={ plan.id } { ...plan } />
            })
          }
        </div>
        <a
          href="#"
          className="md:max-w-[1076px] md:w-full bg-space-100 flex justify-center rounded-border-m border-2 border-neutral-700 mr-12 group relative"
        >
          <h3 className="font-bold text-mobile-h3 py-5 md:text-desktop-h3 text-neutral-700 md:py-6">
            馬上填表單！
          </h3>
          <img
            src={ goToAction }
            alt="Go button logo"
            className="hidden group-hover:block absolute right-30 bottom-2 md:right-1/3 md:bottom-4"
          />
        </a>
      </div>
    </section>

  )
}

export default SpaceFee