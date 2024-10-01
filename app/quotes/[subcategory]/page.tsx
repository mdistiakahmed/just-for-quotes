import QuoteCard from "@/components/card/QuoteCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import ShareWidget from "@/components/share/ShareWidget";
import { quotePageMetaData } from "@/data/quotes/metadata";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getQuote } from "@/utils/getData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { subcategory } = params;
  const { title, desc } = quotePageMetaData[subcategory.toLowerCase()];

  return {
    title: `${title} | JustForQuotes`,
    description: `${desc}`,
    openGraph: {
      title: `${title} | JustForQuotes`,
      description: `${desc}`,
      type: "article",
      locale: "en_US",
      url: `https://www.justforquotes.com/quotes/${subcategory}`,
      siteName: "JustForQuotes",
      images: [
        {
          url: `/quotes_${subcategory.toLowerCase()}.jpg`,
          width: 1200,
          height: 630,
          alt: `${subcategory} quotes`,
        },
      ],
    },
  };
}

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const { title, detailed, notes } = quotePageMetaData[subcategory];

  const quoteList = await getQuote(subcategory);
  const totalItem = quoteList?.length;
  const firstPageData = quoteList?.slice(0, ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {detailed}
      </p>

      <ShareWidget />

      <div className="flex justify-center">
        <Image
          src={`/quotes_${subcategory.toLowerCase()}.jpg`}
          alt={`${subcategory} quote`}
          height={40}
          width={400}
        />
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {firstPageData.map((q, index) => (
          <QuoteCard
            quote={q.quote}
            author={q.author}
            serialNumber={index}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} />
      </div>

      <div className="flex flex-col gap-5">
        {notes &&
          notes.map((n: any, index: any) => {
            return (
              <p key={index} className="text-xl text-center">
                {n}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategoryPage;
