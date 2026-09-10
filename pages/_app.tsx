import type { AppProps } from "next/app";
import Head from "next/head";
import { Josefin_Sans, Noto_Sans_TC } from "next/font/google";

import "../styles/globals.css";
import Footer from "../src/components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Practicing Next.js — Bootcamp Rocket"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="火箭隊 Bootcamp Rocket"
          key="og:title"
        />
        <title>火箭隊 Bootcamp Rocket</title>
      </Head>
      <div
        className={`${josefinSans.variable} ${notoSansTC.variable} font-sans min-h-full flex flex-col`}
      >
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
