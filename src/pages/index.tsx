import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>taea.online</title>
        <meta
          name="description"
          content="Taea's personal website and portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="container border-2 border-red-700 p-4 pt-64 text-center text-5xl font-bold sm:text-6xl md:text-7xl">
          taea.<span className="text-red-300">online</span>
        </h1>
        <div className="container flex flex-auto flex-col border-2 border-red-700 p-4 2xl:flex-row">
          <div className="flex flex-auto flex-col gap-4 border-2 border-green-700 p-4">
            <div className="border-2 border-blue-700 p-4">
              <h1 className="text-center text-5xl font-extrabold sm:text-[5rem]">
                Profile
              </h1>
            </div>
            <div className="flex-auto border-2 border-blue-700">
              <h1 className="flex-auto text-center text-5xl font-extrabold sm:text-[5rem]">
                Summary
              </h1>
            </div>
            <div className="flex-auto border-2 border-blue-700">
              <h1 className="text-center text-5xl font-extrabold sm:text-[5rem]">
                Skills
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-2 border-green-700 p-4">
            <h1 className="flex-auto border-2 border-blue-700 p-4 text-center text-5xl font-extrabold sm:text-[5rem]">
              Cal
            </h1>
            <h1 className="flex-auto border-2 border-blue-700 p-4 text-center text-5xl font-extrabold sm:text-[5rem]">
              Blog
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
