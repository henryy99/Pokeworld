import { pokemonService } from "@/services/pokemonService";
import type { PokemonInfo } from "@/types/pokemon";
import type { PokeguessLevelState } from "@/types/store";
import { toast } from "sonner";
import { create } from "zustand";

const MAX_ATTEMPTS = 5;
export const usePokeguessLevelStore = create<PokeguessLevelState>(
  (set, get) => ({
    wrongGuessesLeft: MAX_ATTEMPTS,
    guessedPokemon: Array(5).fill(null),
    hints: {
      "type 1": "",
      "type 2": "",
      weight: null,
      order: null,
    },
    isLevelOver: false,
    pokemon: null,
    isLoading: false,
    currentGuessIndex: 0,

    setHints: (pokemon: PokemonInfo) => {
      const hints = {
        "type 1": pokemon.types[0] || "Unknown",
        "type 2": pokemon.types[1] || "None",
        weight: pokemon.weight || 0,
        order: pokemon.order || 0,
      };
      set({ hints });
    },
    getPokemonName: () => {
      return get().pokemon?.name || "";
    },
    generateRandomPokemon: async () => {
      // Implementation to fetch and set a new Pokemon
      try {
        set({ isLoading: true });
        const pokemon = await pokemonService.generateRandomPokemon();
        set({ pokemon });
        get().setHints(pokemon);
      } catch (error) {
        console.error("Failed to generate random Pokemon:", error);
        toast.error("Failed to generate random Pokemon.");
      } finally {
        set({ isLoading: false });
      }
    },
    makeGuess: (pokemonName: string) => {
      set((state) => {
        //
        const updatedGuesses = [...state.guessedPokemon];
        //Guess need to update
        updatedGuesses[state.currentGuessIndex] = pokemonName; // update specific index
        //get the correct pokemon name then check if it is correct
        const correctPokemon = state.pokemon?.name;
        const isCorrect = pokemonName === correctPokemon;

        //get the wrong guesses left
        const newWrongGuessesLeft = isCorrect
          ? state.wrongGuessesLeft
          : state.wrongGuessesLeft - 1;
        console.log(isCorrect);

        return {
          guessedPokemon: updatedGuesses,
          wrongGuessesLeft: newWrongGuessesLeft,
          isLevelOver: isCorrect || !newWrongGuessesLeft,
          currentGuessIndex: state.currentGuessIndex + 1,
        };
      });
    },
    setLevelOver: () => {
      set({ isLevelOver: true });
      console.log(get().isLevelOver);
      return;
    },

    resetGuesses: () =>
      set({
        wrongGuessesLeft: MAX_ATTEMPTS,
        guessedPokemon: Array(5).fill(null),
        hints: {
          "type 1": "",
          "type 2": "",
          weight: null,
          order: null,
        },
        isLevelOver: false,
        pokemon: null,
        currentGuessIndex: 0,
      }),
  })
);
