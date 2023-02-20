import { useState, createContext, Dispatch, SetStateAction } from "react";
import StateContext from "../Components/Context/StateContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  return (
    <StateContext.Provider value={selectedCountry}>
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}

export default MyApp;
