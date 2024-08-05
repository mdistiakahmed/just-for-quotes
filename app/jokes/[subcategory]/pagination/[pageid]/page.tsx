import JokeCard from "@/components/card/JokeCard";
import QuoteCard from "@/components/card/QuoteCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getJokes, getQuote } from "@/utils/getData";

const PaginatedQuotePage = async ({ params }: any) => {
  const { subcategory, pageid } = params;
  const jokeList = await getJokes(subcategory);

  const pageNumber = Number(pageid);
  const totalItem = jokeList?.length;

  const paginatedJokeList = jokeList?.slice(
    (pageNumber - 1) * ITEMS_PER_PAGE,
    pageNumber * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{`${subcategory} jokes page ${pageNumber}`}</h1>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {paginatedJokeList.map((j, index) => (
          <JokeCard joke={j.joke} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default PaginatedQuotePage;
