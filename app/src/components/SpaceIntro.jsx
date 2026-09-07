import mapImgLg from "../assets/space-page/map-lg.png"
import mapImgSm from "../assets/space-page/map-sm.png" 

function SpaceIntro() {
  return (
    <section className="bg-space-200 py-9 px-12 md:py-15 flex flex-col-reverse gap-5 md:flex-row md:gap-24 justify-center items-center text-neutral-700 rounded-border-xl">
      <div className="hidden bg-neutral-white rounded-border-m p-3 max-w-[636px] md:flex items-center justify-center">
        <img src={ mapImgLg} alt="Map image" />
      </div>
      <div className="md:hidden bg-neutral-white rounded-border-s p-3 max-w-[332px] flex items-center justify-center">
        <img src={ mapImgSm } alt="Map image" />
      </div>
      <div>
        <h3 className="font-bold text-mobile-body3 md:text-desktop-body2">
          About Us
        </h3>
        <h1 className="font-bold text-desktop-h3 md:text-desktop-h1 mb-4 md:mb-10">
          共同空間簡介
        </h1>
        <p className="font-normal text-mobile-body3 md:text-desktop-body2 max-w-[500px]">
          共同空間有近 100 坪的空間，在開放式的公共區域中有
          <span className="font-bold">休憩區以及舒適沙發討論區</span>
          ，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
        </p>
      </div>
    </section>
  )
}

export default SpaceIntro