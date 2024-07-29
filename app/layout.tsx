import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer/Footer";
import HeaderComponent from "@/components/navbar/Header";
import SecondaryHeader from "@/components/navbar/SecondaryHeader";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspiring Quotes, Jokes, Memes, and Riddles | JustForQuotes",
  description:
    "Explore a diverse collection of motivational quotes, jokes, memes, and riddles to uplift your mood and bring joy to your day.",
  openGraph: {
    title: "Inspiring Quotes, Jokes, Memes, and Riddles | JustForQuotes",
    description:
      "Discover an extensive range of motivational quotes, jokes, memes, and riddles. Find inspiration, laughter, and fun all in one place.",
    type: "website",
    locale: "en_US",
    url: `https://justforquotes.com/`,
    siteName: "JustForQuotes",
    images: [
      {
        url: "jfq.png",
        width: 1200,
        height: 630,
        alt: "Inspirational quotes, jokes, memes, and riddles background",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <HeaderComponent />

          <div>{children}</div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
