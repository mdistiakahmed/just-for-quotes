import type { Metadata } from "next";
import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Hilarious Jokes to Brighten Your Day | JustForQuotes",
  description:
    "Dive into our collection of hilarious jokes that will make you laugh out loud. From knock-knock jokes to puns, find the perfect joke to share and enjoy.",
  openGraph: {
    title: "Hilarious Jokes to Brighten Your Day | JustForQuotes",
    description:
      "Explore a wide range of jokes, including knock-knock jokes, one-liners, dad jokes, puns, and more. Get ready to laugh and have fun with JustForQuotes.",
    type: "website",
    locale: "en_US",
    url: `https://justforquotes.com/jokes`,
    siteName: "JustForQuotes",
    images: [
      {
        url: "jfq.png",
        width: 1200,
        height: 630,
        alt: "Funny jokes background",
      },
    ],
  },
};

export default function QuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.jokes;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
