import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer/Footer";
import HeaderComponent from "@/components/navbar/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ultimate Hub for Motivation, Jokes, Memes, Puzzles & Riddles - Your Daily Dose of Fun & Inspiration | JustForQuotes",
  description:
    "Discover the ultimate hub for daily motivation, laughter, and brain-teasing fun! Explore our collection of motivational quotes, hilarious jokes, trending memes, challenging puzzles, and mind-bending riddles. Your go-to source for inspiration and entertainment.",
  openGraph: {
    title:
      "Ultimate Hub for Motivation, Jokes, Memes, Puzzles & Riddles - Your Daily Dose of Fun & Inspiration | JustForQuotes",
    description:
      "Discover the ultimate hub for daily motivation, laughter, and brain-teasing fun! Explore our collection of motivational quotes, hilarious jokes, trending memes, challenging puzzles, and mind-bending riddles. Your go-to source for inspiration and entertainment.",
    type: "website",
    locale: "en_US",
    url: `https://justforquotes.com/`,
    siteName: "JustForQuotes",
    images: [
      {
        url: "quotes_inspirational.svg",
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
      <GoogleAnalytics gaId="G-GGMJB17QP9" />
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
