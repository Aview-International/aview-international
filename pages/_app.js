import { useEffect } from "react";

import "../styles/globals.css";
import "../styles/utilities.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  });

  return <Component {...pageProps} />;
}

export default MyApp;
