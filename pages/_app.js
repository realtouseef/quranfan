import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="selection:bg-pink-400 selection:text-white">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
