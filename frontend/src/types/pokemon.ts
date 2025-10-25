export interface PokemonInfo {
  name: string;
  imageUrl: string;
  types: string[];
  height: number;
  weight: number;
  order: number;
}

export interface Hints {
  "type 1": string;
  "type 2": string;
  weight: number | null;
  order: number | null;
}
