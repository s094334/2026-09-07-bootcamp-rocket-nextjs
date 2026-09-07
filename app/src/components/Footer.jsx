function Footer() {
  return (
    <>
      <footer>
        <div className=" hidden md:block text-desktop-body3 text-neutral-700 font-normal flex justify-self-center items-center">
          <p className="pt-9 pb-9">
            Copyright © 2023 - Created by{" "}
            <span className="font-display">六角學院 / 火箭隊培訓營</span>
          </p>
        </div>
        <div className="flex md:hidden flex-col text-neutral-700 justify-self-center items-center pt-5 pb-5">
          <p>Copyright © 2023</p>
          <p>Created by 六角學院 / 火箭隊培訓營</p>
        </div>
      </footer>
    </>
  )
}

export default Footer