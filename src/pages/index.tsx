import Head from "next/head";

import Image from "next/image";
import StyledCard from "~/components/cards";
import SkillsTable from "~/components/skills";

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
        <h1 className="container pt-16 text-center text-5xl font-bold sm:text-6xl md:pt-32 md:text-7xl">
          taea.<span className="text-pink-400">online</span>
        </h1>
        <div className="container flex flex-auto flex-col 2xl:flex-row">
          <div className="flex flex-auto flex-col gap-4 p-4">
            <StyledCard className="flex flex-row">
              <div className="h-24 w-24 overflow-hidden rounded-full md:h-48 md:w-48">
                <Image src="/taea.png" alt="Taea" width={300} height={300} />
              </div>
              <div className="flex flex-auto flex-col justify-between p-4">
                <div className="flex-grow"></div>
                <div>
                  <h2 className="text-left text-2xl text-slate-900 md:text-6xl">
                    Taea Vogel
                  </h2>
                  <div className="my-2 border-t-2 border-slate-400 border-opacity-30"></div>
                  <p className="text-md text-left text-slate-800 md:text-xl">
                    Full Stack Engineer
                  </p>
                </div>
              </div>
            </StyledCard>
            <StyledCard className="flex-shrink">
              <h3 className="p-4 pb-0 text-xl font-extrabold">Who Am I?</h3>
              <p className="flex-auto p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                dolorem quos commodi? Sed incidunt odio fuga recusandae iure
                fugiat mollitia tenetur facere vel porro odit dolorum deleniti
                exercitationem, ex harum, et illum. Voluptatem veritatis libero
                optio sit ullam non praesentium?
              </p>
            </StyledCard>
            <StyledCard className="flex-auto">
              <SkillsTable
                skills={
                  new Map([
                    ["Python", 5],
                    ["TypeScript", 2],
                    ["C/C++", 3],
                    ["Databases", 4],
                    ["Kubernetes", 3],
                    ["Project Management", 5],
                  ])
                }
              />
            </StyledCard>
            <StyledCard className="flex-auto">
              <h1 className="text-center text-5xl font-extrabold sm:text-[5rem]">
                Experiences
              </h1>
            </StyledCard>
          </div>
          <div className="flex flex-auto flex-col gap-4 p-4">
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
