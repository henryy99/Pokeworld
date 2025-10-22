import ScoreBar from "../components/ScoreBar";
import Keyboard from "../components/Keyboard";
import PokemonImage from "../components/PokemonImage";
import GuessTiles from "../components/GuessTiles";
import Hint from "../components/Hint";
import { PokemonProvider, usePokemon } from "../context/PokemonContext";
import { Spinner } from "react-bootstrap";

function PokeGuessBody() {
  const { isLoading } = usePokemon();

  return (
    <>
      <ScoreBar />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <PokemonImage />
          <Hint />
          <GuessTiles />
          <Keyboard />
        </>
      )}
    </>
  );
}

export default PokeGuessBody;
