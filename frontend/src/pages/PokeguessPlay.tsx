import ScoreBar from "@/components/pokeguess/ScoreBar";
import { usePokeguessSessionStore } from "@/stores/usePokeguessSessionStore";
import React from "react";

const PokeguessPlay = () => {
  const { health, score } = usePokeguessSessionStore();
  const init = () => {};
  return (
    <div className="w-full md:max-w-4xl h-screen border-1 mx-auto font-pokemon">
      <ScoreBar />
    </div>
  );
};

export default PokeguessPlay;
