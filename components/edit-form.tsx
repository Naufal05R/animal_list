"use client";

import React from "react";
import SelectDiet from "./select-diet";
import { useFormState, useFormStatus } from "react-dom";
import { updateAnimal } from "@/lib/actions";
import { SubmitButton } from "./buttons";
import type { Animal } from "@prisma/client";

const EditForm = ({ animal }: { animal: Animal }) => {
  const { pending } = useFormStatus();
  const updateAnimalWithId = updateAnimal.bind(null, animal.id);
  const [state, formAction] = useFormState(updateAnimalWithId, null);

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
          defaultValue={animal.name}
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
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
          defaultValue={animal.species}
        />
        <div id="species-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.species}</p>
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
          defaultValue={animal.age}
        />
        <div id="age-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.age}</p>
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
          defaultValue={animal.weight}
        />
        <div id="weight-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.weight}</p>
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
          defaultValue={animal.habitat}
        />
        <div id="habitat-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.habitat}</p>
        </div>
      </label>
      <SelectDiet defaultValue={animal.diet} className="col-span-4" errorAlert={state?.Error?.diet} />

      <div
        id="message-error"
        aria-live="polite"
        aria-atomic="true"
        className="col-span-4"
      >
        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
      </div>

      <SubmitButton label="Update" isLoading={pending} className="col-span-4" />
    </form>
  );
};

export default EditForm;
