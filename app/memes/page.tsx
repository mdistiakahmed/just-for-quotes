import { getMemes } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const funnyMemeList = await getMemes("funny");
  const coupleMemeList = await getMemes("couple");

  const categoryMemesSection = (memeList: any, cat: any) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`/meme_${cat.toLowerCase()}.svg`}
            alt={`${cat} Jokes`}
            height={40}
            width={40}
            className="h-[200px] w-[200px]"
          />
          <h2 className="text-xl">{cat} Memes</h2>
        </div>
        {memeList.map((m: any, index: any) => (
          <div key={index} className="relative   h-[400px] ">
            <Image
              src={m.url}
              alt={m.alt}
              layout="fill"
              objectFit="contain"
              className="shadow-lg"
            />
          </div>
        ))}
        <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/memes/${cat.toLowerCase()}`}
            className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More {cat} Memes
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Memes - Explore the Best Funny, Happy Birthday, Cat, Thumbs Up, and
        Drake Memes | JustForQuotes.com
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Discover the ultimate collection of memes at JustForQuotes.com. From
        hilarious funny memes to heartwarming happy birthday memes, adorable cat
        memes, classic thumbs up memes, and iconic Drake memes, we have it all.
        Dive into the world of memes and share the laughter with your friends.
      </p>
      {categoryMemesSection(funnyMemeList.slice(0, 5), "Funny")}
      {categoryMemesSection(coupleMemeList.slice(0, 5), "Couple")}
    </div>
  );
};

export default page;
