"use client";

import { Dancing_Script } from "next/font/google";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { categoryMap } from "@/utils/constants";
import { useEffect, useState } from "react";

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
  weight: "400",
});

const SecondaryHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState<any>(["Loading..."]);
  const [currentCategory, setCurrentCategory] = useState<any>("quotes");
  const [selectedSubNav, setSelectedSubNav] = useState<any>(null);

  useEffect(() => {
    const parts = pathname.split("/");
    const categoryPart = parts[1];
    setCurrentCategory(categoryPart);
    const category = categoryMap[categoryPart === "" ? "quotes" : categoryPart];
    if (category) {
      setNavList(category);
    }

    if (parts.length > 2) {
      setSelectedSubNav(parts[2]);
    } else {
      setSelectedSubNav(null);
    }
  }, [pathname]);

  const navigateToSubNavCategory = (name: string) => {
    let targetUrl = "";
    if (currentCategory === "quotes" || currentCategory === "") {
      targetUrl = `/quotes/${name.toLowerCase()}`;
    } else {
      targetUrl = `/${currentCategory}/${name.toLowerCase()}`;
    }
    router.push(targetUrl);
  };

  return (
    <header className={`${dancingScript.className} sticky top-0 bg-white`}>
      <nav className="p-2 sticky top-0">
        <ul className=" flex gap-4 overflow-auto no-scrollbar">
          {navList.map((s: any, index: any) => (
            <li
              className={`px-2 rounded-xl bg-[#ffe7e7] text-[#ff1414] text-[24px]  cursor-pointer border-[1px] hover:border-[#ff1414] ${
                s.toLowerCase() === selectedSubNav ? "border-[#ff1414]" : ""
              }`}
              key={index}
              onClick={() => navigateToSubNavCategory(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      </nav>
      <Breadcrumb />
    </header>
  );
};

export default SecondaryHeader;
