import React from "react";
import { blogPosts } from "~/posts";

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="w-full snap-start bg-gray-50">
      <div className="container mx-auto flex flex-col gap-4 py-8 lg:flex-row">
        <aside className="order-2 w-full lg:order-1 lg:w-1/4 lg:pr-4">
          <div className="sticky top-0 max-h-screen overflow-y-auto p-4">
            <h2 className="mb-2 text-2xl font-bold">Blog Posts</h2>
            <ul className="space-y-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`#${post.slug}`}
                    className="text-pink-500 hover:underline"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="order-1 flex-1 lg:order-2">
          {blogPosts.map((post) => (
            <article id={post.slug} key={post.slug} className="mb-10 p-4">
              <h3 className="mb-1 text-3xl font-bold">{post.title}</h3>
              <p className="mb-4 text-sm text-gray-500">{post.date}</p>
              {post.content.split("\n\n").map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
