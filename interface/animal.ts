export type Diet = "Carnivore" | "Herbivore" | "Omnivore";

export interface Animal {
  name: string;
  species: string;
  age: string;
  weight: string;
  habitat: string;
  diet: Diet;
}
