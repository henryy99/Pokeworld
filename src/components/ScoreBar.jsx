import { usePokemon } from "../context/PokemonContext";
import { memo, useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function ScoreBar() {
  const { isGameOver, dispatch, fetchPokemon } = usePokemon();
  const { username, health, profile_pic_path, currentScore } = useUser();

  useEffect(() => {
    if (health) return;
  }, [health]);

  function handleClickNext() {
    fetchPokemon();
    dispatch({ type: "RESET_GAME" });
  }

  return (
    <div
      className={`pt-8 border-b-2 border-black pb-3 flex text-2xl justify-between  `}
    >
      <div className="flex max-w-[1000px] mx-auto w-full  justify-between pl-2 pr-5 items-center">
        <div className="flex gap-5 items-center">
          <img
            src={profile_pic_path}
            alt="random"
            className="w-14 h-14 border-2 rounded-full bg-red-100"
          />
          <div>
            <h1>{username}</h1>
            <h1 className=" ">Score: {currentScore} </h1>
            <div className="flex gap-1">
              {Array(health)
                .fill(null)
                .map((_, i) => (
                  <img
                    key={i}
                    src="https://img.itch.zone/aW1nLzU4MTg3MjYucG5n/315x250%23c/pMCFlc.png"
                    alt=""
                    className="w-5"
                  />
                ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleClickNext}
          className={`${
            isGameOver && health > 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-y-100"
          } cursor-pointer bg-red-main-300 w-30 h-10 rounded-full text-white hover:bg-red-main-100 transition-all duration-500`}
          disabled={isGameOver ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default memo(ScoreBar);
