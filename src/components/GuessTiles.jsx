import { usePokemon } from "../context/PokemonContext";
import { getTileClass } from "../utils/helpers";
function Line({ state, guess, isCurrentGuess }) {
  const tiles = [];

  for (let i = 0; i < state.pokemonName.length; i++) {
    const char = guess[i];
    const className = getTileClass(char, i, state, isCurrentGuess);
    tiles.push(
      <span
        className={`bg-[#e3e3e1] w-10 h-10  flex items-center justify-center border-1 border-${className} border-gray-200 rounded-sm text-2xl font-bold md:w-20 md:h-20 md:text-4xl ${className} transition-all duration-500`}
        key={i}
      >
        {char ? char.toUpperCase() : ""}
      </span>
    );
  }

  return <div className="line flex gap-2">{tiles}</div>;
}

function PokedexBody() {
  const { state, dispatch } = usePokemon();

  return (
    <div className="flex flex-col gap-2 items-center justify-center mb-[20px]">
      {state.guesses.map((guess, index) => {
        return (
          <Line
            key={index}
            state={state}
            dispatch={dispatch}
            guess={
              state.currentGuessIndex === index ? state.typedGuess : guess ?? ""
            }
            isCurrentGuess={state.currentGuessIndex === index}
          />
        );
      })}
    </div>
  );
}

export default PokedexBody;
