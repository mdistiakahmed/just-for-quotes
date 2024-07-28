import CardComponent from "@/components/card/CardComponent";
import { quoteList } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] grid grid-cols-1 gap-5 sm:grid-cols-2">
        {quoteList.map((q, index) => (
          <CardComponent
            quote={q.quote}
            author={q.author}
            serialNumber={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
