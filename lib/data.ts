import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5 as const;

export const getAnimals = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
  try {
    const animals = await prisma.animal.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
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
