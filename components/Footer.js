import Link from "next/link"

const footer = () => {
  return (
    <>
      <footer className="px-6 font-mulish text-center">
        <div className="pt-28 pb-10 md:pt-60 md:pb-6">
          <section className="mb-4 text-2xl md:text-skin-secondary text-skin-base md:hover:text-skin-base font-black">
            <Link href="/about">About quranfan</Link>
          </section>
          <p className="text-sm md:text-lg font-semibold text-skin-secondary tracking-wider select-none">
            All Rights Reserved © 2022 quranfan Labs Inc.
          </p>
        </div>
      </footer>
    </>
  )
}

export default footer
