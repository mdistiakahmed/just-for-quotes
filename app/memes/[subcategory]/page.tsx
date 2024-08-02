import { memesPageMetaData } from "@/utils/constants";
import { getMemes } from "@/utils/getData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { subcategory } = params;
  const { title, description } = memesPageMetaData[subcategory.toLowerCase()];

  return {
    title: `${title} | JustForQuotes`,
    description: `${description}`,
    openGraph: {
      title: `${title} | JustForQuotes`,
      description: `${description}`,
      type: "article",
      locale: "en_US",
      url: `https://www.justforquotes.com/memes/${subcategory}`,
      siteName: "JustForQuotes",
      images: [
        {
          url: `/meme_${subcategory.toLowerCase()}.svg`,
          width: 1200,
          height: 630,
          alt: "Robots and man anime meme",
        },
      ],
    },
  };
}

const SubCategoryPage = async ({ params }: any) => {
  const { subcategory } = params;
  const memeList = await getMemes(subcategory);
  const { title, detailed, facts } =
    memesPageMetaData[subcategory.toLowerCase()];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        {detailed}
      </p>
      <div className="flex justify-center">
        <Image
          src={`/meme_${subcategory.toLowerCase()}.svg`}
          alt={`${subcategory} meme`}
          height={40}
          width={40}
          className="h-[200px] w-[200px]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
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
      </div>

      <div className="mt-10 px-5 py-10 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-5">
          Interesting facts about {subcategory.split("-").join(" ")} memes
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-800 leading-loose">
          {facts.map((fact: any, index: any) => (
            <li
              key={index}
              className="mb-2 rounded-lg shadow-md bg-white px-5 py-3 hover:shadow-lg transition duration-300 ease-in-out"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubCategoryPage;
