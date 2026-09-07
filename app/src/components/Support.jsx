import rocket from "../assets/rocket-page/organizer/organizer-rocket-lg-2x.png"
import hexschool from "../assets/rocket-page/organizer/organizer-hexschool-lg-2x.png"
import goodidea from "../assets/rocket-page/organizer/organizer-goodidea-lg-2x.png"
import kdan from "../assets/rocket-page/organizer/organizer-kdan-lg-2x.png"
import titan from "../assets/rocket-page/organizer/organizer-titan-lg-2x.png"
import skw from "../assets/rocket-page/organizer/organizer-skw-lg-2x.png"
import wistron from "../assets/rocket-page/organizer/organizer-wistron-lg-2x.png"

const OrganizerCard = ({ img, role, companyName }) => {
  return (
    <li>
      <div className="bg-neutral-white rounded-border-m w-[196px] h-[148px] p-4 flex items-center justify-center">
        <img
          src={ img }
          alt={`${ companyName } image`}
          className="max-w-full max-h-full"
        />
      </div>
      <h4 className="font-bold text-sm md:text-desktop-body3 mt-4">{ role }</h4>
      <p className="font-medium text-sm md:text-desktop-body3 mt-1">{ companyName }</p>
    </li>
  )
}

function Support() {
  const organizers = [
    {
      id: 1,
      img: rocket,
      role: "主辦單位",
      companyName: "火箭隊"
    },
    {
      id: 2,
      img: hexschool,
      role: "協辦單位",
      companyName: "六角學院"
    },
    {
      id: 3,
      img: goodidea,
      role: "協辦單位",
      companyName: "好想工作室"
    },
    {
      id: 4,
      img: kdan,
      role: "合作招募廠商",
      companyName: "凱鈿科技"
    },
    {
      id: 5,
      img: titan,
      role: "合作招募廠商",
      companyName: "鈦坦科技"
    },
    {
      id: 6,
      img: skw,
      role: "合作招募廠商",
      companyName: "坂和企業"
    },
    {
      id: 7,
      img: wistron,
      role: "合作招募廠商",
      companyName: "緯創資通"
    }
  ];
  return (
    <section className="flex flex-col bg-neutral-200 text-neutral-700 pl-18 relative mt-19 md:mt-31">
      <h3 className="font-bold text-mobile-h3 md:text-desktop-h3 absolute -top-3 md:-top-5">
        主辦、協辦單位
      </h3>
      <ul className="flex justify-start overflow-x-auto gap-6 pt-9 pb-4 md:pt-14 md:pb-10">
        {
          organizers.map((organizer) => {
            return <OrganizerCard key={ organizer.id } { ...organizer }/>
          })
        }
      </ul>
    </section>
  )
}

export default Support