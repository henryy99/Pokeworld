import { usePokemon } from "../context/PokemonContext";
import { useEffect, useCallback, memo } from "react";
import { getKeyClass } from "../utils/helpers";
import { useUser } from "../context/UserContext";

function Keyboard() {
  const alphabet = [
    "QWERTYUIOP".split(""),
    " ASDFGHJKL ".split(""),
    ["Enter", ..."ZXCVBNM".split(""), "Backspace"],
  ];

  const {
    isGameOver,
    pokemonName,
    wrongGuessesCount,
    typedGuess,
    guesses,
    dispatch,
  } = usePokemon();

  const { addScore, minusHealth } = useUser();

  const handleClick = useCallback(
    (letter) => {
      if (isGameOver) return;
      if (typedGuess.length > pokemonName.length) return;

      if (letter === "Backspace") {
        dispatch({ type: "REMOVE_LAST_CHAR" });
        return;
      }

      if (letter === "Enter") {
        if (typedGuess.length < pokemonName.length) return;
        const isCorrect = typedGuess.toUpperCase() === pokemonName;

        dispatch({ type: "ADD_GUESS" });
        if (isCorrect || wrongGuessesCount === 4) {
          dispatch({ type: "GAME_OVER/SET", payload: true });
          addScore(wrongGuessesCount);
          if (!isCorrect) minusHealth();
        }

        return;
      }

      dispatch({ type: "ADD_CHAR", payload: letter.toLowerCase() });
    },
    [
      isGameOver,
      pokemonName,
      wrongGuessesCount,
      typedGuess,
      dispatch,
      minusHealth,
      addScore,
    ]
  );
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.tabKey ||
        e.key === "CapsLock" ||
        e.altKey ||
        e.shiftKey
      )
        return; // Ignore meta and ctrl keys
      handleClick(e.key);

      // setCurrentGuess
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClick]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full max-w-[700px] mx-auto md:text-xl">
      {alphabet.map((letters) => (
        <div
          key={letters}
          className="flex justify-center w-[95%]  mx-auto gap-1"
        >
          {letters.map((letter, index) => {
            if (letter === " ")
              return <div key={index} className="flex-[0.5]"></div>;

            return (
              <button
                key={letter}
                className={`
                  bg-[#e3e3e1] flex-1 text-black font-bold h-10 rounded-md cursor-pointer ${getKeyClass(
                    guesses,
                    pokemonName,
                    letter
                  )}`}
                onClick={() => handleClick(letter)}
              >
                {letter === "Backspace" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                    />
                  </svg>
                ) : (
                  letter
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default memo(Keyboard);
