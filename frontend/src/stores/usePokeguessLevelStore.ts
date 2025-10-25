import { pokemonService } from "@/services/pokemonService";
import type { PokemonInfo } from "@/types/pokemon";
import type { PokeguessLevelState } from "@/types/store";
import { toast } from "sonner";
import { create } from "zustand";

export const usePokeguessLevelStore = create<PokeguessLevelState>(
  (set, get) => ({
    wrongGuessesLeft: 3,
    guessedPokemon: Array(5).fill(null),
    hints: {
      "type 1": "",
      "type 2": "",
      weight: null,
      order: null,
    },
    isGameOver: false,
    pokemon: null,
    isLoading: false,

    setHints: (pokemon: PokemonInfo) => {
      const hints = {
        "type 1": pokemon.types[0] || "Unknown",
        "type 2": pokemon.types[1] || "None",
        weight: pokemon.weight || 0,
        order: pokemon.order || 0,
      };
      set({ hints });
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
    makeGuess: (pokemonName: string) => {},
    resetGuesses: () =>
      set({
        wrongGuessesLeft: 3,
        guessedPokemon: [],
        hints: {
          "type 1": "",
          "type 2": "",
          weight: null,
          order: null,
        },
        isGameOver: false,
        pokemon: null,
      }),
  })
);
