/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useContext, useReducer } from "react";
import { pokeguessReducer, pokeguessInitialState } from "./pokeguessReducer";
import { getPokemonTypeIcon } from "../utils/helpers";
export const PokemonContext = createContext();

const MAX_POKEMON = 151;

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokeguessReducer, pokeguessInitialState);
  const {
    pokemonSprite,
    isGameOver,
    wrongGuessesCount,
    hints,
    guesses,
    typedGuess,
    pokemonName,
    isLoading,
    currentGuessIndex,
  } = state;

  //Fetch pokemon function
  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * MAX_POKEMON) + 1;

    try {
      dispatch({ type: "IS_LOADING", payload: true });
      //call the pokemon API to get the information
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const pokemonData = await pokemonResponse.json();

      //get the addition information of pokemon
      const pokemonSpeciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`
      );
      const pokemonSpeciesData = await pokemonSpeciesResponse.json();

      //set pokemon name
      dispatch({ type: "POKEMON_NAME/SET", payload: pokemonData.name });

      //set hints
      dispatch({
        type: "HINTS/SET",
        payload: [
          getPokemonTypeIcon(pokemonData.types[0].type.name),
          getPokemonTypeIcon(pokemonData.types[1]?.type.name) ?? "none",
          pokemonSpeciesData.color.name,
          pokemonSpeciesData.habitat.name ?? "unknown",
        ],
      });

      //set pokemon image
      dispatch({
        type: "SPRITE/SET",
        payload: pokemonData.sprites.other["official-artwork"].front_default,
      });
      //set game over to false when start new game
      dispatch({ type: "GAME_OVER/SET", payload: false });
    } catch (error) {
      console.log("Error fetching pokemon", error);
    } finally {
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };

  //call the function on the first mount
  useEffect(() => {
    fetchPokemon();
  }, []);

  //export data to use
  return (
    <PokemonContext.Provider
      value={{
        state,
        guesses,
        pokemonSprite,
        isGameOver,
        wrongGuessesCount,
        hints,
        typedGuess,
        pokemonName,
        isLoading,
        currentGuessIndex,
        dispatch,
        fetchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
}
