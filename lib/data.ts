import { prisma } from "@/lib/prisma";

export const getAnimals = async (query: string) => {
  try {
    const animals = await prisma.animal.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            species: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            age: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            weight: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            habitat: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return animals;
  } catch (error) {
    throw new Error("Failed to fetch animal data");
  }
};

export const getAnimalById = async (id: string) => {
  try {
    const animal = await prisma.animal.findUnique({ where: { id } });
    return animal;
  } catch (error) {
    throw new Error("Failed to fetch animal data");
  }
};
