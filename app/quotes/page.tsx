import QuoteCard from "@/components/card/QuoteCard";
import { getQuote } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuotePage = async () => {
  const loveQuoteList = await getQuote("inspirational");
  const lonelinessQuoteList = await getQuote("love");
  const successQuoteList = await getQuote("funny");
  const religionQuoteList = await getQuote("famous");
  const familyQuoteList = await getQuote("good-morning");

  const categoryQuoteSection = (catQuoteList: any, cat: any) => {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`/quote_${cat.toLowerCase()}.svg`}
            alt={`${cat} quote`}
            height={40}
            width={40}
            className="h-[200px] w-[200px]"
          />
          <h2 className="text-xl">{cat} Quotes</h2>
        </div>
        {catQuoteList.slice(0, 5).map((q: any, index: any) => (
          <QuoteCard
            quote={q.quote}
            author={q.author}
            serialNumber={index}
            key={index}
          />
        ))}{" "}
        <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/quotes/${cat.toLowerCase()}`}
            className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More {cat} Quotes
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Ultimate Collection of Motivational, Inspirational, and Love Quotes |
        Quotes for Success & More
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Discover a vast selection of motivational quotes, love and romantic
        quotes, and inspiring messages about success. Explore our curated
        collection of quotes to uplift, inspire, and motivate you through
        life&apos;s challenges. Find the perfect words to brighten your day and
        fuel your journey towards success.
      </p>
      {categoryQuoteSection(successQuoteList, "Success")}
      {categoryQuoteSection(loveQuoteList, "Love")}
      {categoryQuoteSection(lonelinessQuoteList, "Loneliness")}
      {categoryQuoteSection(religionQuoteList, "Religion")}
      {categoryQuoteSection(familyQuoteList, "Family")}
    </div>
  );
};

export default QuotePage;
