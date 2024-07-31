import RiddleCard from "@/components/card/RiddleCard";
import { jokesPageMetaData, riddlesPageMetaData } from "@/utils/constants";
import { getRiddles } from "@/utils/getData";
import Image from "next/image";

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const riddleList = await getRiddles(subcategory);
  const { title, desc } = riddlesPageMetaData[subcategory];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {desc}
      </p>
      <div className="flex justify-center">
        <Image
          src={`/riddle_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} riddles`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1  gap-16">
        {riddleList.map((j, index) => (
          <RiddleCard riddle={j.riddle} answer={j.answer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
