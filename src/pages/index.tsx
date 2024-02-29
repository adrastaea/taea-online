import Head from "next/head";

import Image from "next/image";
import StyledCard from "~/components/cards";

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
            <StyledCard className="flex flex-row">
              <div className="h-48 w-48 overflow-hidden rounded-full">
                <Image src="/taea.png" alt="Taea" width={300} height={300} />
              </div>
              <div className="flex flex-auto flex-col justify-between p-4">
                <div className="flex-grow"></div>
                <div>
                  <h2 className="text-left text-5xl text-slate-900 md:text-6xl">
                    Taea Vogel
                  </h2>
                  <div className="my-2 border-t-2 border-slate-400"></div>
                  <p className="text-left text-xl text-slate-800">
                    Full stack engineer
                  </p>
                </div>
              </div>
            </StyledCard>
            <StyledCard className="flex-auto border-2 border-blue-700">
              <h1 className="flex-auto text-center text-5xl font-extrabold sm:text-[5rem]">
                Summary
              </h1>
            </StyledCard>
            <StyledCard className="flex-auto border-2 border-blue-700">
              <h1 className="text-center text-5xl font-extrabold sm:text-[5rem]">
                Skills
              </h1>
            </StyledCard>
          </div>
          <div className="flex flex-auto flex-col gap-4 border-2 border-green-700 p-4">
            <StyledCard className="flex flex-col gap-4">
              <h1 className="flex-auto text-center text-5xl font-extrabold sm:text-[5rem]">
                Cal
              </h1>
            </StyledCard>
            <StyledCard className="flex-auto">
              <h1 className="flex-auto text-center text-5xl font-extrabold sm:text-[5rem]">
                Blog
              </h1>
            </StyledCard>
          </div>
        </div>
      </main>
    </>
  );
}
