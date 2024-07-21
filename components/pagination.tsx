import Link from "next/link";
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

const Pagination = ({ totalPage }: { totalPage?: number }) => {
  return <article className="">
		
	</article>;
};

export default Pagination;
