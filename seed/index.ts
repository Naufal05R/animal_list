import { PrismaClient } from "@prisma/client";
import { animal } from "./data";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.animal.createMany({
    data: animal,
  });
};

seed()
  .then(() => {
    console.log("Seeding complete!");
  })
  .catch((error) => {
    console.error(error);
  });
