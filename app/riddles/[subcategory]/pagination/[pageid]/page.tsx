import QuoteCard from "@/components/card/QuoteCard";
import RiddleCard from "@/components/card/RiddleCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getQuote, getRiddles } from "@/utils/getData";

const PaginatedQuotePage = async ({ params }: any) => {
  const { subcategory, pageid } = params;
  const riddleList = await getRiddles(subcategory);

  const pageNumber = Number(pageid);
  const totalItem = riddleList?.length;

  const paginatedRiddleList = riddleList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{`${subcategory} riddles page ${pageNumber}`}</h1>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {paginatedRiddleList.map((j, index) => (
          <RiddleCard riddle={j.riddle} answer={j.answer} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default PaginatedQuotePage;
