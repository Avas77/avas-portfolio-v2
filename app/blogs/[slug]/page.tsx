import { allBlogs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { siteMetadata } from "@/constants/siteMetadata";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

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
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) throw new Error(`Post not found for slug: ${params.slug}`);

  // Only build navigation if this blog belongs to a series
  const seriesBlogs = blog.series
    ? allBlogs
        .filter((b) => b.series === blog.series)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  const currentIndex = seriesBlogs.findIndex(
    (b) => b.slug === blog.slug
  );

  const previous =
    currentIndex > 0 ? seriesBlogs[currentIndex - 1] : null;

  const next =
    currentIndex < seriesBlogs.length - 1
      ? seriesBlogs[currentIndex + 1]
      : null;

  return (
    <article className="py-8 pb-20 prose text-white mx-auto mt-14 max-w-3xl text-justify px-4 sm:px-6 xl:px-0">
      <div className="mb-8 text-center">
        <time
          dateTime={blog.publishedAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(new Date(blog.publishedAt), "LLLL d, yyyy")}
        </time>

        {blog.series && (
          <p className="mt-3 text-sm text-blue-400 font-medium">
            Building Modern Analytics Engineering • Part {currentIndex + 1} of{" "}
            {seriesBlogs.length}
          </p>
        )}

        <h1 className="leading-10 sm:leading-none sm:text-3xl font-bold text-white text-[2rem] mt-4 mb-16">
          {blog.title}
        </h1>
      </div>

      <Mdx code={blog.body.code} />

      {blog.series && (
        <section className="mt-20 border-t border-neutral-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Article */}
            <div>
              {previous && (
                <Link
                  href={`/blogs/${previous.slug}`}
                  className="group block rounded-lg border border-neutral-800 p-5 transition hover:border-neutral-600 no-underline"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    ← Previous
                  </p>

                  <h3 className="m-0 text-lg font-semibold text-white group-hover:text-blue-400 transition">
                    {previous.title}
                  </h3>
                </Link>
              )}
            </div>

            {/* Next Article */}
            <div>
              {next && (
                <Link
                  href={`/blogs/${next.slug}`}
                  className="group block rounded-lg border border-neutral-800 p-5 text-right transition hover:border-neutral-600 no-underline"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Next →
                  </p>

                  <h3 className="m-0 text-lg font-semibold text-white group-hover:text-blue-400 transition">
                    {next.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogLayout;