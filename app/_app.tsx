import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollToTop from "../components/ScrollToTop";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
