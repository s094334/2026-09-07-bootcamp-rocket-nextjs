import type { Metadata } from "next";
import { Josefin_Sans, Noto_Sans_TC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../styles/globals.css";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "火箭隊 Bootcamp Rocket",
  description: "Practicing Next.js — Bootcamp Rocket",
  openGraph: { title: "火箭隊 Bootcamp Rocket" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="min-h-full">
        <div
          className={`${josefinSans.variable} ${notoSansTC.variable} font-sans min-h-full flex flex-col`}
        >
          {children}
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
