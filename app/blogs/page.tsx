import BlockHeader from "@/components/BlockHeader";
import React from "react";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

const Blogs = () => {
  const blogs = allBlogs
    .filter((blog) => !blog.draft)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  // Featured Series
  const seriesBlogs = blogs
    .filter((b) => b.series === "modern-analytics-engineering")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const firstArticle = seriesBlogs[0];

  // Hide series posts from the normal list
  const independentBlogs = blogs.filter(
    (b) => b.series !== "modern-analytics-engineering"
  );

  return (
    <section className="mt-14 max-w-3xl mx-auto px-4 xl:px-0">

      <BlockHeader title="blog" classNames="hidden" />

      {/* FEATURED SERIES */}

      {firstArticle && (
        <div className="mt-10 mb-14 rounded-xl border border-neutral-800 p-8">

          <p className="text-xs uppercase tracking-widest text-blue-400">
            Featured Series
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {firstArticle.seriesTitle}
          </h2>

          <p className="mt-4 text-gray-400">
            An end-to-end analytics engineering project using Snowflake,
            dbt, dimensional modeling, and business-focused data products.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <span>{seriesBlogs.length} Articles</span>
            <span>•</span>
            <span>Beginner → Advanced</span>
          </div>

          <Link
            href={`/blogs/${firstArticle.slug}`}
            style={{ color: 'black' }}
            className="inline-block mt-8 rounded-lg bg-white px-5 py-3 font-semibold hover:opacity-90 transition"
          >
            Start Reading →
          </Link>
        </div>
      )}

      {/* ALL OTHER BLOGS */}

      <section className="mb-14 flex flex-col gap-4">

        {independentBlogs.map((blog) => (

          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
          >
            <BlogCard {...blog} />
          </Link>

        ))}

      </section>

    </section>
  );
};

export default Blogs;