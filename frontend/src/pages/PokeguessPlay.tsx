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
    <div className="w-full md:max-w-4xl h-screen border-1 mx-auto font-pokemon flex flex-col">
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
