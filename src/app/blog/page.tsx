import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4" aria-labelledby="blog-heading">
      <h1 id="blog-heading" className="text-4xl font-bold">
        Blogs
      </h1>
      <div className="mt-8 max-w-4xl">
        <p className="mb-8 text-lg">
          Welcome to my blog! Here I share insights on front-end development,
          personal projects, and more.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="mb-4">
                <h2 className="mb-2 text-2xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="mb-3 flex items-center gap-4 text-sm text-gray-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>By {post.author}</span>
                </div>
                <p className="mb-4 text-gray-700">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
