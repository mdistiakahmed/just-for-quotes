import React from "react";

const JokeCard = ({ joke }: any) => {
  const jokeLines: string[] = joke
    .split(";")
    .filter((line: any) => line.trim() !== "");
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

      {/* Joke Text */}
      <div className="text-gray-800 p-8">
        {jokeLines.map((line, index) => (
          <p key={index} className="mb-2">
            {line.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JokeCard;
