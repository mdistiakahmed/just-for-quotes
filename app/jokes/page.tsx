import JokeCard from "@/components/card/JokeCard";
import { getJokes } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

const JokesPage = async () => {
  const funnyJokesList = await getJokes("funny");
  const knockknockJokesList = await getJokes("knock-knock");

  const categoryJokesSection = (catJokeList: any, cat: any) => {
    return (
      <div className="grid grid-cols-1 gap-5 mt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`/jokes_${cat.toLowerCase()}.svg`}
            alt={`${cat} Jokes`}
            height={40}
            width={40}
            className="h-[200px] w-[200px]"
          />
          <h2 className="text-xl">{cat} Jokes</h2>
        </div>
        {catJokeList.map((j: any, index: any) => (
          <JokeCard joke={j.joke} key={index} />
        ))}
        <div className=" flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/jokes/${cat.toLowerCase()}`}
            className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More {cat} Jokes
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Best Jokes to Brighten Your Day - Funny Jokes for All Ages
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Explore our collection of hilarious jokes that will make you laugh out
        loud. From clever puns to classic one-liners, find the perfect joke to
        share with friends and family. Enjoy clean, funny jokes for all ages and
        brighten your day with laughter.
      </p>
      {categoryJokesSection(funnyJokesList.slice(0, 5), "Funny")}
      {categoryJokesSection(knockknockJokesList.slice(0, 5), "Knock-knock")}
    </div>
  );
};

export default JokesPage;
