import { allBlogs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { formatDate, parseISO } from "date-fns";
import React from "react";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: blog.title };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="py-8 prose text-white mx-auto max-w-none mt-14">
      <div className="mb-8 text-center">
        <time
          dateTime={blog.publishedAt}
          className="mb-1 text-xs text-gray-600"
        >
          {formatDate(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <Mdx code={blog.body.code} />
    </article>
  );
};

export default BlogLayout;
