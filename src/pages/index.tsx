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
        <div className="container flex flex-col 2xl:flex-row">
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
            <div className="flex flex-col gap-4 md:flex-row">
              <StyledCard className="gap-4 md:flex-1">
                <h3 className="text-xl font-extrabold">Who Am I?</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  dolorem quos commodi? Sed incidunt odio fuga recusandae iure
                  fugiat mollitia tenetur facere vel porro odit dolorum deleniti
                  exercitationem, ex harum, et illum. Voluptatem veritatis
                  libero optio sit ullam non praesentium?
                </p>
              </StyledCard>
              <StyledCard className="flex-auto md:flex-1">
                <SkillsTable
                  skills={
                    new Map([
                      ["Python", 5],
                      ["C/C++", 3],
                      ["TypeScript", 2],
                      ["Kubernetes", 3],
                      ["Databases", 2],
                      ["Simulation/Modeling", 4],
                    ])
                  }
                />
              </StyledCard>
            </div>
            <StyledCard className="flex-auto">
              <h1 className="text-xl font-extrabold">Where Have I Worked?</h1>
              <ul>
                <li>
                  <h3 className="text-lg font-bold">Software Engineer II</h3>
                  <i>Superpedestrian</i>
                  <p>Jan 2023 - Dec 2024</p>
                </li>
                <li>
                  <h3 className="text-lg font-bold">Software Engineer</h3>
                  <i>Superpedestrian</i>
                  <p>Aug 2021 - Jan 2023</p>
                </li>
                <li>
                  <h3 className="text-lg font-bold">Field Service Engineer</h3>
                  <i>Superpedestrian</i>
                  <p>Dec 2020 - Aug 2021</p>
                </li>
                <li>
                  <h3 className="text-lg font-bold">
                    Software Development Services Intern
                  </h3>
                  <i>Nationwide Insurance</i>
                  <p>Jun 2019 - Aug 2019</p>
                </li>
              </ul>
            </StyledCard>
          </div>
          <div className="flex flex-auto flex-col p-4 pt-0 2xl:pl-0 2xl:pt-4">
            <StyledCard className="flex-auto">
              <div className="flex flex-col gap-6">
                <div className="">
                  <h1 className="text-xl font-extrabold">
                    What Am I Working On?
                  </h1>
                  <ul>
                    <li>
                      <h3 className="text-lg font-bold">How2Meet</h3>
                      <p>
                        A lightweight, zero-signup event planning platform
                        inspired by When2Meet, and an expirement with Python web
                        frontends in NiceGUI.
                      </p>
                    </li>
                    <li>
                      <h3 className="text-lg font-bold">taea.online</h3>
                      <p>This website! My personal website and portfolio.</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-xl font-extrabold">
                    What Am I Learning?
                  </h1>
                  <ul>
                    <li>
                      <h3 className="text-lg font-bold">NiceGUI</h3>
                      <p>
                        A new Python GUI framework wrapping VueJS allowing
                        Python devlopers build web app front ends in Python,
                        inject custom JS, use Quasar styled components, and
                        TailwindCSS. It&apos;s a lot of fun! You can spin up
                        simple web apps in minutes, and it&apos;s a really
                        interesting way to build web apps without ever touching
                        HTML.
                      </p>
                    </li>
                    <li>
                      <h3 className="text-lg font-bold">Typescript</h3>
                      <p>
                        A relic of my past building Angular apps at Nationwide
                        in 2019. As a Python first developer, I never really
                        appreciated it, but now that I&apos;m building web apps
                        with React, I think I get why it&apos;s so popular.
                      </p>
                    </li>
                    <li>
                      <h3 className="text-lg font-bold">React</h3>
                      <p>
                        This website is built with React! At Superpedestrian, we
                        built our web apps with React, and while it wasn&apos;t
                        a focus of my team, I would sometimes spend some time
                        debugging it when I came across a bug in order to write
                        a good bug ticket. My goal is to be as good with it as I
                        am with Qt.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-xl font-extrabold">What Am I Reading?</h1>
                  <ul>
                    <li>
                      <h3 className="text-lg font-bold">
                        Designing Data-Intensive Applications
                      </h3>
                      <p>
                        A book about software engineering best practices and
                        principles.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </StyledCard>
          </div>
        </div>
      </main>
    </>
  );
}
