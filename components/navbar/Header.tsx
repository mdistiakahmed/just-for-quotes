"use client";

import React, { useEffect, useRef, useState } from "react";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import { navOptions } from "@/utils/constants";
import AppsIcon from "@mui/icons-material/Apps";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import Link from "next/link";
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

const HeaderComponent = () => {
  const [isMoreButtonClicked, setIsMoreButtonClicked] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      isMoreButtonClicked
    ) {
      setIsMoreButtonClicked(false);
    }
  };

  useEffect(() => {
    if (isMoreButtonClicked) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMoreButtonClicked]);

  const toggleMoreButton = () => {
    setIsMoreButtonClicked(!isMoreButtonClicked);
  };

  return (
    <header
      className="bg-[#d33a2c] p-5 sm:px-[10vw] grid grid-cols-2 "
      ref={headerRef}
    >
      <Link href={`/`} className="text-white flex items-center">
        <AcmeLogo />
        <p className="font-bold text-inherit whitespace-nowrap">
          Just For Quotes
        </p>
      </Link>

      <div className="hidden sm:flex gap-5 justify-end items-center">
        {navOptions.map((o, index) => (
          <Link href={`/${o.toLowerCase()}`} className="text-white" key={index}>
            <p className="font-bold text-inherit ">{o}</p>
          </Link>
        ))}
      </div>

      <div className="sm:hidden flex items-center justify-end">
        <button
          className="flex gap-1 text-white font-semibold bg-[#a92e23] p-2 rounded-lg w-[80px]"
          onClick={toggleMoreButton}
        >
          {isMoreButtonClicked ? "Less" : "More"}
          {isMoreButtonClicked ? <CloseFullscreenIcon /> : <AppsIcon />}
        </button>
      </div>
      {isMoreButtonClicked && (
        <ul className="col-span-2 grid grid-cols-2 gap-4 mt-4">
          {navOptions.map((o, index) => (
            <li className="flex items-center justify-center" key={index}>
              <Link href={`/${o.toLowerCase()}`} className="text-white">
                <p className="font-bold text-center p-2 bg-[#a92e23] rounded-lg w-[90px] ">
                  {o}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default HeaderComponent;
