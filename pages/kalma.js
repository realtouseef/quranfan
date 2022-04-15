import Head from "next/head";
import { KalmaData } from "../lib/KalmaData";

const kalima = () => {
  return (
    <>
      <Head>
        <title>Duas after Namaz/Prayer | quranfan</title>
        <meta
          name="description"
          content="Duas that can be made after Namaz/prayer."
        />
      </Head>
      <main className="px-5 my-10">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {KalmaData &&
            KalmaData.map(({ id, arabic, urdu, english }) => {
              return (
                <div
                  key={id}
                  className="bg-skin-light-pink  py-5 px-8 text-right space-y-5 rounded-md"
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

export default kalima;
