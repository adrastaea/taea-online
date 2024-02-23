import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "Thank you for visiting. This website is under construction." });

  return (
    <>
      <Head>
        <title>taea.online</title>
        <meta name="description" content="Taea's personal website and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Taea Vogel
          </h1>
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/taea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white underline"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.github.com/adrastaea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
