import JokeCard from "@/components/card/JokeCard";
import { jokesPageMetaData } from "@/utils/constants";
import { getJokes } from "@/utils/getData";
import Image from "next/image";

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const jokeList = await getJokes(subcategory);
  const { title, desc } = jokesPageMetaData[subcategory];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {desc}
      </p>
      <div className="flex justify-center">
        <Image
          src={`/joke_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} quote`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-16">
        {jokeList.map((j, index) => (
          <JokeCard joke={j.joke} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
