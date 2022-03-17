import Head from "next/head";
import DuaList from "../components/dua/DuaList";
import RandomVersePicker from "../components/randomVersePicker";

export default function Home() {
  return (
    <>
      <Head>
        <title>quranfan | Quranic verses for your emotions</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          // content="Feelings are not always good or bad. Sometimes we feel sad, hopeless, or depressed. When this happens, it is natural to want to pray. But what verses should you recite? quranfan tells you."
          content="QuranFan is a beautiful website and has a very different theme. The basic motto behind this platform is to give users a perfect dua that correlates with their current feelings. Upon selecting a specific mood, it automatically gives you a verse from the Quran or a prayer that helps you to cope with it."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="quranfan" />
        <meta property="og:title" content="quranfan" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="favicon.png" type="image/gif" sizes="32x32" />
      </Head>
      <DuaList />
      <RandomVersePicker />
    </>
  );
}
