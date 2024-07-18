import { cn } from "@/lib/utils";
import React from "react";
import SelectDiet from "./select-diet";

const CreateForm = () => {
  return (
    <form action={""} className="grid grid-cols-4 gap-x-4">
      <label htmlFor="name" className="col-span-4 mb-5">
        <span className="block text-sm font-medium text-gray-900">Name</span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Bear"
          className="input"
        />
      </label>
      <label htmlFor="species" className="col-span-4 mb-5">
        <span className="block text-sm font-medium text-gray-900">Species</span>
        <input
          type="text"
          name="species"
          id="species"
          placeholder="Ursus Arctos"
          className="input"
        />
      </label>
      <label htmlFor="age" className="col-span-2 mb-5 block">
        <span className="block text-sm font-medium text-gray-900">
          Age (Year)
        </span>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="20"
          className="input"
        />
      </label>
      <label htmlFor="weight" className="col-span-2 mb-5 block">
        <span className="block text-sm font-medium text-gray-900">
          Weight (Kg)
        </span>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="300"
          className="input"
        />
      </label>
      <label htmlFor="habitat" className="col-span-4 mb-5">
        <span className="block text-sm font-medium text-gray-900">Habitat</span>
        <input
          type="text"
          name="habitat"
          id="habitat"
          placeholder="Forest"
          className="input"
        />
      </label>
      <SelectDiet className="col-span-4" />

      <button
        type="submit"
        className={cn(
          "col-span-4 rounded-sm bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800",
        )}
      >
        <span>Save</span>
      </button>
    </form>
  );
};

export default CreateForm;
