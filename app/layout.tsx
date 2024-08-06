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
  title: "Daily Motivation, Jokes, Memes & Riddles - Your Fun Hub",
  description: `Explore daily motivation, laughter, and fun! Dive into our collection of motivational quotes, hilarious jokes, trending memes, and mind-bending riddles.`,
  openGraph: {
    title: "Daily Motivation, Jokes, Memes & Riddles - Your Fun Hub",
    description: `Explore daily motivation, laughter, and fun! Dive into our collection of motivational quotes, hilarious jokes, trending memes, and mind-bending riddles.`,
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
