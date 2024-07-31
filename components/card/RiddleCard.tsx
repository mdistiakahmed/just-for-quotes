const RiddleCard = ({ riddle, answer }: any) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-4">
      {/* SVG Image */}
      <div className="absolute top-[-20px] right-[-20px] w-20 h-20">
        <img
          src="/wise_man.svg"
          alt="icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Riddle Text */}
      <div className="text-gray-800 p-5">{riddle}</div>

      {/* Riddle Answer */}
      <div className="text-gray-800 p-5 cursor-pointer group">
        <p className="italic font-bold">{"Show Answer"}</p>
        <p className="hidden group-hover:block">{answer}</p>
      </div>
    </div>
  );
};

export default RiddleCard;
