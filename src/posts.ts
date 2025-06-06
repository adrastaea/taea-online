export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Welcome to My Blog",
    slug: "welcome",
    date: "2024-06-01",
    content: `This is the first post on my new blog. I'm excited to share my thoughts and projects here.\n\nStay tuned for more updates!`,
  },
  {
    title: "Building taea.online",
    slug: "building-taea-online",
    date: "2024-06-05",
    content: `In this post I talk about how I built this website using Next.js and Tailwind CSS.\n\nI hope you enjoy reading about the process as much as I enjoyed building it.`,
  },
];
