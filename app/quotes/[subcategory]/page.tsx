import QuoteCard from "@/components/card/QuoteCard";
import { getQuote } from "@/utils/getData";

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const quoteList = await getQuote(subcategory);
  return (
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
  );
};

export default SubCategoryPage;
