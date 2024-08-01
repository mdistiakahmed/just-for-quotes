import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.justforquotes.com";

  const mainPages = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quotes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/jokes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/memes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/riddles`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
    {
      url: `${BASE_URL}/stories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
  ];

  const siteMapArray = [...mainPages];

  return siteMapArray;
}
