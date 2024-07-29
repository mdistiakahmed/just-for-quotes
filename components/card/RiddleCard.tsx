const RiddleCard = () => {
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
      <div className="text-gray-800 p-5">
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      </div>

      {/* Riddle Answer */}
      <div className="text-gray-800 p-5 cursor-pointer group">
        <p className="italic font-bold">{"Show Answer"}</p>
        <p className="hidden group-hover:block">
          {"Lorem Ipsum is simply dummy text of the printing "}
        </p>
      </div>
    </div>
  );
};

export default RiddleCard;
