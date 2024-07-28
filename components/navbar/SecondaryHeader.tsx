import { Dancing_Script } from "next/font/google";

const subNavList = [
  "Love",
  "Religion",
  "Job",
  "Loneliness",
  "Family",
  "Friends",
  "Marriage",
  "Others",
];

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400", // You can specify the weight you need
});

const SecondaryHeader = () => {
  return (
    <header className={`${dancingScript.className} sticky top-0 bg-white`}>
      <nav className="p-2 sticky top-0">
        <ul className=" flex gap-4 overflow-auto no-scrollbar">
          {subNavList.map((s, index) => (
            <li
              className="px-2 rounded-xl bg-[#ffe7e7] text-[#ff1414] text-[24px]  cursor-pointer border-[1px] hover:border-[#ff1414]"
              key={index}
            >
              {s}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SecondaryHeader;
