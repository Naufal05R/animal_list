import CreateForm from "@/components/create-form";
import { usePathname } from "next/navigation";

export default function CreateAnimalPage() {
  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Add New Animal</h1>
      <CreateForm />
    </div>
  );
}
