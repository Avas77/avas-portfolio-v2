import { allBlogs } from "@/.contentlayer/generated";
import { siteMetadata } from "@/constants/siteMetadata";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  return [
    {
      url: "https://avasbajracharya.com.np/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://avasbajracharya.com.np/about-me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://avasbajracharya.com.np/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://avasbajracharya.com.np/contacts",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://avasbajracharya.com.np/blogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    ...blogRoutes,
  ];
}
