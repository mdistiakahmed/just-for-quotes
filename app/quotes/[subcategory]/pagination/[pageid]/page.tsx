import QuoteCard from "@/components/card/QuoteCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getQuote } from "@/utils/getData";

const PaginatedQuotePage = async ({ params }: any) => {
  const { subcategory, pageid } = params;
  const quoteList = await getQuote(subcategory);

  const pageNumber = Number(pageid);
  const totalItem = quoteList?.length;

  const paginatedQuoteList = quoteList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{`${subcategory} quotes page ${pageNumber}`}</h1>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {paginatedQuoteList.map((q, index) => (
          <QuoteCard
            quote={q.quote}
            author={q.author}
            serialNumber={index}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default PaginatedQuotePage;
