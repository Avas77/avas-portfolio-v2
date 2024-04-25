import BlockHeader from "@/components/BlockHeader";
import React from "react";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

const Blogs = () => {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <section className="mt-14">
      <BlockHeader title="blog" classNames="hidden" />
      <section className="mt-4 mb-14 flex flex-col gap-4">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog._id}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Blogs;
