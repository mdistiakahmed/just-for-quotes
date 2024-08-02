import JokeCard from "@/components/card/JokeCard";
import RiddleCard from "@/components/card/RiddleCard";
import { getJokes, getRiddles } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

const RiddleHomePage = async () => {
  const classicRiddleList = await getRiddles("adult");
  const funnyRiddleList = await getRiddles("funny");

  const categoryRiddleSection = (catRiddleList: any, cat: any) => {
    return (
      <div className="grid grid-cols-1 gap-5 mt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`/riddle_${cat.toLowerCase()}.svg`}
            alt={`${cat} Jokes`}
            height={40}
            width={40}
            className="h-[200px] w-[200px]"
          />
          <h2 className="text-xl">{cat} Jokes</h2>
        </div>
        {catRiddleList.map((r: any, index: any) => (
          <RiddleCard riddle={r.riddle} answer={r.answer} key={index} />
        ))}
        <div className=" flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/riddles/${cat.toLowerCase()}`}
            className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More {cat} Riddles
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Riddle Me This: Your Ultimate Riddle Challenge
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Dive into a world of mind-boggling puzzles with our vast collection of
        riddles. From classic brain teasers to hilarious jokes, we&apos;ve got
        something for everyone. Challenge your wit, sharpen your mind, and share
        the fun with friends. Solve riddles, laugh out loud, and become a riddle
        master today!
      </p>
      {categoryRiddleSection(classicRiddleList.slice(0, 5), "Classic")}
      {categoryRiddleSection(funnyRiddleList.slice(0, 5), "Funny")}
    </div>
  );
};

export default RiddleHomePage;
