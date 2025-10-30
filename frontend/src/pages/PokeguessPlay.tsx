import GuessTiles from "@/components/pokeguess/GuessTiles";
import Keyboard from "@/components/pokeguess/Keyboard";
import ScoreBar from "@/components/pokeguess/ScoreBar";
import { usePokeguessLevelStore } from "@/stores/usePokeguessLevelStore";
import { useEffect, useEffectEvent } from "react";

const PokeguessPlay = () => {
  const generateRandomPokemon = usePokeguessLevelStore(
    (s) => s.generateRandomPokemon
  );
  const pokemon = usePokeguessLevelStore((s) => s.pokemon);
  const init = useEffectEvent(async () => {
    await generateRandomPokemon();
  });
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="w-full  h-screen border-1 mx-auto font-pokemon flex flex-col relative justify-around">
      {pokemon && (
        <>
          <ScoreBar />
          <GuessTiles />
          <Keyboard />
        </>
      )}
    </div>
  );
};

export default PokeguessPlay;
