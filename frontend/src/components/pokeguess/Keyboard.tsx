import { getKeyClass } from "@/lib/utils";
import { usePokeguessLevelStore } from "@/stores/usePokeguessLevelStore";
import { usePokeguessSessionStore } from "@/stores/usePokeguessSessionStore";
import { useTypedGuessStore } from "@/stores/useTypedGuess";
import { memo, useEffect, useEffectEvent } from "react";

function Keyboard() {
  const alphabet = [
    "QWERTYUIOP".split(""),
    " ASDFGHJKL ".split(""),
    ["Enter", ..."ZXCVBNM".split(""), "Backspace"],
  ];

  const { getPokemonName, guessedPokemon, makeGuess } =
    usePokeguessLevelStore();
  // Only subscribe to actions from the typed-guess store
  const addChar = useTypedGuessStore((s) => s.addChar);
  const removeLastChar = useTypedGuessStore((s) => s.removeLastChar);
  const resetTypedGuess = useTypedGuessStore((s) => s.resetTypedGuess);
  const decrementHealth = usePokeguessSessionStore((s) => s.decrementHealth);
  const incrementScore = usePokeguessSessionStore((s) => s.incrementScore);
  const pokemonName = getPokemonName();

  const handleClick = useEffectEvent((letter: string) => {
    //get the typed guess
    const typed = useTypedGuessStore.getState().typedGuess;
    //Check the letter is backspace
    if (letter === "Backspace") {
      //handle when guess still empty
      if (!typed) return;
      removeLastChar();
      return;
    }
    //Handle Enter
    if (letter === "Enter") {
      //If typedGuess < pokemonLength do nothing
      if (typed.length < pokemonName.length) return;

      //Check the answer is correct or not
      const isCorrect = typed.toLowerCase() === pokemonName;

      //add guess to store and reset typed guess
      makeGuess(typed.toLowerCase());

      resetTypedGuess();

      //if answer is correct go to next level
      const wrongGuessesLeft =
        usePokeguessLevelStore.getState().wrongGuessesLeft;
      if (isCorrect) incrementScore(wrongGuessesLeft * 10);
      if (!isCorrect && !wrongGuessesLeft) {
        decrementHealth();
      }

      return;
      //Check the guess is correct or not
      // const guess = useTypedGuessStore.getState().typedGuess;
      // const isCorrect = guess.toLowerCase() === pokemonName;
      // makeGuess(guess);
      // // if (isCorrect || !wrongGuessesLeft) {
      // //   dispatch({ type: "GAME_OVER/SET", payload: true });
      // //   addScore(wrongGuessesCount);
      // //   if (!isCorrect) minusHealth();
      // // }
      // if (isCorrect || wrongGuessesLeft === 0) {
      //   setLevelOver();
      // }
      // return;
    }
    if (typed.length >= pokemonName.length) return;

    addChar(letter);
  });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isLevelOver = usePokeguessLevelStore.getState().isLevelOver;
      if (
        isLevelOver ||
        e.metaKey ||
        e.ctrlKey ||
        e.key === "Tab" ||
        e.key === "CapsLock" ||
        e.altKey ||
        e.shiftKey
      )
        return; // Ignore meta and ctrl keys
      // prevent page nav for handled control keys
      if (e.key === "Backspace" || e.key === "Enter") {
        e.preventDefault();
      }
      handleClick(e.key);

      // setCurrentGuess
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  console.log(pokemonName);

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full max-w-[700px] mx-auto md:text-xl">
      {alphabet.map((letters, i) => (
        <div
          key={letters[i]}
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
                    guessedPokemon,
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
