"use client";

import React, { useEffect, useRef, useState } from "react";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import { navOptions } from "@/utils/constants";
import Link from "next/link";

const HeaderComponent = () => {
  const [isMoreButtonClicked, setIsMoreButtonClicked] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<any>(null);

  const checkIfActivepath = (name: any) => {
    if (name === "/") {
      return pathname === name || pathname.includes("quotes");
    } else {
      return pathname.includes(name);
    }
  };

  // close expaneded more button, by clicking outside
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
      className="bg-[#d33a2c] px-5 py-2  sm:px-[10vw] grid grid-cols-2"
      ref={headerRef}
    >
      <Link href={`/`} className="text-white  flex items-center">
        <AcmeLogo />
        <p className="font-bold  whitespace-nowrap">Just For Quotes</p>
      </Link>

      <div className="hidden sm:flex gap-5 justify-end items-center">
        {navOptions.map((o, index) => (
          <Link
            href={`${o.path}`}
            className={`text-white  p-2 rounded-lg ${
              checkIfActivepath(o.path) ? "bg-[#a92e23]" : ""
            }`}
            key={index}
          >
            <p>{o.name}</p>
          </Link>
        ))}
      </div>

      <div className="sm:hidden flex items-center justify-end">
        <button
          className="flex gap-1 text-white font-semibold bg-[#a92e23] p-2 rounded-lg w-[80px]"
          onClick={toggleMoreButton}
        >
          {isMoreButtonClicked ? "Less" : "More"}
          {/* {isMoreButtonClicked ? <CloseFullscreenIcon /> : <AppsIcon />} */}
        </button>
      </div>
      {isMoreButtonClicked && (
        <ul className="col-span-2 grid grid-cols-2 gap-4 my-6">
          {navOptions.map((o, index) => (
            <li className="flex items-center justify-center" key={index}>
              <Link href={`/${o.path}`} className="text-white">
                <p className="font-bold text-center p-2 bg-[#a92e23] rounded-lg w-[90px] ">
                  {o.name}
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
