import Confetti from "react-confetti";
import { usePokemon } from "../context/PokemonContext";
function PokemonImage() {
  const { pokemonSprite, isGameOver, wrongGuessesCount, pokemonName } =
    usePokemon();

  const isWin = wrongGuessesCount < 5;

  return (
    <>
      {isGameOver && isWin ? <Confetti /> : null}
      <div className="mx-auto block transition-all space-y-1 text-center">
        <img
          src={
            isGameOver && pokemonSprite
              ? pokemonSprite
              : "https://png.pngtree.com/png-clipart/20230823/original/pngtree-pokemon-game-symbol-pikachu-play-picture-image_8234794.png"
          }
          alt="A pokemon"
          className="w-53 transition-all duration-700 "
        />
        <p
          className={`text-4xl tracking-widest transition-all duration-1000 ${
            isGameOver ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {pokemonName}
        </p>
      </div>
    </>
  );
}

export default PokemonImage;
