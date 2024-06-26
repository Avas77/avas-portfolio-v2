import { siteMetadata } from "@/constants/siteMetadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://avasbajracharya.com.np/sitemap.xml",
    host: siteMetadata.siteUrl,
  };
}
