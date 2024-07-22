import React from "react";

export const TableSkeletons = () => {
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
      <tbody className="animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="border-b bg-white">
            <td className="px-6 py-3">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3 text-center">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3 text-center">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3 text-center">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="px-6 py-3 text-center">
							<div className="h-4 w-4 rounded bg-gray-100"></div>
						</td>
            <td className="flex items-center justify-center gap-x-1.5 px-6 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
