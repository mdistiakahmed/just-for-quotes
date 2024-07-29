import React from "react";

const JokeCard = () => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-4">
      {/* SVG Image */}
      <div className="absolute top-0 right-[-15px] w-20 h-20">
        <img
          src="/gopal.png"
          alt="icon"
          className="w-full h-full object-contain transition-transform duration-300 hover:rotate-12"
        />
      </div>

      {/* Riddle Text */}
      <div className="text-gray-800 p-8">
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      </div>
    </div>
  );
};

export default JokeCard;
