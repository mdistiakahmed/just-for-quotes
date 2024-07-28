import { imageMap, totalImageCount } from "@/utils/constants";
import Image from "next/image";

const CardComponent = ({ quote, author, serialNumber }: any) => {
  const imageNumber = serialNumber % totalImageCount;
  const backgroundCssClass = imageMap[imageNumber];

  const imageUrl = `/${imageNumber}.jpg`;
  return (
    <div className="relative overflow-hidden rounded-lg min-h-[300px]">
      <Image
        src={imageUrl}
        alt="Quote background"
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center ${backgroundCssClass} p-5`}
      >
        <p className="text-center text-xl">{quote}</p>
        <p className="text-right text-sm  self-end ">~{author}</p>
      </div>
    </div>
  );
};

export default CardComponent;
