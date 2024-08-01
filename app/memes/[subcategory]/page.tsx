import JokeCard from "@/components/card/JokeCard";
import { jokesPageMetaData, memesPageMetaData } from "@/utils/constants";
import { getJokes, getMemes } from "@/utils/getData";
import Image from "next/image";

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const memeList = await getMemes(subcategory);
  const { title, desc } = memesPageMetaData[subcategory.toLowerCase()];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {desc}
      </p>
      <div className="flex justify-center">
        <Image
          src={`/meme_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} quote`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {memeList.map((m, index) => (
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
      </div>
    </div>
  );
};

export default SubCategoryPage;
