import type { Metadata } from "next";
import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export const metadata: Metadata = {
  title:
    "Memes - Explore the Best Funny, Happy Birthday, Cat, Thumbs Up, and Drake Memes | JustForQuotes.com",
  description:
    "Discover the ultimate collection of memes at JustForQuotes.com. From hilarious funny memes to heartwarming happy birthday memes, adorable cat memes, classic thumbs up memes, and iconic Drake memes, we have it all. Dive into the world of memes and share the laughter with your friends.",
  openGraph: {
    title:
      "Memes - Explore the Best Funny, Happy Birthday, Cat, Thumbs Up, and Drake Memes | JustForQuotes.com",
    description:
      "Discover the ultimate collection of memes at JustForQuotes.com. From hilarious funny memes to heartwarming happy birthday memes, adorable cat memes, classic thumbs up memes, and iconic Drake memes, we have it all. Dive into the world of memes and share the laughter with your friends.",
    type: "website",
    locale: "en_US",
    url: `https://justforquotes.com/quotes`,
    siteName: "JustForQuotes",
    images: [
      {
        url: "jfq.png",
        width: 1200,
        height: 630,
        alt: "Motivational quotes background",
      },
    ],
  },
};

export default function QuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.memes;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
