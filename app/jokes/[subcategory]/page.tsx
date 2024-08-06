import JokeCard from "@/components/card/JokeCard";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import ShareWidget from "@/components/share/ShareWidget";
import { jokesPageMetaData } from "@/data/jokes/metadata";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { getJokes } from "@/utils/getData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { subcategory } = params;
  const { title, desc } = jokesPageMetaData[subcategory.toLowerCase()];

  return {
    title: `${title} | JustForQuotes`,
    description: `${desc}`,
    openGraph: {
      title: `${title} | JustForQuotes`,
      description: `${desc}`,
      type: "article",
      locale: "en_US",
      url: `https://www.justforquotes.com/jokes/${subcategory}`,
      siteName: "JustForQuotes",
      images: [
        {
          url: `/jokes_${subcategory.toLowerCase()}.svg`,
          width: 1200,
          height: 630,
          alt: `${subcategory} jokes`,
        },
      ],
    },
  };
}

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const jokeList = await getJokes(subcategory);
  const { title, description, notes } = jokesPageMetaData[subcategory];

  const totalItem = jokeList?.length;
  const firstPageData = jokeList?.slice(0, ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {description}
      </p>
      <ShareWidget />
      <div className="flex justify-center">
        <Image
          src={`/jokes_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} quote`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-16">
        {firstPageData.map((j, index) => (
          <JokeCard joke={j.joke} key={index} />
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
