import { getAnimals } from "@/lib/data";
import { DeleteButton, EditButton } from "./buttons";

const AnimalTable = async () => {
  const animals = await getAnimals();

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Species</th>
          <th className="px-6 py-3 text-center">Age</th>
          <th className="px-6 py-3 text-center">Weight</th>
          <th className="px-6 py-3 text-center">Habitat</th>
          <th className="px-6 py-3 text-center">Diet</th>
          <th className="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          <tr key={animal.id} className="border-b bg-white">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{animal.name}</td>
            <td className="px-6 py-3">{animal.species}</td>
            <td className="px-6 py-3 text-center">{animal.age}</td>
            <td className="px-6 py-3 text-center">{animal.weight}</td>
            <td className="px-6 py-3 text-center">{animal.habitat}</td>
            <td className="px-6 py-3 text-center">{animal.diet}</td>
            <td className="flex items-center justify-center gap-x-1.5 px-6 py-3">
              <EditButton id={animal.id} />
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;
