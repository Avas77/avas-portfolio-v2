import { allBlogs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { siteMetadata } from "@/constants/siteMetadata";
import { formatDate, parseISO } from "date-fns";
import React from "react";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`);

  const ogImage = `${siteMetadata.siteUrl}/og?title=${blog.title}`;
  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      siteName: siteMetadata.siteUrl,
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      url: "./",
      authors: siteMetadata.author,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="py-8 pb-20 prose text-white mx-auto mt-14 max-w-3xl text-justify px-4 sm:px-6 xl:px-0">
      <div className="mb-8 text-center">
        <time
          dateTime={blog.publishedAt}
          className="mb-1 text-xs text-gray-600"
        >
          {formatDate(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <h1 className="leading-10 sm:leading-none sm:text-3xl font-bold text-white text-[2rem] mb-16">
          {blog.title}
        </h1>
      </div>
      <Mdx code={blog.body.code} />
    </article>
  );
};

export default BlogLayout;
