import Image from "next/image";
import carousel1 from "../assets/space-page/carousel/carousel1-lg.png";
import carousel2 from "../assets/space-page/carousel/carousel2-lg.png";
import carousel3 from "../assets/space-page/carousel/carousel3-lg.png";
import carousel4 from "../assets/space-page/carousel/carousel4-lg.png";
import carousel5 from "../assets/space-page/carousel/carousel5-lg.png";
import carousel6 from "../assets/space-page/carousel/carousel6-lg.png";
import carousel7 from "../assets/space-page/carousel/carousel7-lg.png";
import carousel8 from "../assets/space-page/carousel/carousel8-lg.png";

const spaceImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
];

function SpaceCarousel() {
  return (
    <section className="my-10 md:my-20 flex gap-6 overflow-x-auto overflow-hidden pl-12 md:pl-0">
      {spaceImages.map((image, index) => (
        <Image key={image.src} src={image} alt={`Carousel image${index + 1}`} />
      ))}
    </section>
  );
}

export default SpaceCarousel;
