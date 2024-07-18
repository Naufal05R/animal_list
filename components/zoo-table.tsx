const ZooTable = () => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="text-nowrap px-6 py-3">Species</th>
          <th className="text-nowrap px-6 py-3">Age</th>
          <th className="px-6 py-3 text-center">Weight</th>
          <th className="px-6 py-3 text-center">Habitat</th>
          <th className="px-6 py-3 text-center">Diet</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b bg-white">
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="flex justify-center gap-1 py-3"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ZooTable;
