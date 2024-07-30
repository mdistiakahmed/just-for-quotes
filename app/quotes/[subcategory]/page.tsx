import QuoteCard from "@/components/card/QuoteCard";
import { quotePageMetaData } from "@/utils/constants";
import { getQuote } from "@/utils/getData";
import Image from "next/image";

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const quoteList = await getQuote(subcategory);
  const { title, desc } = quotePageMetaData[subcategory];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {desc}
      </p>
      <div className="flex justify-center">
        <Image
          src={`/quote_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} quote`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {quoteList.map((q, index) => (
          <QuoteCard
            quote={q.quote}
            author={q.author}
            serialNumber={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
