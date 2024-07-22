import { getAnimals } from "@/lib/data";
import { DeleteButton, EditButton } from "./buttons";

const AnimalTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const animals = await getAnimals(query, currentPage);

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="w-14 min-w-14 max-w-14 px-6 py-3">#</th>
          <th className="w-40 min-w-40 max-w-40 px-6 py-3">Name</th>
          <th className="w-52 min-w-52 max-w-52 px-6 py-3">Species</th>
          <th className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">Age</th>
          <th className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">
            Weight
          </th>
          <th className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">
            Habitat
          </th>
          <th className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">Diet</th>
          <th className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          <tr key={animal.id} className="border-b bg-white">
            <td className="w-14 min-w-14 max-w-14 px-6 py-3">{index + 1}</td>
            <td className="w-40 min-w-40 max-w-40 px-6 py-3">{animal.name}</td>
            <td className="w-52 min-w-52 max-w-52 px-6 py-3">
              {animal.species}
            </td>
            <td className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">
              {animal.age}
            </td>
            <td className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">
              {animal.weight}
            </td>
            <td className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">
              {animal.habitat}
            </td>
            <td className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">
              {animal.diet}
            </td>
            <td className="flex w-32 min-w-32 max-w-32 items-center justify-center gap-x-1.5 px-6 py-3">
              <EditButton id={animal.id} />
              <DeleteButton id={animal.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;
