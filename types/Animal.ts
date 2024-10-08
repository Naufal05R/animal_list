export type Diet = "Carnivore" | "Herbivore" | "Omnivore";

export type Animal = {
  name: string;
  species: string;
  age: number | string;
  weight: number | string;
  habitat: string;
  diet: Diet;
};
