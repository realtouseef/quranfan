import Head from "next/head"

const about = () => {
  return (
    <>
      <Head>
        <title>About | quranfan </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Feelings are not always good or bad. Sometimes we feel sad, hopeless, or depressed. When this happens, it is natural to want to pray. But what verses should you recite? quranfan tells you."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="quranfan" />
        <meta property="og:title" content="quranfan" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="favicon.png" type="image/gif" sizes="32x32" />
      </Head>
      <main className="max-w-2xl mx-auto px-4 mt-10 text-xl font-mulish font-normal">
        <h1 className="text-3xl md:text-5xl text-skin-heading font-black opacity-80 mt-6 md:mt-10 mb-10">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-skin-first via-skin-mid to-skin-last">
            quranfan
          </span>
        </h1>
        <article className="space-y-8">
          <p>
            <span className="text-skin-secondary font-black">quranfan</span>{" "}
            wants to help people overcome their problems with the help of the
            Qur’an. When in need, read the Quranic verses.
          </p>
          <p>
            Read the surahs and aayat to get inspiration. Read the translation
            to understand the meanings.
          </p>
          <p>
            This app has been created for people who are feeling sad, depressed,
            hopeless, and need to calm down.
          </p>
          <p>
            <span className="text-skin-secondary font-black">quranfan</span>, a
            website, helps in easy access {"Al-Qur'an"} and easy choosing a
            verse of your choice, according to your mood.
          </p>
          <p>
            You can search for a word in the Qur’an as well –{" "}
            <span className="text-skin-secondary font-black">quranfan</span>{" "}
            includes all the verses of the Qur’an to make it easier for you to
            search and get accurate results.
          </p>
        </article>
      </main>
    </>
  )
}

export default about
