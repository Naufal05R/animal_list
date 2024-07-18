import EditForm from "@/components/edit-form";
import { getAnimalById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function UpdateAnimalPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const animal = await getAnimalById(id);

  if (!animal) {
    return notFound();
  };

  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Add New Animal</h1>
      <EditForm animal={animal} />
    </div>
  );
}
