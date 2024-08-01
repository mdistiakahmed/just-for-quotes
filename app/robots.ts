import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/studio",
      },
    ],
    sitemap: "https://www.justforquotes.com/sitemap.xml",
  };
}
