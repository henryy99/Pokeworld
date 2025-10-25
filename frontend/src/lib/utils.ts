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
