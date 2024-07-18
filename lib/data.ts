import { prisma } from "@/lib/prisma";

export const getAnimals = async () => {
  try {
    const animals = await prisma.animal.findMany();
    return animals;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};
