import { categoryMap } from "@/utils/constants";
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

  const quotesPages = categoryMap.quotes.map((e: any) => {
    return {
      url: `${BASE_URL}/quotes/${e.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    };
  });

  const jokesPages = categoryMap.jokes.map((e: any) => {
    return {
      url: `${BASE_URL}/jokes/${e.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    };
  });

  const memesPages = categoryMap.memes.map((e: any) => {
    return {
      url: `${BASE_URL}/memes/${e.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    };
  });

  const riddlesPages = categoryMap.riddles.map((e: any) => {
    return {
      url: `${BASE_URL}/riddles/${e.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 0.8,
    };
  });

  const siteMapArray = [
    ...mainPages,
    ...quotesPages,
    ...jokesPages,
    ...memesPages,
    ...riddlesPages,
  ];

  return siteMapArray;
}
