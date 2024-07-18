import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

export const CreateButton = () => {
  return (
    <Link
      href="/animals/create"
      className="inline-flex cursor-pointer items-center gap-x-1 rounded-sm bg-blue-700 py-[9px] pl-2.5 pr-4 text-sm text-white hover:bg-blue-800"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};
