import Head from "next/head";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [userTyped, setUserTyped] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ayahsFound, setAyahsFound] = useState();

  function onSubmit(e) {
    e.preventDefault();
    setSearchedWord(userTyped);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SEARCH_WORD_API}/${searchedWord}/all/en`
        );
        const json = await response.json();
        setResults(
          json.data.matches.map((item) => {
            return item;
          })
        );
        setAyahsFound(json.data.count);
      } catch (error) {
        console.log("error", error);
      }
    }
    if (searchedWord !== "") {
      fetchData();
    }
  }, [searchedWord]);

  return (
    <>
      <Head>
        <title>Search for a word in {"Qur'an"} | quranfan</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="you can now easily search for a word in Qur'an. quranfan brings you an ultimate website that gives you a platform to search in the Qur'an."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="quranfan" />
        <meta property="og:title" content="quranfan" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="favicon.png" type="image/gif" sizes="32x32" />
      </Head>
      <section className="max-w-3xl mx-auto my-10 font-mulish">
        <p className="mx-4 lg:mx-0 text-skin-base text-2xl font-black uppercase">
          Search for a word
        </p>
        <p className="mx-4 lg:mx-0 mb-6 text-skin-secondary">
          you can now search for any word in {"Qur'an"}. Note: this feature
          searches for a word from the translation and shows what it founds in
          the translation.
        </p>
        <form className="mx-4 lg:mx-0" onSubmit={onSubmit}>
          <input
            className="w-full md:max-w-3xl mb-4 py-3 pl-4 border-2 border-pink-200 outline-none focus:ring-2 focus:ring-pink-300/70 rounded-md font-lato tracking-wider placeholder-pink-300 caret-pink-400"
            type="text"
            placeholder="search in the Qur'an"
            value={userTyped}
            onChange={(e) => setUserTyped(e.target.value)}
          />
          <button
            type="submit"
            className="w-full md:max-w-3xl px-6 py-3 bg-skin-fill hover:bg-skin-fill-hover hover:shadow-2xl text-lg text-skin-base font-black tracking-wider rounded-md"
          >
            Search
          </button>
        </form>

        {searchedWord !== "" && ayahsFound > 0 ? (
          <p
            className="ml-4 lg:ml-0 mt-6 text-skin-muted font-mulish"
            key={ayahsFound}
          >
            {ayahsFound} ayahs were found with the word{" "}
            <span className="font-black text-skin-base">{`"${searchedWord}"`}</span>
          </p>
        ) : isLoading === true && searchedWord !== "" ? (
          "loading"
        ) : (
          ""
        )}

        {results.map((item) => {
          return (
            <>
              <article className="mx-4 lg:mx-0 my-10 px-6 py-4 bg-skin-light-pink text-skin-base cursor-pointer duration-200 ease-linear rounded-lg shadow-md hover:shadow-xl">
                <div>
                  <p className="font-uthmanic text-3xl">{item.surah.name}</p>
                  <p className="my-2 font-mulish text-skin-base text-lg">
                    {item.text}
                  </p>
                  <p className="text-skin-secondary text-lg">
                    {item.surah.number}:{item.numberInSurah}
                  </p>
                </div>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Search;
