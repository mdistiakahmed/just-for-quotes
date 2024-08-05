import JokeCard from "@/components/card/JokeCard";
import QuoteCard from "@/components/card/QuoteCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getJokes, getMemes, getQuote } from "@/utils/getData";
import Image from "next/image";

const PaginatedQuotePage = async ({ params }: any) => {
  const { subcategory, pageid } = params;
  const memeList = await getMemes(subcategory);

  const pageNumber = Number(pageid);
  const totalItem = memeList?.length;

  const paginatedMemeList = memeList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{`${subcategory} meme page ${pageNumber}`}</h1>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {paginatedMemeList.map((m: any, index: any) => (
          <div key={index} className="relative   h-[400px] ">
            <Image
              src={m.url}
              alt={m.alt}
              layout="fill"
              objectFit="contain"
              className="shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default PaginatedQuotePage;
