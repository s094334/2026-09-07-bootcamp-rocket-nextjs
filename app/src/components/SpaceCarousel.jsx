const spaceImages = import.meta.glob(
  '../assets/space-page/carousel/*.png',
  { eager: true, import: 'default' }
)

function SpaceCarousel() {
  return (
    <section className="my-10 md:my-20 flex gap-6 overflow-x-auto overflow-hidden pl-12 md:pl-0">
      {Object.values(spaceImages).map((src, index) => (
        <img key={ index + 1 } src={ src } alt={`Carousel image${index + 1}`} />
      ))}
    </section>
  )
}

export default SpaceCarousel