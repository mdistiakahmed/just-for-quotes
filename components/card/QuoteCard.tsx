import Image from "next/image";
import React from "react";

const QuoteCard = ({ quote, author, serialNumber }: any) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-4">
      {/* SVG Image */}
      <div className="absolute top-0 right-[-15px] w-20 h-20">
        <img
          src="/wizerd.png"
          alt="icon"
          className="w-full h-full object-contain transition-transform duration-300 hover:rotate-12"
        />
      </div>

      {/* Joke Text */}
      <div className="text-gray-800 p-8 h-full flex flex-col items-center justify-center">
        <p className="text-center text-xl">{quote}</p>
        <p className="text-right text-sm  self-end ">~{author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
