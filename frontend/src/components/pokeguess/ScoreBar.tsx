import { getRandomProfilePicture } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";
import { usePokeguessSessionStore } from "@/stores/usePokeguessSessionStore";
import React from "react";
import { Button } from "../ui/button";

const ScoreBar = () => {
  const { getUsername } = useAuthStore();
  const { score: currentScore, health } = usePokeguessSessionStore();
  return (
    <div
      className={`p border-b-2 border-black pb-3 flex text-2xl justify-between  `}
    >
      <div className="flex max-w-[1000px] mx-auto w-full  justify-between pl-2 pr-5 items-center">
        <div className="flex gap-5 items-center">
          <img
            src={getRandomProfilePicture()}
            alt="random"
            className="w-14 h-14 border-2 rounded-full bg-red-100"
          />
          <div className="space-y-1">
            <h1 className="text-lg">{getUsername()}</h1>
            <h4 className=" text-xs">Score: {currentScore} </h4>
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

        {/* <button
          className={`${
            isGameOver && health > 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-y-100"
          } cursor-pointer bg-red-main-300 w-30 h-10 rounded-full text-white hover:bg-red-main-100 transition-all duration-500`}
          disabled={isGameOver ? false : true}
        >
          Next
        </button> */}
        <Button
          className="rounded-full px-6 font-pokemon"
          variant={"destructive"}
          disabled={true}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ScoreBar;
