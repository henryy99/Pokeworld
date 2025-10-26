import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getToday() {
  const date = new Date();
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatted;
}

export const getRandomProfilePicture = () => {
  const path = [
    "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlR2PWyiGV7Klp8zQr91-hxqqvGcK4BnfSw&s",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Pok%C3%A9mon_Charizard_art.png/250px-Pok%C3%A9mon_Charizard_art.png",
  ];
  return path[Math.floor(Math.random() * path.length)];
};

export function getTileClass(
  char: string,
  index: number,
  pokemonName: string,
  isCurrentGuess: boolean
) {
  if (!char || isCurrentGuess) return "bg-gray-100 border-2 "; // optional fallback
  if (char === pokemonName[index]) return "bg-green-main border-0";
  if (pokemonName.includes(char)) return "bg-yellow-main border-0";
  if (!pokemonName.includes(char) && char !== "") return "bg-red-main border-0";
  return "bg-main-red"; // optional fallback
}

export const getKeyClass = (
  guessedPokemon: string[],
  pokemonName: string,
  char: string
) => {
  const allGuesses = guessedPokemon.filter(Boolean).join("").toUpperCase();

  if (!allGuesses.includes(char)) return "";

  const isCorrectSpot = guessedPokemon.some(
    (guess) =>
      guess && [...guess].some((c, i) => c === char && pokemonName[i] === char)
  );
  if (isCorrectSpot) return "bg-green-main";

  if (pokemonName.includes(char)) return "bg-yellow-main";

  return "bg-red-main";
};
