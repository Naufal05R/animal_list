"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const DIET = ["Carnivore", "Herbivore", "Omnivore"] as const;

const AnimalSchema = z.object({
  name: z.string().min(4),
  species: z.string().min(4),
  age: z.preprocess(
    (inputAge) => parseInt(z.string().parse(inputAge), 10),
    z.number().gte(1, "Min age is 1 Year"),
  ),
  weight: z.preprocess(
    (inputWeight) => parseInt(z.string().parse(inputWeight), 10),
    z.number().gte(1, "Min Weight is 1 Kg"),
  ),
  habitat: z.string().min(4),
  diet: z.enum(DIET),
});

export const saveAnimal = async (prevState: any, formData: FormData) => {
  const validatedFields = AnimalSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  const { success, data, error } = validatedFields;

  if (!success) {
    return {
      Error: error.flatten().fieldErrors,
    };
  }

  try {
    const { age, diet, habitat, name, species, weight } = data;

    await prisma.animal.create({
      data: {
        name,
        species,
        age,
        weight,
        habitat,
        diet,
      },
    });
  } catch (error) {
    return {
      message: "Failed to create animal",
    };
  }

  revalidatePath("/animals");
  redirect("/animals");
};

export const updateAnimal = async (
  id: string,
  prevState: any,
  formData: FormData,
) => {
  const validatedFields = AnimalSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  const { success, data, error } = validatedFields;

  if (!success) {
    return {
      Error: error.flatten().fieldErrors,
    };
  }

  try {
    const { age, diet, habitat, name, species, weight } = data;

    await prisma.animal.update({
      data: {
        name,
        species,
        age,
        weight,
        habitat,
        diet,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Failed to update animal",
    };
  }

  revalidatePath("/animals");
  redirect("/animals");
};

export const deleteAnimal = async (id: string) => {
  try {
    await prisma.animal.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "Failed to delete animal",
    };
  }

  revalidatePath("/animals");
};
