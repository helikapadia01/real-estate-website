import "@/styles/globals.scss";
import "@/styles/reset.css";
import Script from "next/script";
import { ScrollControlProvider } from "@/context/ScrollControlContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollControlProvider>
        <Component {...pageProps} />
        <Script src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </ScrollControlProvider>
    </>
  );
}
