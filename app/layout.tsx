import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Footer from "@/components/footer/Footer";
import HeaderComponent from "@/components/navbar/Header";
import SecondaryHeader from "@/components/navbar/SecondaryHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inspiring Quotes for Every Occasion | QuoteMaster",
  description:
    "Discover a vast collection of motivational, love, religious, marriage, family, and loneliness quotes to inspire and uplift your spirit.",
  openGraph: {
    title: "Inspiring Quotes for Every Occasion | QuoteMaster",
    description:
      "Explore an extensive library of quotes on motivation, love, religion, marriage, family, and loneliness. Find the perfect quote to inspire and uplift your spirit.",
    type: "website",
    locale: "en_US",
    url: `https://justforquotes.com/`,
    siteName: "JustForQuotes",
    images: [
      {
        url: "motivational-quotes.PNG",
        width: 1200,
        height: 630,
        alt: "Inspirational quotes background",
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
      <body className={inter.className}>
        <NextUIProvider>
          <HeaderComponent />
          <SecondaryHeader />
          <Breadcrumb />
          <div>{children}</div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
