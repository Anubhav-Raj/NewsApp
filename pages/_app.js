import { FavoritesProvider } from "@/firebase/FavoritesContext";
// import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> News App</title>
      </Head>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </>
  );
}
