import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Arham Gill",
  description:
    "Read my latest thoughts on web development, technology, and more.",
  openGraph: {
    title: "Blog - Arham Gill",
    description:
      "Read my latest thoughts on web development, technology, and more.",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: string;
}

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: BlogPost[] = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        author: data.author,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Blog by Arham Gill
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            Web Development | Artificial Intelligence
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Cover Image - Fixed width, maintains aspect ratio */}
              <div className="flex-shrink-0 w-full md:w-64">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={256}
                  height={144}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <time className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl md:text-2xl font-bold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
