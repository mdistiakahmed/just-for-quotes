import type { Metadata } from "next";
import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Motivational Quotes to Inspire and Uplift | JustForQuotes",
  description:
    "Discover a vast collection of motivational quotes designed to inspire, uplift, and encourage you every day. Find your daily dose of motivation at JustForQuotes.",
  openGraph: {
    title: "Motivational Quotes to Inspire and Uplift | JustForQuotes",
    description:
      "Browse our extensive library of motivational quotes that will uplift and inspire you. Start your day with positive thoughts and encouragement.",
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
  const subNavList = categoryMap.riddles;

  return (
    <section>
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
