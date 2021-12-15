const DuaLayout = ({ children }) => {
  return (
    <>
      <main className="max-w-screen-2xl h-[400px] lg:h-[550px] bg-gradient-to-r from-pink-200 to-purple-200">
        <article className="px-6">{children}</article>
      </main>
    </>
  )
}

export default DuaLayout
