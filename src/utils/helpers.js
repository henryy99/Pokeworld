export const getPokemonTypeIcon = (type) => {
  const typeIcons = {
    fire: "🔥",
    water: "💧",
    grass: "🍃",
    electric: "⚡",
    psychic: "🧠",
    ice: "❄️",
    dragon: "🐉",
    dark: "🌑",
    fairy: "🧚",
    normal: "⚪",
    fighting: "🥊",
    flying: "🕊️",
    poison: "☠️",
    ground: "🌍",
    rock: "🪨",
    bug: "🐛",
  };
  return typeIcons[type] || "❌";
};
export function getTileClass(char, index, state, isCurrentGuess) {
  if (!char || isCurrentGuess) return "bg-gray-100 border-2 "; // optional fallback
  if (char === state.pokemonName[index]) return "bg-green-main border-0";
  if (state.pokemonName.includes(char)) return "bg-yellow-main border-0";
  if (!state.pokemonName.includes(char) && char !== "")
    return "bg-red-main border-0";
  return "bg-main-red"; // optional fallback
}

export const getKeyClass = (guesses, pokemonName, char) => {
  const allGuesses = guesses.filter(Boolean).join("").toUpperCase();

  if (!allGuesses.includes(char)) return "";

  const isCorrectSpot = guesses.some(
    (guess) =>
      guess && [...guess].some((c, i) => c === char && pokemonName[i] === char)
  );
  if (isCorrectSpot) return "bg-green-main";

  if (pokemonName.includes(char)) return "bg-yellow-main";

  return "bg-red-main";
};

export const getRandomProfilePicture = () => {
  const path = [
    "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlR2PWyiGV7Klp8zQr91-hxqqvGcK4BnfSw&s",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Pok%C3%A9mon_Charizard_art.png/250px-Pok%C3%A9mon_Charizard_art.png",
  ];
  return path[Math.floor(Math.random() * path.length)];
};
