import Head from "next/head";

const donation = () => {
  return (
    <>
      <Head>
        <title>Help for the cause of Good | quranfan</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="quranfan is a small team of devs who are aimed to give the muslim ummah a platform to get access to the Qur'anic verses for free. You can get the donation details from this page."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="quranfan" />
        <meta property="og:title" content="quranfan" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="favicon.png" type="image/gif" sizes="512x512" />
      </Head>
      <h1 className="max-w-2xl mx-auto mt-12 mb-6 px-4 text-transparent bg-clip-text bg-gradient-to-r from-skin-first via-skin-mid to-skin-last text-3xl md:text-5xl font-black ">
        Help the quranfan fam
      </h1>
      <section className="max-w-2xl mx-auto px-4 text-xl tracking-wide leading-relaxed font-mulish select-none space-y-8">
        <article>
          <span className="text-skin-secondary">
            Prophet Muhammad (SAWW) said:{" "}
          </span>
          {"‘When"} a man dies, his deeds come to an end except for three
          things: Sadaqah Jariyah; knowledge which is beneficial, or a virtuous
          descendant who prays for {"him'"} –{" "}
          <span className="text-skin-muted">(Muslim)</span>.
        </article>
        <article>
          Support a platform that is designed to help Muslims in need
          spiritually by learning and getting closer to the Almighty creator
          Allah (SWT) and his book; the {"Qur'an"}.
        </article>
        <article>
          By helping, you support a simple and accessible way to learning and
          understanding Islam.
        </article>
        <article>Below are the details:</article>
        <section className="text-center space-y-4">
          <article>
            <p className="text-center text-skin-secondary">For Pakistanis</p>
            <p>
              <span className="text-skin-muted">Easypaisa: </span>+923445862108
            </p>
            <p>
              <span className="text-skin-muted">NayaPay: </span> 0311-9996341
            </p>
          </article>
          <article>
            <p className="text-center text-skin-secondary">Through Bank</p>
            <p>
              <span className="text-skin-muted">Account Number: </span>
              20060095006847013
            </p>
            <p>
              <span className="text-skin-muted">Account Holder Name: </span>
              Touseef Ur Rehman
            </p>
            <p>
              <span className="text-skin-muted">Bank Name: </span>Bank AL-Habib
            </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default donation;
