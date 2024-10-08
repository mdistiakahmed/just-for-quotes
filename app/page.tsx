import JokeCard from "@/components/card/JokeCard";
import QuoteCard from "@/components/card/QuoteCard";
import RiddleCard from "@/components/card/RiddleCard";
import ShareWidget from "@/components/share/ShareWidget";
import { jokeList, quoteList, riddleList } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const memes = ["/meme1.jpg", "/meme2.jpg"];

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] flex flex-col gap-10">
        <h1 className="text-2xl  text-center">
          Ultimate Hub for Motivation, Jokes, Memes, Puzzles & Riddles - Your
          Daily Dose of Fun & Inspiration
        </h1>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Discover the ultimate hub for daily motivation, laughter, and
          brain-teasing fun! Explore our collection of motivational quotes,
          hilarious jokes, trending memes, challenging puzzles, and mind-bending
          riddles. Your go-to source for inspiration and entertainment.
        </p>
        <ShareWidget />

        <div className="flex items-center justify-center">
          <Image
            src={"/quotes_inspirational.svg"}
            alt="nature"
            height={40}
            width={40}
            className="h-[400px] w-[400px]"
          />
        </div>

        {/* motivatoin */}
        <Link href={`/quotes`} className="cursor-pointer hover:text-[#d33a2c]">
          <div className="flex items-center justify-center">
            <h2 className="text-xl text-center ">Motivational Quotes</h2>
            <Image
              src={"/button-arrow-hover.svg"}
              height={20}
              width={80}
              className="h-[30px]"
              alt="arrow"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {quoteList.map((q, index) => (
              <QuoteCard
                quote={q.quote}
                author={q.author}
                serialNumber={index}
                key={index}
              />
            ))}
          </div>
          <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
            <Link
              href={`/quotes`}
              className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/quotes_funny.svg"}
            alt="happy cat"
            height={40}
            width={40}
            className="h-[300px] w-[300px]"
          />
        </div>

        {/* jokes */}

        <Link href={`/jokes`} className="cursor-pointer hover:text-[#d33a2c]">
          <div className="flex items-center justify-center">
            <h2 className="text-xl text-center "> Jokes</h2>
            <Image
              src={"/button-arrow-hover.svg"}
              height={20}
              width={80}
              className="h-[30px]"
              alt="arrow"
            />
          </div>
        </Link>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Experience the perfect blend of laughter and inspiration with our
          ultimate collection of motivational quotes and hilarious jokes. Boost
          your mood and stay positive with daily doses of motivation and humor.
          Discover funny jokes, uplifting quotes, and endless entertainment, all
          designed to inspire, uplift, and bring joy to your day.
        </p>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {jokeList.map((j, index) => (
              <JokeCard joke={j.joke} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
            <Link
              href={`/jokes`}
              className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/meme_funny.svg"}
            alt="nature"
            height={40}
            width={40}
            className="h-[300px] w-[400px]"
          />
        </div>

        {/* Memes */}

        <Link href={`/memes`} className="cursor-pointer hover:text-[#d33a2c]">
          <div className="flex items-center justify-center">
            <h2 className="text-xl text-center "> Memes</h2>
            <Image
              src={"/button-arrow-hover.svg"}
              height={20}
              width={80}
              className="h-[30px]"
              alt="arrow"
            />
          </div>
        </Link>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Get your daily dose of laughter and inspiration with our fresh memes
          and motivational quotes. From side-splitting humor to uplifting
          messages, we&apos;ve got you covered. Find the perfect blend of funny
          and focused to boost your mood and achieve your goals.
        </p>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {memes.map((q, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={q}
                  alt={`meem-${index}`}
                  width={300}
                  height={300}
                  layout="intrinsic"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-5 p-5 mr-[60px] md:mr-[80px]">
            <Link
              href={`/memes`}
              className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/riddles_kids.svg"}
            alt="nature"
            height={40}
            width={40}
            className="h-[300px] w-[400px]"
          />
        </div>

        {/* Riddles */}

        <Link href={`/riddles`} className="cursor-pointer hover:text-[#d33a2c]">
          <div className="flex items-center justify-center">
            <h2 className="text-xl text-center "> Riddles</h2>
            <Image
              src={"/button-arrow-hover.svg"}
              height={20}
              width={80}
              className="h-[30px]"
              alt="arrow"
            />
          </div>
        </Link>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Ignite your curiosity and fuel your motivation with our captivating
          collection of riddles and motivational quotes. Solve intriguing
          riddles that challenge your mind while staying inspired with
          empowering quotes. Enjoy daily doses of mental stimulation and
          motivation, designed to keep you sharp, focused, and driven.
        </p>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {riddleList.map((j, index) => (
              <RiddleCard riddle={j.riddle} answer={j.answer} key={index} />
            ))}
          </div>
          <div className="flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
            <Link
              href={`/riddles`}
              className="bg-[#d33a2c] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
            >
              See More
            </Link>
          </div>
        </div>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Motivational quotes, jokes, memes, puzzles, and riddles play a crucial
          role in enriching our lives. Motivational quotes inspire and empower
          us to achieve our goals, while jokes and memes bring laughter and joy,
          reducing stress and enhancing our well-being. Puzzles and riddles
          engage our minds, boosting cognitive skills and providing mental
          stimulation. Embracing these elements not only keeps us entertained
          but also supports our mental health and personal growth.
        </p>
      </div>
    </div>
  );
}
