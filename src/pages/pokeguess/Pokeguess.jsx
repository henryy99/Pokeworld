import GameOver from "../../components/GameOver";
import GetUserName from "../../components/GetUserName";
import { PokemonProvider } from "../../context/PokemonContext";

import { useUser } from "../../context/UserContext";
import PokeGuessBody from "../../ui/PokeGuessBody";

function Pokeguess() {
  const { username, health } = useUser();

  return (
    <div className="start-screen h-full flex justify-center items-center font-pixel tracking-wider w-full relative">
      {!username && <GetUserName />}
      {username && (
        <div className="flex flex-col justify-between w-full h-">
          {!health && (
            <div className="absolute  w-screen h-screen  flex justify-center items-center game-over-screen">
              <GameOver />
            </div>
          )}
          <PokeGuessBody />
        </div>
      )}
    </div>
  );
}

export default Pokeguess;
