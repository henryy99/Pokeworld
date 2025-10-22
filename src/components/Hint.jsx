import { usePokemon } from "../context/PokemonContext";

function Hint() {
  const { hints, wrongGuessesCount } = usePokemon();

  return (
    <div className={`flex justify-center gap-2 mb-[2rem]`}>
      {hints.map((hint, i) => (
        <div
          key={i}
          className={`bg-[#e3e3e1] rounded-md w-15 h-15 flex items-center font-bold  text-[25px] justify-center ${
            wrongGuessesCount > i ? "" : "hidden-hint"
          }`}
        >
          <span
            className={`${
              wrongGuessesCount > i ? "hint-text" : "hidden-hint-text"
            }`}
          >
            {hint}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Hint;
