export type Diet = "Carnivore" | "Herbivore" | "Omnivore";

export type Animal = {
  name: string;
  species: string;
  age: number;
  weight: number;
  habitat: string;
  diet: Diet;
};
