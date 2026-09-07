import no1 from "../assets/rocket-page/ic-number/ic-no.1-lg.svg"
import no2 from "../assets/rocket-page/ic-number/ic-no.2-lg.svg"
import no3 from "../assets/rocket-page/ic-number/ic-no.3-lg.svg"
import no4 from "../assets/rocket-page/ic-number/ic-no.4-lg.svg"
import no5 from "../assets/rocket-page/ic-number/ic-no.5-lg.svg"

const FaqItem = ({ numberImg, index, question, answer}) => {
  return (
    <div>
      <div className="max-w-[856px]">
        <div className={`flex gap-8 p-5 border-b-2 border-neutral-200 ${ index === 0 ? "border-t-2" : "" }`}>
          <img
            src={ numberImg }
            alt={ `No.${ index + 1 } logo` }
            className="self-start w-5 md:w-6"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-desktop-body3">
              { question }
            </p>
            <p className="font-medium text-desktop-body3">
              { answer }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutFee() {
  const faqSections = [
    {
      id: 1,
      title: "培訓費用",
      faqs: [
        {
          id: 1,
          numberImg: no1,
          question: "Q：請問參加培訓需要費用嗎？",
          answer: "A：不會有任何費用，僅需要場地費 ( $1,200 / Month )，其餘完全免費。"
        },
        {
          id: 2,
          numberImg: no2,
          question: "Q：你們不是直銷吧？",
          answer: "A：不是，不會推銷任何東西。"
        },
        {
          id: 3,
          numberImg: no3,
          question: "Q：你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？",
          answer: (
            <>
            A：其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如 <a href="https://aiworks.tw/" className="underline" target="_blank">AppWorks School</a>、<a href="https://www.programmer101.org/" className="underline" target="_blank">CMoney</a>，以及在台南的<a href="https://www.facebook.com/GoodideasStudio/" className="underline" target="_blank">好想工作室</a>。一樣也是提供<span className="font-bold">免費培訓</span>。而在高雄上，我們是第一個單位舉辦此培訓營。
            </>
          )
        }
      ]
    },
    {
      id: 2,
      title: "培訓流程",
      faqs: [
        {
          id: 1,
          numberImg: no1,
          question: "Q：那培訓的時間是多久呢？",
          answer: "A：培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或 UI 設計師"
        },
        {
          id: 2,
          numberImg: no2,
          question: "Q：那如果七個月後，可以續留嗎？",
          answer: "A：當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。"
        },
        {
          id: 3,
          numberImg: no3,
          question: "Q：你們和其他的培訓單位有什麼差異呢？",
          answer: (
            <>
            A：我們的培訓流程，主要是將學員培育成<span className="font-bold">「擁有自我解決問題的工程師」</span>，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須<span className="font-bold">了解該如何找出問題癥結點，並解決問題</span>。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。
            </>
          )
        },
        {
          id: 4,
          numberImg: no4,
          question: "Q：這麼說來，你們沒有一個完整課綱？",
          answer: (
            <>
            A：是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您<span className="font-bold">「目標」</span>，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。舉例來說，您對 web layout 沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。
            </>
          )
        },
        {
          id: 5,
          numberImg: no5,
          question: "Q：所以有很多的時間都是在自我研究技術？",
          answer: "A：是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。"
        }
      ]
    }
  ]
  return (
    <>
      <section className="flex flex-col items-center gap-12 pl-[49px] pr-[47px] mt-[90px] md:pl-0 md:pr-0 md:gap-15 md:mt-32 text-neutral-700">
      {
        faqSections.map((section) => (
          <div key={section.id}>
            <h3 className="font-bold text-mobile-h3 md:text-desktop-h3 text-neutral-700">
              { section.title }
            </h3>
            { section.faqs.map((faq, index) => (
              <FaqItem
                key={ faq.id }
                numberImg={ faq.numberImg }
                index={ index }
                question={ faq.question }
                answer={ faq.answer }
              />
            ))}
          </div>
        ))
      }
      </section>
    </>
  )
}

export default AboutFee