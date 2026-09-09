import Image from "next/image";
import case1 from "../assets/rocket-page/case/case1.png";
import case2 from "../assets/rocket-page/case/case2.png";
import case3 from "../assets/rocket-page/case/case3.png";
import case4 from "../assets/rocket-page/case/case4.png";
import case5 from "../assets/rocket-page/case/case5.png";
import case6 from "../assets/rocket-page/case/case6.png";
import case7 from "../assets/rocket-page/case/case7.png";
import case8 from "../assets/rocket-page/case/case8.png";

const caseImages = [case1, case2, case3, case4, case5, case6, case7, case8];

function SuccessCase() {
  return (
    <section className="flex flex-col md:items-center mt-12 md:mt-23 mb-23 md:mb-30 gap-7 overflow-hidden">
      <h2 className="font-bold text-mobile-h2 md:text-desktop-h2 text-neutral-700 m-auto">
        成功案例
      </h2>
      <div className="grid grid-rows-2 grid-flow-col overflow-x-auto [&>img]:min-w-[240px] ml-12 md:ml-0 md:grid-cols-4 gap-x-6 gap-y-7 md:overflow-x-visible">
        {caseImages.map((image, index) => (
          <Image key={image.src} src={image} alt={`Case ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default SuccessCase;
