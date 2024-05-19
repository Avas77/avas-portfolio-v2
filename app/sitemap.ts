import { allBlogs } from "@/.contentlayer/generated";
import { routes as pageRoutes } from "@/constants/routes";
import { siteMetadata } from "@/constants/siteMetadata";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  const routes = pageRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes, ...blogRoutes];
}
  