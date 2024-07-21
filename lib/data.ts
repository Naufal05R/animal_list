import { prisma } from "@/lib/prisma";

const MAX_ITEM_PER_PAGE = 5 as const;

export const getAnimals = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * MAX_ITEM_PER_PAGE;

  try {
    const animals = await prisma.animal.findMany({
      skip: offset,
      take: MAX_ITEM_PER_PAGE,
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
    throw new Error("Failed to fetch animals data");
  }
};

export const getAnimalById = async (id: string) => {
  try {
    const animal = await prisma.animal.findUnique({ where: { id } });
    return animal;
  } catch (error) {
    throw new Error("Failed to fetch animal data by id");
  }
};

export const getAnimalPages = async (query: string) => {
  try {
    const totalAnimals = await prisma.animal.count({
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

    const totalPages = Math.ceil(totalAnimals / MAX_ITEM_PER_PAGE);

    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch animal page data");
  }
};
