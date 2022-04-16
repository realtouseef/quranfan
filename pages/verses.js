import Head from "next/head";
import { VersesData } from "../lib/versesData";

const Verses = () => {
  return (
    <>
      <Head>
        <title>Daily-life Duas | quranfan</title>
        <meta
          name="description"
          content="Daily-life Duas that can be used to improve your daily life"
        />
      </Head>
      <main className="px-5 my-10">
        <h1 className="mb-10 space-y-2 border-b-2">
          <span className="font-bold text-3xl ">Daily-life Duas</span>
          <p className="text-lg">
            All of these Duas/verses are taken from either Hadith or Quran.
          </p>
        </h1>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VersesData &&
            VersesData.map(({ id, arabic, urdu, english }) => {
              return (
                <div
                  key={id}
                  className="bg-skin-light-pink  py-5 px-8 text-right space-y-5 rounded-md h-max"
                >
                  <p className="font-uthmanic text-2xl md:text-3xl">{arabic}</p>
                  <p className="text-lg md:text-xl">{urdu}</p>
                  <p className="text-left">{english}</p>
                </div>
              );
            })}
        </article>
      </main>
    </>
  );
};

export default Verses;
