import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="description" content="Practicing Next.js — 404 Not found" />
        <title>404 找不到頁面</title>
      </Head>
      <div>
        <h2 className="font-bold text-mobile-h2 md:text-desktop-h2 text-center pt-10">
          404 找不到頁面
        </h2>
        <Link href="/" className="text-center">
          <h3 className="font-bold text-mobile-h3 py-5 md:text-desktop-h3 text-neutral-700 md:py-6 hover:text-neutral-500">
            回到火箭隊首頁
          </h3>
        </Link>
      </div>
    </>
  );
}
