import RiddleCard from "@/components/card/RiddleCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import ShareWidget from "@/components/share/ShareWidget";
import { riddlesPageMetaData } from "@/data/riddles/metadata";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getRiddles } from "@/utils/getData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { subcategory } = params;
  const { title, desc } = riddlesPageMetaData[subcategory.toLowerCase()];

  return {
    title: `${title} | JustForQuotes`,
    description: `${desc}`,
    openGraph: {
      title: `${title} | JustForQuotes`,
      description: `${desc}`,
      type: "article",
      locale: "en_US",
      url: `https://www.justforquotes.com/riddles/${subcategory}`,
      siteName: "JustForQuotes",
      images: [
        {
          url: `/riddles_${subcategory.toLowerCase()}.svg`,
          width: 1200,
          height: 630,
          alt: `${subcategory} riddles`,
        },
      ],
    },
  };
}

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const riddleList = await getRiddles(subcategory);
  const { title, detailed, notes } = riddlesPageMetaData[subcategory];

  const totalItem = riddleList?.length;
  const firstPageData = riddleList?.slice(0, ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {detailed}
      </p>
      <ShareWidget />
      <div className="flex justify-center">
        <Image
          src={`/riddles_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} riddles`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1  gap-16">
        {firstPageData.map((j, index) => (
          <RiddleCard riddle={j.riddle} answer={j.answer} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <PaginationComponent totalItem={totalItem} />
      </div>

      <div className="flex flex-col gap-5">
        {notes &&
          notes.map((n: any, index: any) => {
            return (
              <p key={index} className="text-xl text-center">
                {n}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategoryPage;
