"use client";

import { ITEMS_PER_PAGE } from "@/utils/constants";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PaginationComponent = ({ totalItem, pageNumber }: any) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pageNumber ? pageNumber : 1);
  const router = useRouter();

  const pageCount = Math.ceil(totalItem / ITEMS_PER_PAGE);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    const isPaginatedPage = segments.includes("pagination");

    if (isPaginatedPage) {
      segments.pop();
      const newUrl = segments.join("/");
      router.push(`${newUrl}/${page}`);
    } else {
      const newPath = `${pathname}/pagination/${page}`;
      router.push(newPath);
    }
  };
  return (
    <Pagination
      total={pageCount}
      initialPage={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default PaginationComponent;
