"use client";

import { cn } from "@/lib/utils";
import React from "react";
import SelectDiet from "./select-diet";
import { useFormState } from "react-dom";
import { saveAnimal } from "@/lib/actions";

const CreateForm = () => {
  const [state, formAction] = useFormState(saveAnimal, null);
  const { Error, message } = state ?? {};
  const { age, diet, habitat, name, species, weight } = Error ?? {};

  return (
    <form action={formAction} className="grid grid-cols-4 gap-x-4">
      <label htmlFor="name" className="col-span-4 mb-5">
        <span className="block text-sm font-medium text-gray-900">Name</span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Bear"
          className="input"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{name}</p>
        </div>
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
        <div id="species-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{species}</p>
        </div>
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
        <div id="age-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{age}</p>
        </div>
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
        <div id="weight-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{weight}</p>
        </div>
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
        <div id="habitat-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{habitat}</p>
        </div>
      </label>
      <SelectDiet className="col-span-4" errorAlert={diet} />

      <div
        id="message-error"
        aria-live="polite"
        aria-atomic="true"
        className="col-span-4"
      >
        <p className="mt-2 text-sm text-red-500">{message}</p>
      </div>

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
