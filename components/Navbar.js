import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="px-4 pb-4 lg:px-0 md:flex md:justify-between md:items-center bg-gradient-to-r from-pink-200 to-purple-200 lg:bg-none">
        <div className="py-10 text-center font-mulish text-xl">
          <Link href="/" passHref>
            <div className="cursor-pointer font-black text-skin-secondary hover:text-skin-base ">
              <i aria-hidden="true" className="fas fa-star-half"></i>
              quranfan
            </div>
          </Link>
        </div>

        <div className="w-48 h-[3px] bg-gradient-to-r from-skin-first via-skin-mid to-skin-last hidden lg:inline-block rounded-lg"></div>

        <Link href="/help" passHref>
          <button className="xl:px-8 xl:py-3 px-5 py-2 text-skin-base bg-skin-fill hover:bg-skin-fill-hover hover:shadow-lg  font-mulish text-lg font-semibold tracking-wide rounded-md transition duration-100 ease-in hidden md:block cursor-pointer">
            help the community
          </button>
        </Link>
      </nav>
    </>
  )
}

export default Navbar
