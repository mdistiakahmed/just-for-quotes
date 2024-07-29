import CardComponent from "@/components/card/CardComponent";
import { quoteList } from "@/utils/constants";
import React from "react";

const QuotePage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {quoteList.map((q, index) => (
        <CardComponent
          quote={q.quote}
          author={q.author}
          serialNumber={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default QuotePage;
