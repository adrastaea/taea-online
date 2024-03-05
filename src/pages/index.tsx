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
        <div className="container flex flex-row bg-gradient-to-b pl-4 pr-10 pt-16">
          <h1 className="flex-1 text-right text-5xl font-bold sm:text-6xl md:text-7xl">
            taea.
          </h1>
          <h1 className="fade-in-bottom flex-1 text-left text-5xl font-bold text-[#f796b0] sm:text-6xl md:text-7xl">
            online
          </h1>
        </div>
        <div className="container flex flex-col lg:flex-row">
          <div className="flex flex-auto flex-col gap-4 p-4">
            <StyledCard className="flex flex-row">
              <div className="h-24 w-24 overflow-hidden rounded-full xl:h-48 xl:w-48">
                <Image src="/taea.jpg" alt="Taea" width={1242} height={1331} />
              </div>
              <div className="flex flex-auto flex-col justify-between p-4">
                <h2 className="flex flex-1 items-end pb-2 text-left text-2xl text-slate-900 xl:text-5xl">
                  Taea Vogel
                </h2>
                <p className="text-md flex-1 border-t-2 border-slate-400 border-opacity-30 pt-2 text-left text-slate-800 md:text-xl">
                  Full Stack Engineer
                </p>
              </div>
            </StyledCard>
            <div className="flex flex-col gap-4 xl:flex-row">
              <StyledCard
                className="flex-auto gap-4 xl:flex-1"
                title="Who Am I?"
              >
                <p className="">
                  Hi! I&apos;m Taea. I&apos;m a full stack engineer with a
                  passion for the intersection of software and hardware. I
                  graduated from The Ohio State University with a degree in
                  Mechanical Engineering in 2020 with a focus in Computer Aided
                  Design. In every role I&apos;ve ever had, I have found a way
                  to raise the level of everyone around me with the software
                  tools I build. I love learning new tech, and pride myself on
                  being the fullest of full stack engineers from hardware, to
                  web apps, databases, CI/CD, backend systems, embedded systems,
                  and beyond.
                </p>
              </StyledCard>
              <StyledCard
                className="flex-auto xl:flex-1"
                title="What Am I Good At?"
              >
                <SkillsTable
                  skills={
                    new Map([
                      ["Python", 5],
                      ["C/C++", 3],
                      ["TypeScript", 2],
                      ["CI/CD", 3],
                      ["Databases", 3],
                      ["Simulation/Modeling", 4],
                      ["Embedded Systems", 3],
                      ["Web Development", 2],
                      ["Qt", 5],
                      ["Git", 4],
                    ])
                  }
                />
              </StyledCard>
            </div>
            <StyledCard className="flex-auto" title="Where Have I Worked?">
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
                <li>
                  <h3 className="text-lg font-bold">
                    Technical Services Intern (Summer) / Assistant Project
                    Manager (Fall)
                  </h3>
                  <i>ENGIE</i>
                  <p>Jun 2018 - Jan 2019</p>
                </li>
                <li>
                  <h3 className="text-lg font-bold">
                    Production Engineering Intern
                  </h3>
                  <i>Precision Castparts Corporation</i>
                  <p>Jun 2017 - Dec 2017</p>
                </li>
              </ul>
            </StyledCard>
          </div>
          <div className="flex flex-auto flex-col gap-4 p-4 pt-0 lg:pl-0 lg:pt-4">
            <StyledCard
              className="flex-auto md:grow-0"
              title="What Am I Working On?"
            >
              <div className="">
                <ul>
                  <li>
                    <h3 className="text-lg font-bold">How2Meet</h3>
                    <p>
                      A lightweight, zero-signup event planning platform
                      inspired by When2Meet, and an experiment with Python web
                      frontends in NiceGUI.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-bold">taea.online</h3>
                    <p>This website! My personal website and portfolio.</p>
                  </li>
                </ul>
              </div>
            </StyledCard>
            <StyledCard
              className="flex-auto md:grow-0"
              title="What Am I Learning?"
            >
              <div className="">
                <ul>
                  <li>
                    <h3 className="text-lg font-bold">TailwindCSS</h3>
                    <p>
                      Finding my CSS Zen with Tailwind. CSS is so simple now!
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-bold">NiceGUI</h3>
                    <p>
                      A new Python GUI framework wrapping VueJS allowing Python
                      devlopers build web app front ends in Python, inject
                      custom JS, use Quasar styled components, and TailwindCSS.
                      It&apos;s a lot of fun! You can spin up simple web apps in
                      minutes, and it&apos;s a really interesting way to build
                      web apps without ever touching HTML.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-bold">TypeScript</h3>
                    <p>
                      A relic of my past building Angular apps at Nationwide in
                      2019. As a Python first developer, I never really
                      appreciated it, but now that I&apos;m building web apps
                      with React, I think I get why it&apos;s so popular.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-bold">React</h3>
                    <p>
                      This website is intended to basically be my React
                      playground. At Superpedestrian, we built our web apps with
                      React, and while it wasn&apos;t a focus of my team, I
                      would sometimes spend some time debugging it when I came
                      across a bug in order to write a good bug ticket. My goal
                      is to be as good with it as I am with Qt.
                    </p>
                  </li>
                </ul>
              </div>
            </StyledCard>
            <StyledCard
              className="flex-auto md:flex-grow"
              title="What Am I Reading?"
            >
              <div className="">
                <ul>
                  <li>
                    <h3 className="text-lg font-bold">
                      Designing Data-Intensive Applications
                    </h3>
                    <p>
                      Absolute eye opener of a book. I picked this up in Jan
                      2024 to try to upskill between jobs. I knew a fair bit of
                      the concepts from my minor classes at OSU, and keeping up
                      with the industry, but the depth of the material in this
                      has been super interesting. I&apos;m about 1/2 way through
                      and hope to post a review soon.
                    </p>
                  </li>
                </ul>
              </div>
            </StyledCard>
          </div>
        </div>
      </main>
    </>
  );
}
