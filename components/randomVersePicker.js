import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const RandomVersePicker = () => {
  const [storingSurahArabic, setStoringSurahArabic] = useState([""]);
  const [storingAyahArabic, setStoringAyahArabic] = useState([""]);
  const [storingEnglishTranslation, setEnglishTranslation] = useState([""]);

  const randomNumberGenerator = Math.floor(Math.random() * 6236) + 1; // excluding bismillah

  const arabicURL = `${process.env.NEXT_PUBLIC_ALQURAN_API_ENDPOINT}/${randomNumberGenerator}`;
  const englishURL = `${process.env.NEXT_PUBLIC_ALQURAN_API_ENDPOINT}/${randomNumberGenerator}/en.sahih`;

  const fetchAndGenerateVerse = () => {
    axios.all([axios.get(arabicURL), axios.get(englishURL)]).then(
      axios.spread((arabicURL, englishURL) => {
        setStoringSurahArabic(arabicURL.data.data.surah),
          setStoringAyahArabic(arabicURL.data.data),
          setEnglishTranslation(englishURL.data.data);
      })
    );
  };

  /*
   * for calling the api
   * when the page loads
   * if we don't use useEffect
   * there's no data shown on the page
   */

  useEffect(() => {
    axios.all([axios.get(arabicURL), axios.get(englishURL)]).then(
      axios.spread((arabicURL, englishURL) => {
        setStoringSurahArabic(arabicURL.data.data.surah),
          setStoringAyahArabic(arabicURL.data.data),
          setEnglishTranslation(englishURL.data.data);
      })
    );
  }, []);

  return (
    <>
      <section className="mx-6 mt-96 lg:mt-60 mb-40 md:mb-72 lg:max-w-4xl lg:mx-auto">
        <div className="px-6 py-12 font-uthmanic bg-skin-light-pink">
          <div className="mb-12 text-center">
            <p className="text-3xl mb-4">{storingSurahArabic.name}</p>
            <p className="font-mulish text-xl text-skin-muted">
              {storingSurahArabic.englishName} -{" "}
              {storingSurahArabic.englishNameTranslation}
            </p>
          </div>
          <p className="mb-8 text-4xl text-right leading-relaxed">
            {storingAyahArabic.text}
          </p>
          <p className="font-lato text-xl font-light tracking-wide">
            {storingEnglishTranslation.text}
          </p>

          <p className="mt-6 font-mulish font-black text-center">
            {storingSurahArabic.number} : {storingAyahArabic.numberInSurah}
          </p>

          <p className="font-mulish text-skin-muted text-center tracking-wide mt-1">
            {storingSurahArabic.revelationType} {"surah's"} verse
          </p>

          <p className="mt-1 font-lato font-black text-center text-skin-muted">
            Sajda: {storingAyahArabic.sajda ? storingAyahArabic.sajda : "none"}
          </p>
        </div>
        <button
          className="py-4 mt-8 w-full hover:bg-skin-fill-hover bg-skin-fill hover:shadow-lg text-skin-base font-mulish md:text-xl text-lg tracking-wide rounded-md cursor-pointer focus:outline-none font-black"
          onClick={fetchAndGenerateVerse}
        >
          pick a verse
        </button>
      </section>
      <p className="mx-4 font-mulish text-3xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-skin-first via-skin-mid to-skin-last tracking-wider text-center select-none animate-light">
        designed for everyone
      </p>

      <section className="mt-48 md:mt-96 mb-7 py-20 text-center bg-skin-light-pink">
        <p className="mb-8 text-3xl md:text-5xl font-mulish text-skin-base font-black">
          do you want to know
        </p>
        <p className="text-base px-4 max-w-sm md:text-2xl md:max-w-lg mx-auto text-skin-secondary">
          {" "}
          about how many times a word appeared in {"Qur'an"} just by searching
          for it?
        </p>
        <Link href="/search" passHref>
          <button className="mt-14 px-4 py-2 main-btn">
            explore more <span className="font-normal">🔥</span>
          </button>
        </Link>
        <span className="uppercase mx-2">or</span>
        <Link href="/verses">
          <a className="main-btn px-4 py-2">See Daily-life Duas</a>
        </Link>
      </section>
    </>
  );
};

export default RandomVersePicker;
