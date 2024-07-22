"use client";

import { cn, generatePagination } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PaginationArrow = ({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) => {
  const className = cn(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2": direction === "left",
      "ml-2": direction === "right",
    },
  );
  const icon =
    direction === "left" ? (
      <MdChevronLeft size={20} />
    ) : (
      <MdChevronRight size={20} />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
};

const PaginationNumber = ({
  currentPage,
  page,
  href,
  position,
  isActive,
}: {
  currentPage: number;
  page: string | number;
  href: string;
  position?: "first" | "last" | "middle" | "only";
  isActive: boolean;
}) => {
  const className = cn(
    "flex h-10 w-10 items-center justify-center text-sm border text-blue-500",
    {
      "rounded-l-sm": position === "first" || position === "only",
      "rounded-r-sm": position === "last" || position === "only",
      "z-10 bg-blue-100 border-blue-500 text-gray-800": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300 pointer-event-none": position === "middle",
      "max-xs:hidden": page === currentPage - 1 || page === currentPage + 1,
    },
  );

  return position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
};

const Pagination = ({ totalPages: totalPage }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const allPages = generatePagination(currentPage, totalPage || 1);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <article className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "middle" | "only" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "only";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={index}
              page={page}
              href={createPageURL(page)}
              position={position}
              isActive={page === currentPage}
              currentPage={currentPage}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPage}
      />
    </article>
  );
};

export default Pagination;
