"use client";

import { generatePagination } from "@/lib/utils";
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
  const className = "flex h-10 w-10 items-center justify-center text-sm border";
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
  page,
  href,
  position,
  isActive,
}: {
  page: number;
  href: string;
  position?: "first" | "last" | "middle" | "only";
  isActive: boolean;
}) => {
  const className =
    "flex h-10 w-10 items-center justify-center text-sm border text-blue-500";

  return (
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

  return (
    <article className="inline-flex">
      <PaginationArrow href={"/"} direction="left" isDisabled />

      <div className="flex -space-x-px"></div>

      <PaginationArrow href={"/"} direction="right" isDisabled />
    </article>
  );
};

export default Pagination;
