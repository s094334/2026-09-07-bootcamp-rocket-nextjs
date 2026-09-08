import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>火箭隊 Bootcamp Rocket</title>
        <meta name="description" content="Practicing Next.js — Bootcamp Rocket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
