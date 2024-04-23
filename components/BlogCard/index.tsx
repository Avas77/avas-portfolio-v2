import { Blog } from "@/.contentlayer/generated";
import { formatDate, parseISO } from "date-fns";
import React from "react";

const BlogCard = (blog: Blog) => {
  return (
    <article className="px-6 py-4 flex flex-col gap-2 hover:bg-[#24282e]">
      <time
        dateTime={blog.publishedAt}
        className="text-base font-medium text-gray"
      >
        {formatDate(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <h3 className="text-2xl font-bold">{blog.title}</h3>
      <p className="text-gray">{blog.summary}</p>
    </article>
  );
};

export default BlogCard;
