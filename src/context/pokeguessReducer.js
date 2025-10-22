export const pokeguessInitialState = {
  pokemonName: "",
  typedGuess: "",
  currentGuessIndex: 0,
  guesses: Array(5).fill(null),
  hints: Array(4).fill(null),
  isGameOver: false,
  wrongGuessesCount: 0,
  pokemonSprite: "",
  isLoading: false,
};

export function pokeguessReducer(state, action) {
  switch (action.type) {
    case "POKEMON_NAME/SET":
      return { ...state, pokemonName: action.payload.toUpperCase() };
    case "HINTS/SET":
      return {
        ...state,
        hints: state.hints.map((hint, index) => action.payload[index]),
      };
    case "GAME_OVER/SET":
      return { ...state, isGameOver: action.payload };
    case "ADD_CHAR":
      if (state.typedGuess.length >= state.pokemonName.length) return state;
      return { ...state, typedGuess: state.typedGuess + action.payload };
    case "ADD_GUESS":
      return {
        ...state,
        guesses: state.guesses.map((guess, index) =>
          index === state.currentGuessIndex
            ? state.typedGuess.toUpperCase()
            : guess
        ),
        typedGuess: "",
        currentGuessIndex: state.currentGuessIndex + 1,
        wrongGuessesCount: state.isGameOver
          ? state.wrongGuessesCount
          : state.wrongGuessesCount + 1,
      };
    case "REMOVE_LAST_CHAR":
      if (state.typedGuess.length === 0) return state;
      return {
        ...state,
        typedGuess: state.typedGuess.slice(0, -1),
      };
    case "RESET_GAME":
      return {
        ...state,
        typedGuess: "",
        currentGuessIndex: 0,
        guesses: Array(5).fill(null),
        isGameOver: false,
        wrongGuessesCount: 0,
      };
    case "SPRITE/SET":
      return { ...state, pokemonSprite: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
