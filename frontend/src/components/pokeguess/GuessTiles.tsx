import { getTileClass } from "@/lib/utils";
import { usePokeguessLevelStore } from "@/stores/usePokeguessLevelStore";
import { useTypedGuessStore } from "@/stores/useTypedGuess";

function Line({
  isCurrentGuess,
  guess,
  pokemonName,
}: {
  isCurrentGuess: boolean;
  guess: string;
  pokemonName: string;
}) {
  const tiles = [];

  for (let i = 0; i < pokemonName.length; i++) {
    const char = guess[i];
    const className = getTileClass(char, i, pokemonName, isCurrentGuess);
    tiles.push(
      <span
        className={`bg-[#e3e3e1] w-8 h-8  flex items-center justify-center border-1 border-${className} border-gray-200 rounded-sm text-2xl font-bold md:w-20 md:h-20 md:text-4xl ${className} transition-all duration-500`}
        key={i}
      >
        {char ? char.toUpperCase() : ""}
      </span>
    );
  }

  return <div className="line flex gap-2">{tiles}</div>;
}

function GuessTiles() {
  const { guessedPokemon, currentGuessIndex, getPokemonName } =
    usePokeguessLevelStore();
  const pokemonName = getPokemonName();
  const { typedGuess } = useTypedGuessStore();
  console.log("reredner guess itles");

  return (
    <div className="flex flex-col gap-2 items-center justify-center mb-[20px]">
      {guessedPokemon.map((guess, index) => {
        return (
          <Line
            key={index}
            guess={currentGuessIndex === index ? typedGuess : guess ?? ""}
            isCurrentGuess={(currentGuessIndex === index) as boolean}
            pokemonName={pokemonName}
          />
        );
      })}
    </div>
  );
}

export default GuessTiles;
