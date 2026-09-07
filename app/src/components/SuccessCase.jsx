const caseImages = import.meta.glob(
  '../assets/rocket-page/case/*.png',
  { eager: true, import: 'default' }
)

function SuccessCase() {
  return (
    <section className="flex flex-col md:items-center mt-12 md:mt-23 mb-23 md:mb-30 gap-7 overflow-hidden">
      <h2 className="font-bold text-mobile-h2 md:text-desktop-h2 text-neutral-700 m-auto">
        成功案例
      </h2>
      <div className="grid grid-rows-2 grid-flow-col overflow-x-auto [&>img]:min-w-[240px] ml-12 md:ml-0 md:grid-cols-4 gap-x-6 gap-y-7 md:overflow-x-visible">
        { Object.values(caseImages).map((src, index) => (
          <img key={ src } src={ src } alt={ `Case ${index + 1}` } />
        ))}
      </div>
    </section>
  )
}

export default SuccessCase