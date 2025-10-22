import { usePokemon } from "../context/PokemonContext";
import { useUser } from "../context/UserContext";

function GameOver() {
  const { username, profile_pic_path, highestScore, playAgain } = useUser();
  const { dispatch, fetchPokemon } = usePokemon();
  function handlePlayAgain() {
    playAgain();
    dispatch({ type: "RESET_GAME" });
    fetchPokemon();
  }
  return (
    <div className="w-[80%] h-[50%] bg-white shadow-lg rounded-md flex flex-col items-center justify-center gap-5 pb-5 max-w-[500px] text-center z-100">
      <h1 className="text-5xl uppercase">Game over</h1>
      <div>
        {" "}
        <img
          src={profile_pic_path || "/PokeGuess.png"}
          alt="profile img"
          className="w-15 border-2 rounded-full h-15"
        />
        <h3 className="text-lg">{username || "Name"}</h3>
      </div>
      <div>
        <h4>Your highest score: {highestScore || 0}</h4>
        <h4>Your score: {0}</h4>
      </div>
      <div className="flex flex-col [&>button]:border-1 [&>button]:rounded-full [&>button]:w-35 [&>button]:h-10 gap-2 [&>button]:hover:scale-110 [&>button]:duration-300 [&>button]:transition-transform [&>button]:cursor-pointer">
        <button
          className="bg-red-main-300 border-red-main-300 text-white"
          onClick={handlePlayAgain}
        >
          Play again
        </button>
        <button>Leaderboard</button>
      </div>
    </div>
  );
}

export default GameOver;
